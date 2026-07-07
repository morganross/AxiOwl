# AxiOwl Architecture Overview

AxiOwl is a local Windows coordinator for AI provider messaging. It discovers provider sessions, stores them in a local registry, accepts send/create/rename requests through CLI or MCP, routes those requests through provider-specific delivery edges, and records enough evidence to distinguish a local handoff from a real provider response.

Plain English version: AxiOwl is the switchboard. It does not replace Codex, Cursor, VS Code, Antigravity, Claude, OpenCode, or Copilot. It learns where their live sessions are, gives them a way to receive messages, and gives them a way to reply back with identity attached.

## Why The Architecture Is Split

AxiOwl does not use one universal provider adapter because the providers are not the same product surface.

| Surface type | Why it needs its own path |
|---|---|
| Desktop agent window | Usually has private UI/session state and may require a bridge or patch. |
| Editor chat | Often has extension APIs, workspace state, and command routing. |
| CLI | Usually has process execution, session files, auth state, and separate MCP config. |
| VSIX-backed chat | Uses extension install, host APIs, and provider-owned MCP registration. |
| Remote node | Requires a network/node contract and is intentionally separate from local provider repair. |

The design choice is deliberate: one generic path would hide provider differences and make failures harder to diagnose. A provider-specific edge makes the contract clear: discovery, install, send, proof, and known risks all belong to that provider surface.

## High-Level Flow

```text
user / provider MCP call / CLI
  -> axiowl.exe
  -> CLI or MCP command handler
  -> MessagePipeline
  -> sender identity resolution
  -> target registry resolution
  -> targeted discovery repair when safe
  -> final visible body construction
  -> provider_edges dispatch
  -> provider-specific delivery module
  -> delivery logs and provider result
  -> provider reply over MCP when the target responds
```

## Core Components

| Component | Current role | Why it exists |
|---|---|---|
| `apps/windows-desktop/src/cli.cpp` | Command entry point for `send`, `create`, `rename`, `discover`, `list`, `status`, `mcp-server`, installer helper modes, and delivery worker modes. | Keeps human, installer, and provider automation on the same runtime instead of separate scripts. |
| `apps/windows-desktop/src/mcp_server.cpp` | MCP server and tool implementation. It requires provider/session metadata for sender identity and fails loudly when identity is missing. | Provider replies need real identity. Guessing sender names creates stale or misrouted replies. |
| `apps/windows-desktop/src/message_pipeline.cpp` | Main send pipeline. It validates requests, resolves sender/target, runs one targeted discovery repair, records receipt boundaries, and starts delivery. | Centralizes the difference between “AxiOwl accepted this” and “the provider received this.” |
| `apps/windows-desktop/src/registry.cpp` | Durable local registry of agents, aliases, providers, provider session ids, node ids, sendability, and discovery source. | Names are for people; provider session ids are for routing. The registry connects both. |
| `apps/windows-desktop/src/discovery*.cpp` | Provider discovery and registry merge. | Provider sessions move, expire, rename, and restart. Discovery refreshes local truth. |
| `apps/windows-desktop/src/provider_edges.cpp` | Provider dispatch table for deliver/create/rename. | Makes supported surfaces explicit. Unknown or out-of-scope providers fail clearly. |
| `apps/windows-desktop/src/provider_*.cpp` | Provider-specific delivery implementations. | Each provider has different mechanics, proof, and failure modes. |
| `apps/windows-desktop/src/delivery_worker.cpp` | Background delivery handoff. | A send request can return after AxiOwl accepts it while provider delivery continues separately. |
| `apps/windows-desktop/src/installer_helper_main.cpp` | MSI helper executable. Installs runtime, selected provider integrations, patches, discovery, and finalization. | MSI custom actions stay organized by feature and can log provider-specific steps. |
| `apps/windows-desktop/installer/build-windows-msi.ps1` | Native build and MSI packaging. | Produces the release artifact and verifies payload/provenance. |
| `apps/windows-desktop/extensions/vscode/out/extension.js` | VS Code bridge extension. Registers MCP definition and runs VS Code chat/session commands. | VS Code needs an in-host bridge because the useful chat APIs live inside VS Code. |
| `apps/windows-desktop/extensions/cursor/out/extension.js` | Cursor bridge extension. Uses command files, watcher, URI fallback, and Cursor patch-provided commands. | Cursor delivery needs in-process visibility plus patched submit entry points. |

## Receipt Boundary

The most important operational rule is that receipts are not delivery proof.

| Evidence | Meaning | What it does not prove |
|---|---|---|
| `accepted_by_axiowl` | AxiOwl validated the request and handed it to the delivery layer. | It does not prove the provider UI received, displayed, or processed the message. |
| provider result `accepted_by_provider` | The provider edge reported acceptance. | It may still not prove a useful human-visible response. |
| provider reply over MCP | The target provider received the message, acted on it, and replied through AxiOwl with sender identity. | It does not prove every future session of that provider will work. |

This distinction is not academic. It prevents false success reports. AxiOwl should never treat “we queued it” as the same thing as “the provider answered.”

## Registry Model

The registry is durable local state. It is not just a cache. It is the local address book that maps user-facing chat names to provider-owned sessions.

Important fields:

| Field | Purpose | Design note |
|---|---|---|
| `display_name` | Human-readable chat or agent name. | Useful for humans, unsafe as the only routing key. |
| `aliases` | Extra names or sender addresses. | Helps preserve usability across renames. |
| `provider` | Provider edge such as `codex`, `cursor`, or `vscode_native`. | Determines which delivery module is used. |
| `provider_session_id` | Provider-owned session id. | The strongest local routing key. |
| `node_id` | Local or remote node identity. | Keeps local and remote records distinguishable. |
| `sendable` | Whether AxiOwl currently believes the row can receive messages. | Must be earned by discovery or proof. |
| `source` | Discovery/manual/MCP source of the row. | Helps diagnose stale or manually inserted records. |
| `last_seen_at` | Last discovery or registration time. | Freshness signal, not delivery proof. |
| `last_verified_at` | Last stronger proof time. | Better than discovery alone. |
| `last_error` | Last known problem. | Should be preserved for diagnosis. |

## Sender Identity

AxiOwl needs to know who is sending because replies must route back to a real provider session. For MCP, sender identity should come from provider-owned metadata or from a provider patch that supplies equivalent metadata.

Environment-only identity is not enough for final CLI support because it can be injected by the caller without proving the provider session actually owns that identity.

Plain English version: the provider must show its ID when it calls AxiOwl. AxiOwl should not simply believe a label.

## Discovery

Discovery finds sessions and refreshes the registry. It can repair missing or stale targets once during a send, but it is not allowed to hide broken delivery.

Discovery should:

- find current provider sessions;
- preserve manual/protected rows when appropriate;
- downgrade stale auto-discovered rows when proof disappears;
- keep stale paths from becoming sendable;
- leave evidence in logs.

Discovery should not:

- mark stale sessions as working;
- convert a missing provider into a silent success;
- use remote fallback to hide a local provider failure;
- delete unrelated provider data.

## Delivery

Delivery is provider-specific because each surface needs different mechanics:

- Codex has local app/session and CLI paths.
- VS Code uses an extension and native chat/session commands.
- Cursor uses a bridge, command files, watcher, URI fallback, and patch-provided submit command.
- Antigravity has agent and CLI surfaces with different mechanics.
- Claude, OpenCode, and Copilot CLI surfaces require CLI session and metadata handling.

The provider edge should report precise states: accepted, failed, unsupported, auth-blocked, out-of-scope, missing patch, stale target, or no provider proof.

## Installer Integration

The MSI installs AxiOwl once but should treat each provider feature as a separate install unit. That is the practical compromise: one installer for users, separate logic for provider safety.

The installer should only close, patch, configure, remove, or restart provider apps for selected features that need that action. This avoids collateral damage and makes uninstall/reinstall behavior predictable.

See [Installer Behavior Matrix](installer-behavior-matrix.md).

# AxiOwl Architecture Overview

AxiOwl is a local Windows coordinator for sending messages between AI provider sessions. It exposes a CLI and MCP server, keeps a durable local registry of provider sessions, discovers active sessions, and delivers messages through provider-specific edges.

## Core Flow

```text
user / provider MCP call / CLI
  -> axiowl.exe
  -> MCP or CLI command handler
  -> MessagePipeline
  -> registry target and sender resolution
  -> targeted discovery repair when needed
  -> provider_edges dispatch
  -> provider-specific delivery
  -> delivery logs and provider proof
```

## Major Components

| Component | Current role |
|---|---|
| `apps/windows-desktop/src/cli.cpp` | Command entry point for `send`, `create`, `rename`, `discover`, `list`, `status`, `mcp-server`, installer helper modes, and delivery worker modes. |
| `apps/windows-desktop/src/mcp_server.cpp` | MCP server and tool implementation. It requires provider/session metadata for sender identity and fails loudly when identity is missing. |
| `apps/windows-desktop/src/message_pipeline.cpp` | Main message pipeline. It validates requests, resolves sender/target, runs one targeted discovery repair, records receipt boundaries, and starts delivery. |
| `apps/windows-desktop/src/registry.cpp` | Durable local registry of agents, aliases, providers, provider session ids, node ids, sendability, and discovery source. |
| `apps/windows-desktop/src/discovery*.cpp` | Provider discovery. It finds local provider sessions and merges them into the registry without blindly downgrading protected manual records. |
| `apps/windows-desktop/src/provider_edges.cpp` | Provider dispatch table for deliver/create/rename. |
| `apps/windows-desktop/src/provider_*.cpp` | Provider-specific delivery implementation. |
| `apps/windows-desktop/src/delivery_worker.cpp` | Background delivery handoff. AxiOwl can accept a message before provider delivery completes. |
| `apps/windows-desktop/src/installer_helper_main.cpp` | MSI helper executable. Installs local exe, PATH, MCP wrappers/configs, provider extensions, patches, discovery, and finalization. |
| `apps/windows-desktop/installer/build-windows-msi.ps1` | Native build and MSI packaging process. |
| `apps/windows-desktop/extensions/vscode/out/extension.js` | VS Code bridge extension. Registers MCP definition and dispatches native VS Code chat commands. |
| `apps/windows-desktop/extensions/cursor/out/extension.js` | Cursor bridge extension. Uses command files, a file watcher, URI fallback, and Cursor patch-provided commands. |

## Receipt Boundary

An AxiOwl send receipt is not the same as provider delivery proof.

| Receipt or proof | Meaning |
|---|---|
| `accepted_by_axiowl` | AxiOwl accepted and validated the request and handed it to the delivery layer. |
| provider result `accepted_by_provider` | The provider edge reported that the target provider accepted the message. |
| response over MCP | The strongest end-to-end proof: the target provider received the message, acted on it, and replied through AxiOwl with provider-owned sender identity. |

## Registry Model

A registry row represents one reachable provider session or agent.

Important fields include:

| Field | Purpose |
|---|---|
| `display_name` | Human-readable chat or agent name. |
| `aliases` | Extra names or sender addresses. |
| `provider` | Provider edge such as `codex`, `cursor`, `vscode_native`, or `claude_code_cli`. |
| `provider_session_id` | Provider-owned session id. |
| `node_id` | Local or remote node identity. |
| `sendable` | Whether AxiOwl currently believes the row can receive messages. |
| `source` | Discovery/manual/MCP source of the row. |
| `last_seen_at` | Last discovery or registration time. |
| `last_verified_at` | Last stronger proof time. |
| `last_error` | Last known problem. |

## Sender Identity Rule

AxiOwl must know who is sending. For MCP, sender identity must come from the provider's MCP metadata or a provider patch that supplies metadata programmatically. Environment-only identity injection is not enough for final provider CLI support.

This rule exists because replies must route to a real provider session, not to a guessed display name or stale path.

## Discovery Rule

Discovery is allowed to repair stale or missing registry state, but it is not a substitute for provider delivery proof. Discovery can find candidate sessions; a response over MCP proves the full path.

## Installer Role

The MSI installs the local AxiOwl runtime and selected provider integrations. Each provider feature should behave like a separable install unit even when folded into one MSI.

See [Installer Behavior Matrix](installer-behavior-matrix.md).

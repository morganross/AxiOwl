# Provider Support Matrix

This page is the public source of truth for provider and surface support. A provider is a brand plus a surface, not just a brand name. For example, `cursor:agents`, `codex:cli`, and `copilot:vsix extension` are separate surfaces because they use different discovery, installation, delivery, and identity paths.

## Why the matrix is strict

It is easy to say a provider "works" when only part of the path works. A configuration file is not support. Discovering a stale chat is not support. An AxiOwl handoff receipt is not support. A provider is supported when the documented round trip works with current provider-owned identity evidence.

Plain English: supported means the target can receive a message and reply back through AxiOwl with the right identity under the current release.

## Status terms

| Status | Meaning |
|---|---|
| `supported` | Current evidence supports the documented provider edge and response path. |
| `target` | Intended support or code exists, but the current support bar has not been met. |
| `experimental` | A path exists but depends on fragile private behavior or patch-sensitive internals. |
| `unsupported` | No current supported implementation is promised. |
| `removed` | The surface was explicitly removed from current scope. |

## Current matrix

| Provider surface | Status | Delivery method | Installer action | Required integration | Public status note | Known risks |
|---|---|---|---|---|---|---|
| `codex:agents` | supported | Codex desktop or local agent session plus AxiOwl MCP reply path. | Install the Codex integration and MCP support when selected. | MCP and provider session metadata. | Response-backed support is documented. | Existing sessions may need a restart after integration changes. |
| `codex:cli` | supported | Codex CLI session delivery plus AxiOwl MCP reply path. | Install the CLI integration when selected. | Provider-owned session metadata. | Response-backed support is documented. | Session identity must remain tied to the current CLI session. |
| `vscode:agents` | supported | VS Code native chat and session commands through the AxiOwl bridge. | Install the bridge and MCP definition when selected. | VSIX bridge and native session ownership. | Response-backed support is documented. | Stale extension folders and old workspace state can confuse discovery. |
| `copilot:vsix extension` | supported | VS Code Copilot-backed session through the VS Code bridge. | Install the bridge and MCP definition when selected. | VSIX extension and MCP definition. | Response-backed support is documented. | Requires a usable VS Code host and Copilot session. |
| `cursor:agents` | supported | Cursor bridge command files, watcher path, URI fallback, and selected editor integration. | Install the Cursor bridge and selected integration files. | Bridge, MCP configuration, discovery, and patch-sensitive editor boundary. | Response-backed support is documented. | Cursor private internals can change; URI wake-up is fallback only. |
| `antigravity:agents` | supported | Antigravity agent session and AxiOwl MCP reply path. | Install the selected MCP integration. | Provider session metadata. | Response-backed support is documented. | Provider state must expose a usable sender identity. |
| `antigravity:cli` | target | Documented CLI conversation discovery and resume path. | Install CLI MCP configuration only when selected. | Provider-owned metadata support is still being hardened. | Useful for evaluation; not a final support promise. | Quota, authentication, and metadata ownership can block promotion. |
| `claude-code:cli` | target | Documented Claude Code CLI session path. | Install CLI MCP configuration only when selected. | Provider-owned metadata support is still being hardened. | Useful for evaluation; not a final support promise. | Sessions need valid current state and a usable working directory. |
| `opencode:cli` | target | OpenCode CLI session path with provider configuration. | Install CLI MCP configuration only when selected. | Provider-owned metadata support is still being hardened. | Useful for evaluation; not a final support promise. | Do not substitute environment-only identity for provider metadata. |
| `copilot:cli` | target | Copilot CLI create or resume path. | Install CLI MCP configuration only when selected. | Provider-owned session metadata and authentication boundary. | Useful for evaluation; not a final support promise. | CLI authentication differs from editor authentication. |
| `cursor:cli` | unsupported | No accepted current Cursor CLI surface is promised. | None by default. | Not applicable. | Do not confuse Cursor editor or agent windows with a CLI. | A future product surface would need a new contract. |
| `remote` | unsupported | Not part of the local provider support promise. | Unchecked unless explicitly selected for a separate deployment. | A separate remote contract is required. | Do not use it to hide a local delivery failure. | Adds network, server, access, and availability boundaries. |

## The support bar

A provider surface is supported only when:

1. Provider or session discovery works.
2. Installer behavior is selected-feature-specific.
3. AxiOwl can address the target by stable provider identity.
4. AxiOwl can send to the provider.
5. The provider receives or persists the message.
6. The provider can reply through AxiOwl MCP.
7. The reply carries correct provider-owned sender identity.
8. The path and known risks are documented.

## Why CLI providers are mostly target

Several CLI experiments proved that providers could be reached. The public support bar is higher: the provider must supply session identity through MCP metadata or through a robust provider integration. A per-session environment value can help an experiment but can also make a caller-owned label look like provider-owned truth.

## Security note

Provider support is not the same as authorization to perform a sensitive action. Device admission, message protection, replay protection, and receiver-owned authorization remain separate security boundaries. See [Security And Trust](../security/README.md).

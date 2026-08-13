# Provider Support Matrix

A provider in AxiOwl is a brand plus a concrete surface. Codex Desktop, Codex CLI, and Codex Remote are separate integrations because they have different discovery, installation, delivery, and identity contracts.

Last source/package reconciliation: **August 12, 2026**.

## Status Terms

| Term | Meaning |
|---|---|
| Implemented | The current provider package declares and implements the operation. |
| Packaged | The current Windows installer graph has an isolated feature and provider-package payload for the surface. |
| Historical roundtrip | A provider response has been observed in an earlier test, but this is not certification of the newest artifact. |
| Experimental | The path depends on provider-private editor or CLI behavior that may change between provider versions. |

## Current Provider Packages

| Provider surface | Implemented operations | Windows installer action | Evidence and present limit |
|---|---|---|---|
| Antigravity agents | Discover, send, create, rename, status | MCP/provider worker package | Historical roundtrip evidence; provider state and execution behavior still vary by session |
| Antigravity CLI | Discover, send, create, rename, status | CLI MCP/config and metadata package | Historical roundtrip evidence; authentication remains external |
| Claude Code CLI | Discover, send, create, rename | User configuration and provider worker | Historical roundtrip evidence; stale working directories can block Claude before MCP starts |
| Codex agents | Discover, send, create, rename, status | Codex plugin, MCP config, skill, and provider worker | Historical roundtrip evidence; current source now implements native create as well as send/rename |
| Codex CLI | Discover, send, create, rename, status | CLI MCP/session package | Historical roundtrip evidence; desktop and CLI identities remain distinct |
| Codex Remote | Discover, send, create, rename | Isolated Codex-owned Remote integration | Implemented/package-backed; remote project prerequisites remain provider-owned |
| Copilot CLI | Discover, send, create, rename | Metadata patch and provider worker | Implemented/package-backed; GitHub authentication is not installed by AxiOwl |
| Cursor agents | Discover, send, create, rename | Bridge extension, MCP config, adaptive integration, provider worker | Historical roundtrip evidence; editor-private behavior makes this experimental |
| Cursor Agent CLI | Discover, send, create, rename | CLI session-metadata patch and provider worker | Implemented/package-backed; Cursor authentication is external |
| OpenCode CLI | Discover, send, create, rename | MCP/native metadata config and provider worker | Historical roundtrip evidence; the native executable path must preserve message bytes |
| VS Code Copilot-backed | Discover, send, create, rename, status | VSIX bridge, MCP config, metadata patch, provider worker | Historical roundtrip evidence; VS Code/Copilot private storage and extension updates remain experimental |

Every row also carries AxiOwl-owned install, removal, and verification behavior where applicable. Internal package maintenance hooks do not create a public whole-product repair mode, and they do not install or authenticate the provider product itself.

## Built-In And Protocol Targets

| Surface | Status | Boundary |
|---|---|---|
| AxiOwl Mailbox | Built in | Local endpoint for messages, replies, status, and evidence |
| External A2A agent | Implemented | Imported Agent Card and task-oriented delivery |
| AxiOwl remote node | Implemented | Explicit A2A node transport and separate provider delivery on the destination |
| Secure XMPP target | Implemented in source | Protected endpoint transport; end-to-end production proof remains incomplete |

## VS Code Naming

Current package inventory contains one packaged `vscode_copilot_backed` provider. Older docs used "VS Code native" as if it were a separately packaged provider. Native bridge snapshots and compatibility aliases still exist, but they are part of the same packaged VS Code/Copilot integration, not a second MSI provider package.

## What Packaging Proves

A package proves that AxiOwl owns a bounded worker and its declared integration assets. It does not prove that:

- the provider is installed or authenticated;
- a current session is discoverable;
- the provider accepted the latest message;
- the provider returned a correlated reply;
- the next provider update will preserve a private patch boundary.

Use the provider page for risks and [Receipts, Delivery, And Completion Proof](../concepts/receipts-vs-proof.md) for evidence interpretation.

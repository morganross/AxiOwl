---
sidebar_position: 5
slug: /providers
---

# Providers

AxiOwl keeps a provider brand and concrete surface together because desktop agents, editor chats, and command-line sessions can use different discovery, metadata, and delivery methods.

## Local Windows Provider Packages

| Provider surface | Discover | Send | Create | Rename | Status | MCP reply | Integration |
|---|---:|---:|---:|---:|---:|---:|---|
| Antigravity agents | Yes | Yes | Yes | Yes | Yes | Yes | Desktop MCP and isolated worker |
| Antigravity CLI | Yes | Yes | Yes | Yes | Yes | Yes | CLI MCP, metadata, and worker |
| Claude Code CLI | Yes | Yes | Yes | Yes | | Yes | User MCP configuration and worker |
| Codex agents | Yes | Yes | Yes | Yes | Yes | Yes | Plugin, MCP, skill, and worker |
| Codex CLI | Yes | Yes | Yes | Yes | Yes | Yes | CLI MCP and session package |
| Codex Remote | Yes | Yes | Yes | Yes | | | Codex-owned SSH Remote worker |
| Copilot CLI | Yes | Yes | Yes | Yes | | Yes | Session metadata and worker |
| Cursor agents | Yes | Yes | Yes | Yes | | Yes | Bridge extension, MCP, and worker |
| Cursor Agent CLI | Yes | Yes | Yes | Yes | | Yes | CLI metadata and worker |
| OpenCode CLI | Yes | Yes | Yes | Yes | | Yes | MCP/native metadata and worker |
| VS Code Copilot-backed | Yes | Yes | Yes | | Yes | Yes | VSIX bridge, MCP, metadata, and worker |

Blank cells mean the public local-provider contract does not define that operation for the surface.

## Codex

**Codex agents** addresses Codex desktop conversations through provider-owned thread identity. The package installs the AxiOwl Codex plugin, MCP configuration, skill, and worker.

**Codex CLI** is a separate terminal surface with its own registry identity and MCP/session integration.

**Codex Remote** addresses Codex-owned SSH Remote projects and conversations. It is distinct from an AxiOwl A2A node or mobile daemon host.

## Cursor And VS Code

**Cursor agents** uses the AxiOwl bridge, MCP configuration, and exact Composer-session integration. **Cursor Agent CLI** remains a separate command-line surface.

**VS Code Copilot-backed** uses an in-host VSIX bridge, MCP configuration, provider metadata, and an isolated worker. Existing `vscode` or “VS Code native” labels refer to this same packaged integration rather than a second provider package.

## Antigravity

**Antigravity agents** connects desktop agent sessions. **Antigravity CLI** connects command-line sessions. They remain separate registry surfaces with their own package ownership.

## Claude Code, Copilot CLI, And OpenCode

**Claude Code CLI** uses provider session records and resume behavior with AxiOwl MCP configuration in the user's Claude environment.

**Copilot CLI** is the standalone command-line product, separate from VS Code Copilot-backed sessions.

**OpenCode CLI** uses provider-owned session state and native command/configuration boundaries while preserving exact message content.

## AxiOwl Mailbox

The mailbox is the built-in local coordination endpoint. It provides a stable inbox for messages, receipts, and provider results without requiring an external provider account.

## Daemon Provider Catalog

The AxiOwl daemon publishes the providers, models, modes, and capabilities available for connected agent creation and session control on that host. This runtime catalog is separate from the local Windows installer package list.

The mobile client reads the host catalog, then creates, imports, opens, or controls an agent through the daemon. The provider process and credentials remain on the host.

## External A2A Agents

An external Agent Card can be imported as an A2A target. AxiOwl can send messages, create and follow tasks, and collect results or artifacts from the external service.

## Reading Operations

- **Discover** finds existing sessions.
- **Send** delivers a request to an existing target.
- **Create** starts a new session or agent through the selected integration.
- **Rename** changes the provider-visible title when supported.
- **Status** returns provider-specific state.
- **MCP reply** lets the provider session return correlated identity and content.

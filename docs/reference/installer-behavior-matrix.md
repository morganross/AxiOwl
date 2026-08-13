---
sidebar_position: 6
---

# Installer Behavior Matrix

The Windows MSI provides one installation experience with independently selectable provider, A2A, and secure-device features.

## Core Experience

| Feature | What it provides |
|---|---|
| Core runtime | AxiOwl coordination services, shared libraries, manifest, logs, and owned cleanup |
| Mailbox GUI | Built-in inbox, result views, provider workflows, and shortcuts |
| Local CLI and MCP | Command-line coordination and provider tool boundary |
| PATH integration | Convenient access to the installed CLI |
| Discovery | Provider installation and session discovery foundations |

## Provider Features

| Provider feature | Selected integration |
|---|---|
| Codex agents | Codex plugin, MCP configuration, skill, and worker |
| Codex Remote | Remote provider worker and configuration |
| Codex CLI | CLI MCP and session support |
| VS Code Copilot-backed | VSIX bridge, MCP, session metadata, and worker |
| Antigravity agents | Desktop MCP and worker |
| Antigravity CLI | CLI MCP, metadata, and worker |
| Claude Code CLI | User MCP configuration and worker |
| Copilot CLI | Session metadata and worker |
| Cursor Agent CLI | CLI metadata and worker |
| OpenCode CLI | MCP/native metadata and worker |
| Cursor agents | Bridge extension, MCP, and worker |

Discovery recommends the provider features that match products found on the machine. The user reviews and confirms the final selection.

## Network Features

| Feature | What it provides |
|---|---|
| A2A Server | Machine-scoped standards-based agent service |
| A2A Client | Interactive user broker for provider-backed A2A work |
| XMPP Client | Per-user approved-device client and trust support |
| XMPP Server | Optional native Windows self-host service and administration tool |

These features are independent, so an installation can choose the local, A2A, and secure-device roles that fit its workflow.

## Selected Ownership

Each checkbox owns the AxiOwl files, configuration, bridges, and process scope for that feature. Provider applications continue to own provider accounts, authentication, and conversations.

## Product Lifecycle

AxiOwl uses two clear whole-product operations:

- **Uninstall** removes AxiOwl-owned installed components.
- **Uninstall-install** performs a complete Uninstall and then installs the selected AxiOwl artifact.

This gives every replacement a consistent, understandable lifecycle.

See [AxiOwl Windows Installer](../installer/README.md) for the guided installation experience.

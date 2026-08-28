---
sidebar_position: 6
---

# Installer Behavior Matrix

The Windows MSI provides independently selectable provider, A2A, SSH, and daemon features.

## Core Experience

| Feature | What it provides |
|---|---|
| Required payload | Core runtime, helper components, manifests, logs, and cleanup ownership |
| Mailbox GUI | Desktop interface, mailbox, provider workflows, and Mobile App tab |
| Local CLI and MCP | Command-line coordination and provider tool boundary |
| PATH integration | Access to the installed AxiOwl CLI |
| Local discovery | Provider and session discovery |

## Provider Features

| Provider feature | Selected integration |
|---|---|
| Codex agents | Codex plugin, MCP configuration, skill, and worker |
| Codex Remote | Codex-owned SSH Remote provider support |
| Codex CLI | CLI MCP and session metadata support |
| VS Code Copilot-backed | VSIX bridge, MCP, metadata integration, and worker |
| Antigravity agents | Desktop MCP and worker |
| Antigravity CLI | CLI MCP, metadata, and worker |
| Claude Code CLI | User MCP configuration and worker |
| Copilot CLI | Session metadata and worker |
| Cursor Agent CLI | CLI session metadata and worker |
| OpenCode CLI | MCP/native metadata and worker |
| Cursor agents | Bridge extension, MCP, and worker |

## Agent And Node Features

| Feature | What it provides |
|---|---|
| A2A Server | Machine-scoped standards-based agent service |
| A2A Client | Interactive user broker for provider-backed A2A work |
| SSH Command Dispatch | Optional marker and ownership for configured SSH command routes |

## Daemon Runtime Choice

| Choice | MSI feature | Description |
|---|---|---|
| Node | AxiOwl Node daemon | Recommended; installs daemon assets and `AxiOwlDaemon` service host using installed Node |
| Native | AxiOwl native C++ daemon | Installs native daemon executables, provider runtimes, and `AxiOwlService` |
| None | No daemon feature | Installs selected local, A2A, SSH, and provider features without mobile host runtime |

## Selection Contract

Provider discovery recommends provider checkboxes. The user selects the final provider, agent, node, and daemon features. One daemon runtime choice applies to the installation.

## Product Lifecycle

- **Uninstall** removes AxiOwl-owned installed components.
- **Uninstall-install** performs a complete Uninstall and then installs the selected artifact and feature set.

Provider applications, accounts, conversations, and unrelated user files remain under their original owners.

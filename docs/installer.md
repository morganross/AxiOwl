---
sidebar_position: 9
slug: /installer
---

# Windows Installer

The Windows MSI provides one feature-selection experience for the AxiOwl core, provider integrations, A2A, SSH, and the mobile daemon.

## Core Installation

| Feature | Purpose |
|---|---|
| Required payload | Core runtime, helper components, manifests, logs, and cleanup ownership |
| Mailbox GUI | Desktop interface, inbox, provider workflows, and Mobile App area |
| Local CLI and MCP | Command-line coordination and provider tool boundary |
| PATH integration | Access to the installed AxiOwl command |
| Local discovery | Provider installation and session discovery |

## Provider Selection

Provider discovery runs before defaults are chosen. A detected product can be recommended, and the user confirms the final selection.

| Provider feature | Installed integration |
|---|---|
| Codex agents | Plugin, MCP configuration, skill, and worker |
| Codex Remote | Codex-owned SSH Remote provider support |
| Codex CLI | CLI MCP and session metadata |
| VS Code Copilot-backed | VSIX bridge, MCP, metadata integration, and worker |
| Antigravity agents | Desktop MCP and worker |
| Antigravity CLI | CLI MCP, metadata, and worker |
| Claude Code CLI | User MCP configuration and worker |
| Copilot CLI | Session metadata integration and worker |
| Cursor Agent CLI | CLI session metadata and worker |
| OpenCode CLI | MCP/native metadata and worker |
| Cursor agents | Bridge extension, MCP, and worker |

The provider application continues to own its account, authentication, model access, and conversations.

## A2A And SSH

- **A2A Server** installs the machine-scoped standards-based agent service.
- **A2A Client** installs the interactive user broker for provider-backed A2A work.
- **SSH Command Dispatch** enables the selected remote CLI ownership and configuration.

## Daemon Runtime

Exactly one daemon-runtime choice applies:

| Choice | Description |
|---|---|
| AxiOwl Node daemon | Recommended broad host runtime using the computer's installed Node environment; installed as the `AxiOwlDaemon` service host |
| AxiOwl native C++ daemon | Native service, transport, core, and provider process family managed through `AxiOwlService` |
| No mobile daemon | Core, providers, A2A, and SSH without mobile host access |

The daemon choice is separate from provider checkboxes. A provider can be installed for local messaging without enabling mobile access, and the daemon can publish its own connected provider catalog.

## Selected Ownership

Each feature owns its AxiOwl files, configuration, extension or patch assets, service registration, process scope, and cleanup. Unselected provider features remain outside that install scope.

## Lifecycle

AxiOwl uses two whole-product lifecycle operations:

- **Uninstall** removes AxiOwl-owned installed components.
- **Uninstall-install** performs a complete Uninstall and installs the selected new artifact and feature set.

Provider applications, provider accounts, conversations, unrelated extensions, and user projects remain with their original owners.

## After Installation

1. Open the selected provider products.
2. Run discovery and identify current sessions.
3. Send one local message and receive the expected reply.
4. If a daemon is selected, open **Mobile App**, generate a pairing offer, and approve the phone.
5. If A2A is selected, import or expose the intended Agent Card.

---
sidebar_position: 1
slug: /installer
---

# Install The AxiOwl Experience You Want

The Windows MSI brings the AxiOwl core, provider integrations, optional agent protocols, and a selectable mobile daemon into one guided setup.

## Provider-Aware Selection

AxiOwl looks for supported provider products on the machine and recommends matching integrations. The user reviews and confirms the final selection.

## Core Features

The core experience provides:

- the AxiOwl runtime and MCP server;
- local registry and discovery;
- mailbox and desktop interface;
- logs and diagnostics;
- the local CLI;
- AxiOwl-owned lifecycle and cleanup.

## Provider Features

Each provider feature installs its own bounded integration package. Depending on the provider, that can include an MCP entry, plugin, skill, VSIX bridge, metadata integration, or isolated worker.

The provider application continues to own its account, model access, authentication, and conversations.

## Agent And Node Features

- **A2A Server** exposes selected standards-based agent endpoints.
- **A2A Client** installs the interactive user broker used for provider-backed A2A work.
- **SSH Command Dispatch** enables configured command-line node routes.

## Mobile Daemon Choice

| Choice | What it installs |
|---|---|
| AxiOwl Node daemon | Recommended broad daemon runtime and Windows service host using the installed Node environment |
| AxiOwl native C++ daemon | Native Windows service, transport, core, and provider runtime processes |
| No mobile daemon | Local provider, mailbox, CLI, A2A, and SSH features without mobile host access |

The daemon gives Android and iPhone clients access to host-owned projects, provider agents, sessions, and timelines through relay or direct connections.

## A Clear Lifecycle

AxiOwl uses two whole-product operations:

- **Uninstall** removes AxiOwl-owned installed components.
- **Uninstall-install** performs a complete Uninstall and then installs the selected AxiOwl artifact.

Provider conversations, provider accounts, and unrelated user files remain under their original owners.

## After Setup

1. Open or restart the selected provider product.
2. Start a current provider session.
3. Run AxiOwl discovery.
4. Follow [Send Your First Message](../getting-started/send-your-first-message.md).
5. If a daemon is selected, follow [Pair A Mobile Device](../mobile/pair-a-device.md).

For a detailed feature map, see the [Installer Behavior Matrix](../reference/installer-behavior-matrix.md).

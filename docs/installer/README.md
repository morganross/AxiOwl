---
sidebar_position: 1
slug: /installer
---

# Install The AxiOwl Experience You Want

The Windows MSI brings the AxiOwl core, provider integrations, and optional network features into one guided setup.

## Provider-Aware Selection

Before presenting the feature choices, AxiOwl looks for supported provider products on the machine. Detected products can be recommended in the installer, and the user makes the final selection.

This keeps setup focused: choose the provider surfaces you use today and add others later through the normal AxiOwl lifecycle.

## Core Features

The core experience provides:

- the AxiOwl runtime and MCP server;
- the local registry and discovery foundation;
- the mailbox and tray experience;
- logs and diagnostics;
- the local CLI;
- AxiOwl-owned lifecycle and cleanup.

## Provider Features

Each provider feature installs its own bounded integration package. Depending on the provider, that can include an MCP entry, plugin, skill, VSIX bridge, metadata integration, or isolated worker.

The provider application continues to own its account, model access, authentication, and conversations.

## Optional Connected Features

The MSI offers separate choices for:

- **A2A Server**, which exposes selected standards-based agent endpoints;
- **A2A Client**, which adds the interactive user broker for provider-backed A2A work;
- **XMPP Client**, which joins the signed-in user to approved-device workflows;
- **XMPP Server**, which adds a customer-controlled Windows self-host service.

These choices let one installation act as a local coordinator, an A2A endpoint, an approved device, a self-hosted server, or a combination.

## A Clear Lifecycle

AxiOwl uses two whole-product operations:

- **Uninstall** removes AxiOwl-owned installed components.
- **Uninstall-install** performs a complete Uninstall and then installs the selected AxiOwl artifact.

Provider conversations, provider accounts, and unrelated user files remain under their original owners.

## After Setup

1. Open or restart the selected provider product.
2. Start a current provider session.
3. Run AxiOwl discovery.
4. Choose the session in the registry.
5. Follow [Send Your First Message](../getting-started/send-your-first-message.md).

For a detailed feature map, see the [Installer Behavior Matrix](../reference/installer-behavior-matrix.md).

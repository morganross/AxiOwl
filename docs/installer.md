---
sidebar_position: 9
slug: /installer
title: Install AxiOwl Messaging
---

# Install AxiOwl Messaging

The Windows installer lets you choose provider integrations and connected features together. Its job is to install the AxiOwl components needed for those choices, including the configuration that makes them usable by your provider applications.

Download the package for **AxiOwl Messaging** from [Downloads](https://axiowl.com/downloads/). Usage Meter and the IDE have their own packages and setup guides.

## Review The Provider Checkboxes

Discovery runs before the installer chooses recommended provider selections. Review what was detected and keep the integrations you intend to use.

The provider list includes desktop and CLI surfaces separately. Codex Desktop and Codex CLI, Claude Desktop Code and Claude Code CLI, and OpenCode Desktop and OpenCode CLI are different choices. VS Code Copilot-backed conversations are separate from standalone Copilot CLI.

The labels describe the installed method. Depending on the provider, AxiOwl adds MCP configuration, a plugin or skill, a bridge extension, metadata support, or a provider worker. Some integrations modify the provider's local runtime so MCP calls carry the correct session identity. [Providers and surfaces](providers.md) explains the current catalog.

## Local Components

| Component | Purpose |
|---|---|
| Desktop mailbox | View messages, provider targets, replies, and local state |
| CLI and MCP | Send and receive operations from terminal tools and agents |
| Registry and discovery | Keep the provider and session identity behind each target |
| Provider workers | Perform the selected integration's discovery and delivery |
| PATH integration | Make the installed command available to supported callers |

AxiOwl owns its installed files and integration entries. Provider accounts, model entitlements, conversations, and project files remain with their respective applications and users.

## Connected Features

The current Windows UI offers **AxiOwl Remote Connections** for the native connected host runtime. This replaces the older public instructions to choose between a Node daemon and a native daemon in that dialog. It supports the host side of connected-client access.

Other selections serve separate jobs:

| Selection | Purpose |
|---|---|
| AxiOwl Relay | Computer-to-computer registry synchronization and messaging over the encrypted relay |
| A2A Server | Expose selected agents through standards-based endpoints |
| A2A Client | Enable the user-side connection needed for provider-backed A2A work |
| SSH Command Dispatch | Run explicit AxiOwl operations through configured SSH nodes |
| Codex Remote | Integrate Codex's own remote conversations |

Shared connection components may have their own package ownership. A local Messaging provider checkbox is not an authorization switch for every other product using a shared runtime.

## After Installation

Open AxiOwl in the Windows user session that owns your providers. Open and sign in to the provider applications you selected, then refresh discovery. Choose the intended provider session before sending work.

For a phone, open the connected-device area and follow [Mobile setup](mobile/getting-started.md). For another computer, choose the route in [Connected systems](a2a.md).

Save work in provider applications before changing their integrations. Follow the installer's messages about application lifecycle and reopen the provider when requested so its current MCP or bridge configuration is loaded.

## Changing Or Removing AxiOwl

The Messaging product uses **Uninstall** and **Uninstall-install** for its whole-product lifecycle. The latter removes the AxiOwl-owned installation and installs the selected package and features.

Provider applications and unrelated extensions are separate from AxiOwl ownership. Read the actual removal choices and preserve customer-owned files through your normal backup process. Do not delete an entire provider profile to remove a single AxiOwl MCP entry.

Other AxiOwl products have their own state-preservation policies. In particular, Usage Meter owns its account cards and pairing records independently.

## macOS And Linux

Use the platform package and provider setup in the native application. Desktop preparation, provider paths, protected storage, and service registration follow that platform's conventions. Windows MSI feature names should not be used as commands on another operating system.

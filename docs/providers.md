---
sidebar_position: 5
slug: /providers
title: Providers And Surfaces
---

# Providers And Surfaces

A provider is both a brand and a surface. Codex Desktop, Codex CLI, and Codex Remote have different session lifecycles. Cursor's desktop agent and Cursor Agent CLI also need separate integrations. AxiOwl keeps these distinctions so a message reaches the conversation you selected.

## Messaging Integrations

The current Windows package inventory contains the following thirteen provider packages. This table describes their purpose and integration; the operations available for a particular session come from the installed provider's capabilities.

| Provider surface | What it connects | Integration installed by AxiOwl |
|---|---|---|
| Antigravity agents | Desktop agent conversations | Desktop MCP configuration and provider worker |
| Antigravity CLI | Command-line conversations | CLI configuration, session identity, and worker |
| Claude Code CLI | Claude Code terminal sessions | User MCP configuration and provider worker |
| Claude Desktop Code | Code conversations in Claude Desktop | Desktop integration, MCP configuration, and managed bridge |
| Codex agents | Codex desktop threads | AxiOwl Codex plugin, MCP tools, skill, and worker |
| Codex CLI | Codex terminal sessions | CLI MCP configuration and session integration |
| Codex Remote | Codex-owned SSH Remote conversations | Local support for Codex's remote projects and sessions |
| Copilot CLI | Standalone GitHub Copilot CLI sessions | MCP session metadata integration and worker |
| Cursor agents | Desktop Agent/Composer conversations | Bridge extension, MCP configuration, and desktop integration |
| Cursor Agent CLI | Cursor's command-line agent | CLI discovery, session metadata, and worker |
| OpenCode CLI | OpenCode terminal sessions | MCP configuration and provider worker |
| OpenCode Desktop | Native OpenCode desktop sessions | Desktop plugin and provider integration |
| VS Code Copilot-backed | Copilot Agent Host conversations in VS Code | VSIX bridge, MCP metadata, and worker |

Claude Desktop here means its **Code** surface. Selecting that integration does not make every Claude web or desktop conversation an interchangeable target.

## Understand The Operations

**Discover** reads the provider state needed to identify sessions. **Send** addresses an existing session. **Create** starts a provider session and registers it for subsequent work. **Rename** changes the provider title where supported. **Status** exposes the state the provider makes available.

AxiOwl MCP supplies the return path for an agent's message. Session metadata identifies who made the tool call. An agent title is a convenient label, while the exact provider session identity remains the address.

Operations vary by surface and platform. The installed capability view is the practical authority for a session. In particular, a provider listed in the installer is not a promise that every operation is enabled for every release of that provider.

## Windows, macOS, And Linux

Windows uses isolated provider workers and provider-specific integration assets. macOS and Linux have their own discovery, configuration, and delivery implementations. Use the platform package to install the integrations appropriate to that operating system.

Some desktop integrations operate on an AxiOwl-managed local copy of a provider application. Where that is the selected platform method, the publisher's application remains the original source and you use the prepared copy for the integrated session. The macOS package prepares managed copies locally from user-installed applications; provider applications are not shipped inside the AxiOwl package.

Provider sign-in remains separate. Open the selected provider environment and complete its normal authentication before asking it to perform work.

## Three Catalogs With Different Jobs

| Catalog | What its entries mean |
|---|---|
| Messaging provider registry | Existing provider sessions and the local or remote route used to address them |
| Connected host catalog | Providers, models, agents, and controls exposed to AxiOwl Mobile by that computer |
| IDE model/account/brain choices | Compatible execution routes configured inside AxiOwl IDE |

A model appearing in the IDE does not add a Messaging package. A Messaging package does not grant mobile control of every provider action. Each product exposes the capabilities supplied by its own integration.

## External Agents And The Mailbox

The **AxiOwl Mailbox** is a built-in local destination for messages and results. An **A2A agent** is a standards-based endpoint discovered through an Agent Card. Both can participate in coordination without being another installed model provider.

See [Messaging setup](getting-started.md), [IDE accounts](ide/models-and-accounts.md), or [Mobile agents](mobile/agents-and-workspaces.md) for the next step in your chosen product.

---
title: "Providers and surfaces"
slug: /providers
description: "Distinguish provider brands, desktop applications, CLIs and configured remote routes."
---

# Providers and surfaces

A provider brand can expose several different surfaces. AxiOwl keeps their conversation identities and integrations separate.

## Main integration families

| Provider family | Desktop surface | Command-line surface |
| --- | --- | --- |
| Claude | Claude Desktop **Code** conversations | Claude Code CLI |
| Codex | Codex desktop conversations | Codex CLI |
| Cursor | Cursor Agent/Composer conversations | Cursor Agent CLI |
| OpenCode | OpenCode Desktop | OpenCode CLI |
| GitHub Copilot | VS Code Copilot desktop conversations | Standalone GitHub Copilot CLI |
| Antigravity | Antigravity desktop agent conversations | Antigravity CLI |

This is an integration map, not a table of passed provider pairs. Availability and operations depend on the operating system, provider version and installed integration.

**VS Code means the VS Code Copilot desktop surface.** It is not another name for standalone Copilot CLI. Likewise, Claude Desktop and Claude Code CLI, or OpenCode Desktop and OpenCode CLI, are different targets.

Some releases expose additional provider-specific routes, including Codex Remote. Use the capability entry actually offered by that installed release.

Claude Desktop's Code surface is not every Claude desktop or web conversation.

## Integration reference

The provider inventory distinguishes these integration methods. Use the entries
offered by your installed platform; this reference is not a passed-pair matrix.

| Surface | Integration boundary |
| --- | --- |
| Antigravity desktop and CLI | Separate desktop/CLI configuration, session identity and workers |
| Claude Desktop Code | Desktop MCP configuration and managed bridge |
| Claude Code CLI | User MCP configuration and provider worker |
| Codex Desktop | Codex plugin, MCP tools, skill and worker |
| Codex CLI | CLI MCP configuration and session integration |
| Codex Remote | Codex-owned remote project and session integration |
| Copilot CLI | Standalone CLI MCP metadata and worker |
| Cursor desktop | Bridge extension, MCP configuration and desktop integration |
| Cursor Agent CLI | CLI discovery, metadata and worker |
| OpenCode Desktop and CLI | Separate desktop plugin and CLI configuration/worker |
| VS Code Copilot | VSIX bridge, MCP metadata and worker |

## What an integration supplies

Depending on the surface, installation supplies MCP configuration, a plugin or extension, a bridge, native session metadata and a provider worker. Some desktop methods use an AxiOwl-managed local copy derived from a user-installed application.

Open the integrated environment indicated by setup. A publisher application and its managed copy are not interchangeable merely because their names are similar.

Provider applications come from their own distributions. Their authentication, subscriptions, available models and tool permissions remain separate from AxiOwl.

## Capabilities are specific

Discover identifies conversations. Send addresses a selected conversation. Create and Rename are available only where advertised. Status and installation controls also vary.

A declared capability is not delivery evidence for every provider version or operating-system combination. A package being installed does not prove the provider loaded its tools.

## Platform boundaries

Windows, macOS and Linux use different native adapters. A desktop route needs the relevant graphical user environment. Some application/OS combinations need a managed application or compatibility layer; this does not imply an official publisher application exists on every OS.

Choose the current artifact architecture and provider requirements shown for your release. Do not infer Intel Mac or Linux ARM availability from a generic platform logo.

## After a provider changes

Provider updates can change sessions, APIs, configuration or extensions. Check [Components and updates](messaging/components-and-updates.md) and the integration outcome before continuing.

Use [Messaging setup](getting-started.md) for first use and [Troubleshooting](messaging/faq-troubleshooting.md) for incomplete setup.

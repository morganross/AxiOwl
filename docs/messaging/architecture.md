---
title: "Messaging architecture"
slug: /messaging/architecture
description: "A technical overview of the application, native runtime, provider workers and remote routes."
---

# Messaging architecture

Messaging separates the conversation address, the route used to reach it and the provider-specific work needed to deliver text.

## Application and agent interfaces

The desktop application supplies setup, provider/session views, connection management and message controls. The CLI supplies native command entrypoints. MCP exposes tools inside integrated agent applications.

The MCP host supplies the executing conversation's identity. This differs from initial name-based recipient selection: sender identity must not be guessed from whichever chat was used most recently.

## Registry and operation records

Discovery produces registry entries for real provider conversations. Entries retain provider/surface, native conversation identity and the applicable local or remote route.

Initial name resolution follows actual recent use within the selected scope. The operation then binds the resolved destination, so later naming changes do not redirect already admitted work.

Durable operation records support dispatch ownership, result correlation and duplicate prevention. An operation reference is not a second authorization to dispatch.

## Provider boundary

A provider package owns its integration assets and worker. Depending on the surface, those assets include MCP configuration, a plugin, an extension or a managed bridge.

The provider continues to own its account, native history, model availability and tool-permission policy. Integration capability declarations do not establish that every provider version works on every platform.

## Shared native runtime

Desktop consumers use a separately owned native runtime for shared host responsibilities, including connection/device infrastructure and applicable account, provider, file, terminal or timeline capabilities.

Application installers own their consumer installation and platform service integration. A component's version is not the version of every application that consumes it.

Platform adapters remain necessary. Native Windows services and user-session handling, macOS application/security integration and Linux graphical/service environments have different operating-system boundaries.

## Remote connections

- SSH reaches the selected remote user and installed AxiOwl environment.
- Relay-peer routing connects authorized computers and their session registries.
- Connected Mobile uses an approved host/device relationship and advertised capabilities.
- A2A exposes or calls a separate agent-service contract.

The relay is a transport service. It does not become the model provider or authorize the destination's tool execution.

## What stays separate

A source commit, signed component, published artifact, installed integration and observed delivery are distinct facts. A build proves neither deployment nor universal provider compatibility.

See [Technology stack](technology-stack.md), [Agent-tool integration](integrating-agents.md) and [Security](security-and-privacy.md).

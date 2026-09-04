---
sidebar_position: 4
slug: /how-it-works
---

# How AxiOwl Works

AxiOwl is a normalization and communication layer around provider sessions, daemon-hosted agents, mobile clients, and A2A endpoints.

## One Common Journey

```text
choose target
  -> resolve exact identity
  -> select declared route
  -> use destination integration
  -> record correlation
  -> return provider reply, task result, or agent timeline
```

## Identity And Addressing

| Identity | Purpose |
|---|---|
| Display name | Human-readable label |
| Alias | Convenient lookup name |
| Provider and surface | Exact product experience, such as Codex agents or Codex CLI |
| Provider session ID | Provider-owned conversation address |
| Host ID | Immutable identity of one AxiOwl daemon |
| Mobile client ID | Stable identity of one paired app installation |
| Project/workspace ID | Host-owned working context |
| Agent ID | One daemon-managed agent lifecycle |
| A2A agent/task ID | Standards-based endpoint and task identity |

Friendly names can change. Delivery continues to use the concrete provider, host, client, agent, or task identity required by the selected route.

## Discovery And Registry

Provider surfaces store sessions differently. Their AxiOwl packages discover through the provider-specific state available to that product and normalize useful fields into the local registry.

A registry record can include display name, aliases, provider, surface, provider session ID, local or remote ownership, supported operations, sendable state, and recent observation information.

The daemon maintains a related connected view of providers, projects, workspaces, agents, and active client sessions on its host.

## Provider Packages

Each local provider surface has its own package because discovery, MCP metadata, delivery, patching, process ownership, and cleanup differ by product.

A package may contain an isolated worker, MCP configuration, provider plugin or skill, VSIX bridge, metadata integration, and installer ownership. Provider authentication and conversation data remain with the provider.

Provider packages can update independently from the AxiOwl core and from other providers.

## Local Provider Flow

```text
CLI, mailbox, or MCP caller
  -> local registry target
  -> selected provider package
  -> provider-owned session
  -> receipt and correlated MCP reply
```

## Daemon And Mobile Flow

```text
paired mobile app
  -> encrypted relay or direct connection
  -> AxiOwl daemon
  -> selected project, workspace, and agent
  -> provider runtime
  -> ordered timeline back to the client
```

The daemon owns host identity, pairing, provider processes, projects, workspaces, agents, permissions, timeline sequencing, acknowledgements, and reconnect state.

## A2A Flow

```text
A2A client
  -> Agent Card and authenticated endpoint
  -> message or task
  -> destination agent
  -> state, result, and artifacts
```

Desktop provider sessions can be exposed as selected A2A agents through the interactive user boundary. AxiOwl can also call external Agent Cards.

## Route Selection

| Destination | Route |
|---|---|
| Provider session on this computer | Local provider package |
| Paired host across networks | Encrypted relay |
| Paired host on a controlled network | Direct daemon connection |
| External standards-based agent | A2A |
| Managed AxiOwl node | A2A-over-SSH |
| Explicit remote CLI operation | SSH Command Dispatch |

## Receipts And Completion

| Evidence | Meaning |
|---|---|
| Acceptance receipt | AxiOwl accepted the operation |
| Provider delivery state | The provider integration accepted the handoff |
| MCP reply | The provider session returned a correlated response |
| A2A task state | The external endpoint reported task progress |
| A2A terminal result | The task returned its result and artifacts |
| Daemon connection state | The client is connected to the intended host |
| Agent timeline terminal event | The host provider turn reached its reported terminal state |

## Account And Authority Boundaries

Website account, license entitlement, host identity, mobile pairing, relay routing, direct network access, A2A credentials, SSH keys, and provider authentication remain separate. One credential does not silently become authority for another subsystem.

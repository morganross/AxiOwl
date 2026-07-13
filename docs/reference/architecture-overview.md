# AxiOwl Architecture Overview

AxiOwl is a normalization, identity, discovery, messaging, and protocol gateway for AI provider sessions. The primary runtime runs locally on Windows. It can also expose those sessions through A2A and route work to external A2A services or another AxiOwl node.

Plain English version: AxiOwl gives unlike AI products a shared address book and message contract without pretending they work the same way. Provider-specific code handles the difficult last mile. A2A and inter-node transports provide standard boundaries around that local capability.

## Architectural Layers

```text
user, provider MCP tool, CLI, A2A client, or remote node
  -> command or protocol boundary
  -> authenticated sender identity
  -> registry and target resolution
  -> normalized message request
  -> local, A2A, or inter-node routing
  -> provider-specific delivery edge
  -> provider session
  -> provider MCP reply
  -> receipt or A2A task completion
```

## Core Local Runtime

| Component | Responsibility |
|---|---|
| `cli.cpp` | Human and automation commands for discovery, send, create, rename, A2A, nodes, API, relay, and diagnostics. |
| `mcp_server.cpp` | AxiOwl MCP tools, sender metadata validation, reply receipts, and A2A reply correlation. |
| `registry.cpp` | Durable agent names, aliases, provider session IDs, node ownership, sendability, and verification state. |
| `discovery*.cpp` | Provider-specific and A2A discovery, enrollment, and registry refresh. |
| `message_pipeline.cpp` | Sender resolution, target repair, visible-body construction, receipt boundaries, and provider dispatch. |
| `provider_edges.cpp` | Explicit send, create, and rename dispatch by provider surface. |
| `provider_*.cpp` | Provider-native delivery and proof logic. |
| `delivery_worker.cpp` | Isolated provider delivery work and final provider result logging. |
| mailbox components | Local message inbox, GUI, test orchestration, and a built-in addressable endpoint. |

## A2A Boundary

The A2A implementation has two roles:

- expose eligible registry sessions and provider factories as A2A agents;
- import and send to external A2A Agent Cards as `provider=a2a` targets.

Inbound A2A tasks enter the normal message pipeline. A provider reply carrying the original receipt can complete the task. Outbound A2A targets also use the normal provider dispatch table, which means external endpoints participate in the same names, evidence, and receipt vocabulary as local providers.

See [A2A In AxiOwl](../a2a/README.md).

## Machine API And Interactive User Broker

The optional API executable can run as a LocalSystem Windows service. Provider registries and app sessions belong to the interactive user. A named-pipe user broker is therefore designed to forward authenticated protected requests from the service into the active user session.

The broker accepts only a LocalSystem caller and does not poll. The current primary MSI does not package or start the broker executable, so this service-to-user path is not yet complete in the shipped installer.

## Inter-node Routing

Remote nodes are durable registry records with transport policy and credentials. Current transport choices include direct HTTPS A2A, hosted A2A relay, A2A JSON-RPC over SSH, and explicit legacy migration modes.

Fallback is allowed only when an earlier transport is known to be unavailable or migration-safe. Ambiguous failure blocks fallback to prevent duplicate delivery.

See [Axi-To-Axi And Chat-To-Chat Communication](../inter-node/README.md).

## XMPP Feature Line

The XMPP implementation is isolated on `feature/xmpp-remote-transport`. It provides RFC 7395 transport, Prosody routing, receiver-agent behavior, and an ordinary XMPP chat gateway. It is not currently merged into `main` and is not part of the primary MSI.

See [XMPP Transport](../xmpp/README.md).

## Identity And Registry Model

| Field | Meaning |
|---|---|
| `display_name` | Human-facing address. |
| `aliases` | Additional lookup names and retained protocol metadata. |
| `provider` | Delivery edge, such as `codex`, `cursor`, `a2a`, or `remote`. |
| `provider_session_id` | Provider-owned local session address or external A2A service URL. |
| `agent_id` | Strong normalized identity used by scoped A2A endpoints where present. |
| `node_id` | Machine or routing owner. |
| `sendable` | Current eligibility for delivery, not proof of a future response. |
| `last_verified_at` | Stronger proof timestamp. |
| `last_error` | Retained diagnostic state. |

Human names can change. Provider and protocol IDs are used for routing and verification.

## Receipt Model

AxiOwl keeps request acceptance, provider delivery, provider response, and A2A task completion separate. This rule applies locally and across network boundaries.

See [Receipts Versus Proof](../concepts/receipts-vs-proof.md).

## Installer Ownership

The MSI is one user experience with separately owned provider features. An unchecked provider should not be closed, patched, configured, or removed. The optional A2A feature owns its API service, relay payload, service configuration, and machine feature marker.

See [Installer Behavior Matrix](installer-behavior-matrix.md).

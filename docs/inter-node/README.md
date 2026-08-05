---
sidebar_position: 1
---

# Axi-To-Axi And Chat-To-Chat Communication

Inter-node communication lets one AxiOwl installation address sessions registered on another installation. The destination remains a real provider chat; the network layer carries the request to the AxiOwl instance that owns that provider session.

This creates a useful separation:

- **A2A** is the primary normalized protocol boundary.
- **AxiOwl node routing** supplies node identity, pairing, transport selection, and migration behavior.
- **Provider delivery** remains local to the destination machine.
- **MCP replies** preserve the identity of the destination chat and can complete the originating task.

## Normal Flow

```text
source chat
  -> local AxiOwl registry target
  -> remote node transport plan
  -> remote AxiOwl A2A endpoint
  -> destination registry
  -> destination provider adapter
  -> destination chat
  -> correlated reply
```

The source does not need the destination provider's private installation details. The destination AxiOwl instance owns provider discovery and delivery on its own machine.

## Current Status

Current `main` contains direct A2A HTTPS, hosted A2A relay, A2A-over-SSH, and explicitly selected legacy migration transports. It also includes node enrollment, Agent Card preflight, access-token checks, and duplicate-delivery protection during fallback decisions.

XMPP is a separate feature-branch transport and is documented in the [XMPP section](../xmpp/README.md).

## Read Next

- [Transport Selection And Fallback](transport-selection-and-fallback.md)
- [Pairing, Identity, And Trust](pairing-identity-and-trust.md)
- [Inter-node Operations](operations.md)

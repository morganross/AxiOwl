---
sidebar_position: 1
---

# Axi-To-Axi And Chat-To-Chat Communication

Inter-node communication lets one AxiOwl installation address work owned by another installation. There are two deliberately separate remote models:

- **A2A node routing** carries standards A2A requests to another AxiOwl node, which may then perform local provider delivery.
- **Secure XMPP routing** carries an endpoint-protected AxiOwl action to one exact approved device resource, which verifies and authorizes the action before provider handoff.

They do not tunnel through each other and they do not silently substitute for one another.

This creates a useful separation:

- **A2A** supplies Agent Cards, tasks, messages, and external-agent interoperability.
- **AxiOwl node routing** supplies explicit node identity and either direct A2A HTTPS or A2A over SSH.
- **XMPP** supplies protected approved-device routing without giving the routing server provider authority.
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

Current `main` contains standards A2A server/client behavior, direct A2A node delivery, A2A-over-SSH, and the secure XMPP client/server source. The proprietary common `/v1/*` remote API and hosted relay server are retired from the common runtime. Provider-owned remote behavior remains provider-specific and is not a general network fallback.

The current Windows installer has separate A2A Server, A2A Client, XMPP Client, and XMPP Server features. Linux packages the native client and shared security runtime. See the [XMPP section](../xmpp/README.md) for the different identity and authorization model.

## Read Next

- [Transport Selection And Fallback](transport-selection-and-fallback.md)
- [Pairing, Identity, And Trust](pairing-identity-and-trust.md)
- [Inter-node Operations](operations.md)

---
sidebar_position: 7
---

# Local, Remote, And External Endpoints

AxiOwl uses the same normalized address and task ideas across several trust boundaries, but the transports are not interchangeable.

## Local Provider Delivery

Local delivery reaches a provider surface on the same user machine. It may use a provider CLI, MCP configuration, an extension, a command-file watcher, or a validated patch. Local discovery can inspect provider-owned files and processes that are not available to a remote service.

## AxiOwl Node Delivery

Inter-node delivery reaches another AxiOwl installation. Current main can choose direct HTTPS A2A, a configured relay, or A2A over SSH. The selected path has its own identity, pairing, credential, timeout, and evidence requirements.

Remote transport is not a fallback that hides broken local delivery. A local provider failure remains a local provider failure. Inter-node routing is selected because the target belongs to another node.

## External A2A Delivery

External A2A delivery imports an Agent Card and sends standards-based A2A requests to a non-AxiOwl endpoint. AxiOwl acts as the client and does not assume the external server shares AxiOwl's local registry or provider mechanics.

## XMPP Transport

The XMPP transport is implemented on `feature/xmpp-remote-transport`, not current main. It adds an additional network boundary with XMPP identities, TLS, SCRAM authentication, routing, and gateway policy. It must not be documented as a main-branch release feature until merged and revalidated.

See [Inter-Node Communication](../inter-node/README.md), [External A2A Endpoints](../a2a/external-endpoints.md), and the [Protocol Support Matrix](../reference/protocol-support-matrix.md).

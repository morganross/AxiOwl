---
sidebar_position: 1
---

# Connected AxiOwl Systems

AxiOwl supports two distinct ways to work beyond one local provider session:

- **Mobile-to-host connections** let a paired phone control agents through an AxiOwl daemon.
- **A2A node connections** let one AxiOwl installation call standards-based agents exposed by another installation.

## Mobile-To-Host

The phone connects through the encrypted relay or a direct route. The host daemon owns projects, provider processes, agents, timelines, permissions, and reconnect state.

## A2A Node-To-Node

An A2A node publishes Agent Cards and task routes. Another AxiOwl installation can call those agents through direct HTTPS A2A or A2A-over-SSH.

## Why The Models Stay Separate

The mobile protocol provides an interactive view of one host and its agent workspace. A2A provides standards-based messages, tasks, results, and artifacts. Keeping both models explicit lets a workflow choose the right abstraction.

## Read Next

- [Inter-Node Operations](operations.md)
- [Pairing, Identity, And Trust](pairing-identity-and-trust.md)
- [Transport Selection](transport-selection-and-fallback.md)
- [Mobile And Connected Hosts](../mobile/README.md)
- [A2A In AxiOwl](../a2a/README.md)

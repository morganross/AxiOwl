---
sidebar_position: 16
---

# AxiOwl Remote Nodes

AxiOwl Remote Nodes let one installation coordinate selected A2A agents owned by another installation.

## Available Capabilities

- register and verify a node;
- use direct standards-based A2A;
- carry A2A through an operator-managed SSH connection;
- discover advertised agent capabilities;
- send messages and follow remote tasks;
- route the result back into the local AxiOwl workflow.

## Destination Ownership

The destination node owns its registry and provider packages. The source asks for an advertised agent; the destination performs the local provider delivery appropriate to that agent.

## Choose The Right Remote Model

Use Remote Nodes for A2A agent endpoints across AxiOwl installations. Use [Secure XMPP Transport](../xmpp/README.md) for approved-device actions with endpoint content protection and receiver-owned authorization.

Read [Axi-To-Axi And Chat-To-Chat Communication](../inter-node/README.md) for setup concepts.

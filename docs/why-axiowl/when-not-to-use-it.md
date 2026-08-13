---
sidebar_position: 5
---

# Choose The Right AxiOwl Workflow

AxiOwl offers several coordination styles. Choosing the simplest one that matches your goal keeps the experience clear.

## One Local Provider Session

When all work happens in one provider conversation, use the provider directly. Add AxiOwl when you want that session to collaborate with another provider, agent, node, or approved device.

## Several Local AI Tools

Use provider packages and the local registry. This is the natural starting point for cross-provider delegation, review, and synthesis.

## External Agent Services

Use A2A when the destination publishes an Agent Card and task interface. A2A gives the workflow task state, results, and artifacts.

## Operator-Managed Nodes

Use direct A2A or A2A over SSH when you manage both AxiOwl installations and want explicit node-to-node agent access.

## Approved Devices

Use secure XMPP when device identity, endpoint content protection, receiver-owned authorization, and protected results are central to the workflow.

## A Helpful Decision

```text
same machine and provider session -> local provider package
external agent service            -> A2A
managed AxiOwl node                -> A2A or A2A over SSH
approved personal/team device      -> secure XMPP
```

Read [Choosing A Transport](../how-it-works/choosing-a-transport.md) for a detailed comparison.

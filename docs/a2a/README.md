---
sidebar_position: 1
---

# A2A In AxiOwl

AxiOwl speaks the Agent2Agent protocol at its boundary while preserving the local registry, provider adapters, sender identity, and MCP reply flow that already connect desktop AI products.

In plain English, A2A gives other software a standard way to find an agent, send it work, inspect the resulting task, and receive a result. AxiOwl uses that standard in both directions:

1. **AxiOwl as an A2A server:** registered desktop chats can be exposed as A2A-addressable agents.
2. **AxiOwl as an A2A client:** external A2A Agent Cards can be discovered, imported into the registry, and addressed like other AxiOwl targets.

This does not turn every provider into the same product. AxiOwl normalizes the boundary and then uses the correct provider-specific delivery method behind it.

## Current Status

The A2A runtime is present in current `main`. The code implements:

- A2A 1.0 HTTP+JSON and JSON-RPC entry points;
- selected A2A 0.3 JSON-RPC compatibility aliases;
- root, provider-factory, and registry-agent Agent Cards;
- authenticated, scoped clients;
- send, task read/list/cancel, extended card, and push-notification configuration operations;
- durable task and push-delivery records;
- external Agent Card import and outbound A2A delivery;
- bearer-token and OAuth client-credentials delivery;
- correlation of provider MCP replies back into A2A task completion.

Long-lived streaming and task subscription routes are declared but currently marked unimplemented. They must not be described as production streaming.

## The Important Boundary

An accepted A2A task is not automatically a provider answer. The task moves through distinct boundaries:

```text
A2A request accepted
  -> AxiOwl target resolved
  -> provider delivery attempted
  -> provider receives the message
  -> provider replies through AxiOwl MCP
  -> reply matches the original message receipt
  -> A2A task completes
```

The separation prevents a queue operation or HTTP success code from being reported as a completed provider conversation.

## Read Next

- [Desktop Chats As A2A Endpoints](desktop-agents-as-endpoints.md)
- [Calling External A2A Endpoints](external-endpoints.md)
- [Tasks, Replies, And Receipts](tasks-replies-and-receipts.md)
- [Protocol Routes And Capabilities](protocol-routes-and-capabilities.md)
- [A2A Operations And Security](operations-and-security.md)

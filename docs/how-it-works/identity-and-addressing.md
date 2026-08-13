---
sidebar_position: 3
---

# Identity And Addressing

AxiOwl makes AI sessions easy to name without confusing a friendly label with the identity used for delivery.

## The Identity Layers

| Layer | Purpose |
|---|---|
| Display name | A readable label for people |
| Alias | A convenient shortcut used by a workflow |
| Provider | The product brand, such as Codex or Cursor |
| Surface | The concrete product experience, such as agents, editor, or CLI |
| Provider session ID | The provider-owned address for one conversation or agent session |
| Node or device ID | The AxiOwl endpoint that owns the destination integration |
| Protocol address | The exact A2A endpoint, XMPP resource, or local provider route |

## Friendly Names, Exact Delivery

You can send to a readable target such as `Architecture review`. The registry resolves that name to the provider, surface, session, and node required for delivery.

This gives the user a simple address book while preserving exact routing underneath.

## Why Surface Matters

`Codex agents` and `Codex CLI` are different surfaces even though both use the Codex brand. Their session stores, process lifetimes, metadata, and delivery paths can differ. AxiOwl keeps them separate so the address says what kind of destination it actually represents.

## Replies Preserve Their Origin

When a provider session replies through MCP, AxiOwl can associate that response with the provider-owned sender identity and the original operation. The display name remains useful for the human, and the concrete identity remains available for the system.

Read [Discovery And The Registry](discovery-and-registry.md) to see how those addresses are collected.

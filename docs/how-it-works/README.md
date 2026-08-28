---
sidebar_position: 1
slug: /how-it-works
---

# How AxiOwl Works

AxiOwl adds a common coordination layer around AI products while preserving the integration method each product requires.

At the center is a simple idea:

```text
find the right target
  -> send through the right integration
  -> track the handoff
  -> receive a correlated result
```

## Explore The System

| Page | What it explains |
|---|---|
| [From Message To Reply](from-message-to-reply.md) | The complete user-visible handoff |
| [Identity And Addressing](identity-and-addressing.md) | Names, providers, surfaces, sessions, and exact targets |
| [Discovery And The Registry](discovery-and-registry.md) | How AxiOwl finds sessions and keeps a shared address book |
| [Provider Packages](provider-packages.md) | Why every provider surface has its own integration package |
| [Choosing A Transport](choosing-a-transport.md) | Local messaging, A2A, A2A-over-SSH, relay, and direct host connections |
| [Trust And Encryption](trust-and-encryption.md) | How mobile pairing and encrypted host connections protect the session |
| [Receipts And Observability](receipts-and-observability.md) | How a workflow follows acceptance, delivery, and replies |

## Normalize The Boundary, Preserve The Provider

AxiOwl normalizes concepts such as target, sender, message, receipt, and reply. It does not replace the provider's own session store, authentication, or delivery behavior. That combination gives the workflow a consistent experience without erasing important provider differences.

## Local And Remote Use The Same Project Vocabulary

A local provider chat, an external A2A agent, and an approved remote device have different transports. AxiOwl keeps those transports explicit while allowing the project to use the same high-level language for who should receive work and how the result returns.

For examples, continue to [What You Can Do With AxiOwl](../use-cases/README.md).

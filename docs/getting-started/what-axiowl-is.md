---
sidebar_position: 1
---

# What AxiOwl Is

AxiOwl is software for addressing and coordinating AI work sessions across products that do not share one native messaging system.

## Plain English

Without AxiOwl, a Codex thread, Cursor Composer, VS Code Copilot chat, Claude Code session, or OpenCode session is mostly confined to its own product. AxiOwl gives supported surfaces a common directory and message vocabulary while still using the provider-specific method required by the destination.

It is both:

- a **normalization layer**, because names, session IDs, operations, receipts, and failures become comparable;
- a **communication layer**, because local provider packages, MCP, A2A, and secure XMPP can move work across concrete boundaries.

## What It Does

AxiOwl can:

- install selected provider integrations;
- discover provider-owned sessions;
- keep a local registry of addressable targets;
- send, create, or rename where the exact provider package implements that operation;
- expose MCP tools so a provider session can identify itself and reply;
- expose registered agents through A2A or call external A2A agents;
- route protected remote actions between approved devices through secure XMPP;
- retain receipts and evidence that explain how far an operation progressed.

## What It Does Not Do

AxiOwl does not:

- replace provider products or accounts;
- turn a display title into secure identity;
- guarantee provider completion because a request was accepted;
- make every provider operation work on every operating system;
- treat a license token as an account, device, or transport credential;
- silently downgrade a protected XMPP action to plaintext or another transport;
- automatically apply core updates in the background.

## The Local Mental Model

```text
provider product
  -> provider-owned sessions
  -> AxiOwl discovery
  -> normalized registry address
  -> provider-specific operation
  -> receipt and logs
  -> provider-owned MCP reply
```

## The Remote Mental Model

```text
approved source endpoint
  -> selected A2A or secure XMPP transport
  -> destination AxiOwl boundary
  -> destination registry and authorization
  -> unchanged local provider package
  -> correlated result or protected receipt
```

A2A and XMPP are separate transports. The destination provider still remains provider-specific.

## Read Status Carefully

"Implemented," "packaged," "installed," "deployed," and "demonstrated" mean different things. Start with [Current Product Status](../reference/current-product-status.md).

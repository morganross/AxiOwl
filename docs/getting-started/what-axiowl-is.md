---
sidebar_position: 1
---

# What AxiOwl Is

AxiOwl is a coordination layer for AI work.

It helps people and agents discover provider sessions, address the right target, move a request through the correct integration, and receive a correlated result. The experience is consistent, while the destination still uses its native provider-specific path.

## Two Ideas In One Product

### A Normalization Layer

AxiOwl gives different tools a shared vocabulary:

- provider and surface;
- session and target;
- local node and approved device;
- message and task;
- receipt and reply.

This makes workflows easier to understand even when the underlying providers store and deliver sessions differently.

### A Communication Layer

AxiOwl moves work through several explicit routes:

- local provider packages;
- MCP tools and provider replies;
- standards-based A2A endpoints and tasks;
- A2A between configured nodes;
- secure XMPP between approved devices.

## A Local Workflow

```text
provider session
  -> discovery
  -> AxiOwl registry
  -> focused message
  -> provider package
  -> correlated reply
```

## A Connected Workflow

```text
source session or device
  -> selected A2A or secure-device route
  -> destination AxiOwl boundary
  -> destination provider package
  -> result returned to the coordinator
```

## What This Enables

- delegate implementation and review to different specialists;
- compare answers from several providers;
- keep long-running expert sessions available by name;
- expose selected desktop sessions as A2A agents;
- call external A2A services from the same project;
- coordinate protected work across approved devices;
- retain receipts and replies that make the handoff visible.

## Your Providers Stay Yours

Provider products continue to own account authentication, model access, and conversation data. AxiOwl installs the selected integration and coordinates the handoff around that provider boundary.

Continue to [What You Can Do With AxiOwl](../use-cases/README.md) or [Install And First Run](install-first-run.md).

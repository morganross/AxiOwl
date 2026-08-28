---
sidebar_position: 2
---

# From Message To Reply

AxiOwl turns a human instruction into an observable handoff between concrete AI sessions or agent endpoints.

## The Journey

```text
caller
  -> AxiOwl tool or UI
  -> target resolution
  -> selected transport
  -> destination integration
  -> provider or agent
  -> correlated reply or task result
```

## 1. The Caller Chooses A Target

The target can be a friendly registered name, a provider session, an external A2A endpoint, or an approved remote device. AxiOwl resolves the friendly choice to the concrete identity required by that surface.

## 2. AxiOwl Chooses The Declared Route

Local provider messaging uses the provider package. External agent work uses A2A. A paired mobile app uses the encrypted relay or a direct connection to its host daemon. Explicit inter-node configurations can use A2A directly or over SSH.

The route is part of the request, which keeps the workflow understandable.

## 3. The Destination Integration Takes Over

At the destination, AxiOwl uses the integration for that exact provider surface. Provider authentication and conversation state remain with the provider product. For mobile control, the paired daemon owns the agent process, session identity, permissions, and timeline.

## 4. A Receipt Makes The Handoff Visible

The initial receipt identifies the accepted operation. Later states can describe transport routing, task progress, provider delivery, or a returned reply. Correlation identifiers connect those events into one journey.

## 5. The Result Returns

The result may be:

- a provider MCP reply;
- a completed A2A task and artifacts;
- a live daemon timeline and terminal provider result returned to the paired phone;
- a status update that the coordinating session can use for the next decision.

This creates a practical loop: delegate, observe, receive, and continue.

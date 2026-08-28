---
sidebar_position: 4
---

# Transport Selection

| Destination | Route |
|---|---|
| Provider session on this computer | Local provider package |
| Paired AxiOwl host across networks | Encrypted relay |
| Paired AxiOwl host on a private route | Direct daemon connection |
| Standards-based external agent | Direct A2A |
| Operator-managed AxiOwl node over SSH | A2A-over-SSH |

## Mobile Route Selection

A host profile can contain relay and direct connection methods under one host ID. The app can prefer a route and reconnect to the same host without duplicating its agents.

## A2A Route Selection

A2A nodes declare direct HTTPS or SSH transport when they are registered. The request retains A2A message and task semantics on either route.

## Explicit Meaning

The route remains visible in status and logs. Local provider delivery, mobile daemon sessions, A2A, and SSH each retain their own identity, authentication, and completion model.

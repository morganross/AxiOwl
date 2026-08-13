---
sidebar_position: 6
---

# Choosing A Transport

AxiOwl offers several explicit routes because local chats, external agents, and approved remote devices solve different problems.

| Route | Best for |
|---|---|
| Local provider package | A provider session on the same machine and user profile |
| A2A | A standards-based external agent or another AxiOwl agent endpoint |
| A2A over SSH | An explicitly configured AxiOwl node reached through an SSH connection |
| Secure XMPP | Protected actions between approved devices using exact endpoint identity |

## Local Provider Messaging

Local messaging is the shortest path. AxiOwl resolves the registry target and calls the isolated package for that provider surface.

## A2A

A2A is designed for agent services. It uses Agent Cards, messages, tasks, results, and artifacts. It is a natural choice when the remote endpoint already speaks the A2A standard.

## A2A Over SSH

SSH can carry the same A2A semantics between explicitly configured nodes. This is useful for operator-managed environments that already use SSH as their connection boundary.

## Secure XMPP

XMPP is designed for approved-device communication with endpoint-protected content, per-device transport identity, receiver authorization, and exact-resource delivery.

## One Request, One Route

The workflow selects the route appropriate to the target. Keeping that choice explicit makes receipts understandable and keeps the security meaning of each transport intact.

Compare the protocols in the [Protocol Support Matrix](../reference/protocol-support-matrix.md).

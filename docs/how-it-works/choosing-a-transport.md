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
| Encrypted relay | Mobile access to a paired AxiOwl host across networks |
| Direct daemon connection | Mobile or desktop access through a private or operator-managed route |

## Local Provider Messaging

Local messaging is the shortest path. AxiOwl resolves the registry target and calls the isolated package for that provider surface.

## A2A

A2A is designed for agent services. It uses Agent Cards, messages, tasks, results, and artifacts. It is a natural choice when the remote endpoint already speaks the A2A standard.

## A2A Over SSH

SSH can carry the same A2A semantics between explicitly configured nodes. This is useful for operator-managed environments that already use SSH as their connection boundary.

## Encrypted Relay

The relay connects a paired phone to the daemon without requiring inbound port forwarding. Application frames are encrypted between the phone and host, and the relay routes them by connection identity.

## Direct Daemon Connection

Direct mode connects to the host daemon through a local address, VPN, Tailscale, or another network route controlled by the operator. A host profile can contain both relay and direct routes.

## One Request, One Route

The workflow selects the route appropriate to the target. Keeping that choice explicit makes status understandable and keeps local provider, A2A, SSH, relay, and direct-host behavior distinct.

Compare the protocols in the [Protocol Support Matrix](../reference/protocol-support-matrix.md).

---
sidebar_position: 1
slug: /mobile
---

# AxiOwl Mobile

AxiOwl Mobile is the Android and iPhone product for accessing AI agents that run on your computers.

After pairing a phone with an AxiOwl host, you can browse the host's projects, providers, workspaces, and agents; open an existing conversation; send a new turn; respond to permission requests; and follow the live timeline.

## Product Model

```text
AxiOwl Mobile
  -> paired host connection
  -> AxiOwl daemon
  -> host provider runtime and agent session
  -> live timeline returned to the phone
```

The daemon is the host-side authority for projects, provider processes, agent sessions, and timeline state. The mobile application is the connected client.

## What AxiOwl Mobile Is For

- continue a coding-agent session away from the desk;
- monitor long-running work from a phone;
- send the next user turn to an existing desktop session;
- review assistant output, reasoning, and tool activity;
- respond when a provider asks for permission;
- switch among several paired computers;
- use relay and direct routes under one host profile;
- return to the same agent after reconnecting.

## Android And iPhone

Android and iPhone package the shared AxiOwl mobile application for their respective platforms. They use the same daemon protocol, pairing model, host registry, agent concepts, and timeline behavior.

Platform packaging and protected local storage follow Android and iOS conventions, but they do not define separate AxiOwl products.

## Host Requirements

The computer runs AxiOwl and an AxiOwl daemon. The daemon owns:

- a stable host identity;
- paired mobile identities;
- relay and direct client sessions;
- projects, workspaces, and worktrees;
- provider availability and provider processes;
- agents and underlying provider sessions;
- ordered timelines, acknowledgements, and reconnect state.

## Connection Choices

- **Encrypted relay:** reaches the host across networks without opening an inbound host port.
- **Direct connection:** reaches the daemon through an address controlled by the user or operator.

A host profile can contain both types and keep one preferred route.

## Mobile Documentation

- [Install, Pair, And Connect](getting-started.md)
- [Hosts And Connections](hosts-and-connections.md)
- [Agents, Workspaces, And Timelines](agents-and-workspaces.md)
- [Security And Privacy](security-and-privacy.md)

For the product distinction, read [What Is AxiOwl? What Is AxiOwl Mobile?](../what-is-axiowl.md).

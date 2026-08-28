---
sidebar_position: 2
---

# AxiOwl Architecture Overview

AxiOwl is a coordination core surrounded by provider packages, a host daemon, mobile clients, network transports, standards-based A2A, and platform release systems.

## System Layers

| Layer | Responsibility |
|---|---|
| Local core | Registry, normalized addresses, MCP, mailbox, messages, receipts, discovery, and local provider operations |
| Provider packages | Installation, discovery, metadata, and delivery for one concrete provider surface |
| AxiOwl daemon | Host identity, projects, workspaces, agents, provider processes, timelines, permissions, pairing, and client sessions |
| Mobile apps | Paired host registry, relay/direct connections, agent views, turns, permissions, and timeline rendering |
| Hosted relay | Routes encrypted frames between paired mobile clients and host daemons |
| Direct connections | Reach a daemon through an operator-controlled network route |
| A2A | Agent Cards, standards-based messages, tasks, results, artifacts, and AxiOwl node endpoints |
| SSH dispatch | A2A-over-SSH and optional ordinary command-line node operations |
| Packaging and update | Windows MSI, Linux package, macOS package, mobile artifacts, provider revisions, signatures, and release channels |

## Local Provider Flow

```text
CLI, GUI, or MCP request
  -> resolve local provider target
  -> select provider package
  -> use provider-specific delivery
  -> record receipt
  -> correlate provider reply
```

## Mobile Host Flow

```text
paired mobile app
  -> encrypted relay or direct connection
  -> AxiOwl daemon
  -> selected host-owned agent
  -> provider runtime and existing session
  -> ordered timeline back to the phone
```

The daemon is authoritative for projects, provider processes, agent identity, and timeline state. The phone is a client of that host.

## Pairing Flow

```text
desktop requests fresh offer
  -> daemon opens bounded pairing window
  -> phone scans QR or imports link
  -> phone presents stable client identity
  -> desktop approves pending device
  -> daemon stores approved client
```

The daemon supports multiple approved mobile clients.

## A2A Flow

```text
A2A caller
  -> Agent Card and scoped endpoint
  -> message or task
  -> destination agent boundary
  -> task state, result, and artifacts
```

A2A and mobile daemon sessions remain separate product protocols.

## Windows Daemon Choices

The MSI selects one of:

- recommended Node daemon using the installed Node environment;
- native C++ daemon with separate service, transport, core, and provider runtimes;
- no mobile daemon.

Linux and macOS packages include AxiOwl-branded daemon runtimes with platform-specific lifecycle integration.

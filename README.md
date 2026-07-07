<div align="center">
  <img src="assets/axiowl-mascot.svg" width="156" alt="AxiOwl owl mascot" />

  <h1>AxiOwl</h1>

  <p>
    <strong>Open-source, self-hosted managed registry and message switchboard software for remote nodes.</strong>
  </p>

  <p>
    <a href="https://github.com/morganross/AxiOwl/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/morganross/AxiOwl?style=for-the-badge&logo=github&color=F59E0B"></a>
    <a href="https://github.com/morganross/AxiOwl/commits/main"><img alt="Last commit" src="https://img.shields.io/github/last-commit/morganross/AxiOwl?style=for-the-badge&logo=git&color=2563EB"></a>
    <a href="https://github.com/morganross/AxiOwl/issues"><img alt="Issues" src="https://img.shields.io/github/issues/morganross/AxiOwl?style=for-the-badge&logo=githubissues&color=0F766E"></a>
    <img alt="Self hosted" src="https://img.shields.io/badge/self--hosted-first-111827?style=for-the-badge&logo=serverfault">
    <img alt="Open source" src="https://img.shields.io/badge/open--source-built%20in%20public-7C3AED?style=for-the-badge&logo=opensourceinitiative">
  </p>
</div>

---

## What Is AxiOwl?

AxiOwl is the public home for a self-hosted control plane: remote node source code, installers, operating guides, and the managed registry/message switchboard layer that ties them together.

It is designed for builders who want ownership of their infrastructure, clear node coordination, and a practical path from install to operations.

## At A Glance

| Layer | What it does | Why it matters |
| --- | --- | --- |
| Managed registry | Tracks nodes, services, identities, and useful metadata | Gives operators one reliable source of truth |
| Message switchboard | Routes coordination messages between local and remote components | Keeps distributed workflows understandable |
| Remote nodes | Runs the edge-side pieces close to the work | Makes self-hosted deployments flexible |
| Installers | Packages setup into repeatable steps | Reduces drift between machines |
| Guides | Documents setup, operations, and recovery | Keeps the project usable without tribal knowledge |

## System Shape

```mermaid
flowchart LR
  operator["Operator"] --> registry["AxiOwl Registry"]
  registry --> switchboard["Message Switchboard"]
  switchboard --> nodeA["Remote Node A"]
  switchboard --> nodeB["Remote Node B"]
  switchboard --> nodeC["Remote Node C"]
  installers["Installers"] --> nodeA
  guides["How-To Guides"] --> operator
  registry --> observability["Operations View"]
```

## Project Focus

```mermaid
pie title AxiOwl Project Focus
  "Managed registry" : 35
  "Message switchboard" : 30
  "Remote node runtime" : 20
  "Installers and guides" : 15
```

## Message Flow

```mermaid
sequenceDiagram
  participant O as Operator
  participant R as Registry
  participant S as Switchboard
  participant N as Remote Node

  O->>R: Register or inspect node
  R->>S: Publish routing context
  S->>N: Deliver command or coordination message
  N-->>S: Return status
  S-->>R: Update registry state
  R-->>O: Present current view
```

## Repository Guide

```text
.
├── assets/
│   └── axiowl-mascot.svg
└── README.md
```

As source packages, installers, and guides are published, this repository will become the canonical starting point for running and operating AxiOwl.

## Principles

| Principle | Description |
| --- | --- |
| Own the control plane | Operators should be able to self-host the registry and coordination layer. |
| Keep nodes understandable | Remote nodes should be easy to install, inspect, and replace. |
| Prefer repeatability | Setup and recovery should be scripted and documented. |
| Make operations visible | Registry state and message flow should be easy to reason about. |

## Roadmap

| Track | Status |
| --- | --- |
| Remote node source | In progress |
| Installers | In progress |
| Registry documentation | Planned |
| Switchboard documentation | Planned |
| Operator guides | Planned |

## Contributing

Issues and pull requests are welcome once the source layout is published. For now, the best contribution is clear feedback on the project shape, installer expectations, and the workflows that should be documented first.

## Security

If you believe you found a security issue, avoid opening a public issue with sensitive details. Open a minimal private report path with the maintainer first, then share reproduction details once a safe channel is agreed.

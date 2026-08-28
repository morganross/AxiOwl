---
sidebar_position: 1
---

# Product Reference

The reference section maps the current AxiOwl product across local providers, daemon hosts, mobile clients, A2A, SSH, platforms, installation, and release.

## Reference Pages

| Document | What it provides |
|---|---|
| [Product Capabilities](current-product-status.md) | Core, connected, mobile, and preview experiences |
| [Architecture Overview](architecture-overview.md) | Coordination core, daemon, relay, mobile, provider, and A2A layers |
| [Provider Support Matrix](provider-support-matrix.md) | Local provider package operations and daemon-facing targets |
| [Platform Support Matrix](platform-support-matrix.md) | Windows, Linux, macOS, Android, and iPhone roles |
| [Protocol Support Matrix](protocol-support-matrix.md) | MCP, A2A, SSH, relay, direct daemon, and local provider boundaries |
| [Installer Behavior Matrix](installer-behavior-matrix.md) | Current Windows feature ownership and daemon selection |

## Current Product Vocabulary

- A **provider surface** is one concrete local integration.
- An **AxiOwl host** is a computer running the daemon and its provider agents.
- A **paired device** is a mobile client approved by that host.
- The **relay** carries encrypted daemon-protocol frames across networks.
- A **direct connection** reaches the daemon through an operator-controlled address.
- **A2A** is a separate standards-based agent and task protocol.
- **A2A-over-SSH** carries A2A semantics through an SSH route.
- The **timeline** is the daemon's authoritative ordered view of an agent session.

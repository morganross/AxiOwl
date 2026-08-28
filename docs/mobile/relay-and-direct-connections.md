---
sidebar_position: 3
---

# Relay And Direct Connections

An AxiOwl host can be reached through the hosted relay, a direct network connection, or both.

## Hosted Relay

The relay is the easiest route across different networks:

```text
phone -> encrypted relay channel -> host daemon
```

The host opens an outbound relay connection, so normal use does not require port forwarding. Pairing gives the phone the host identity needed to establish the encrypted channel. The relay forwards opaque encrypted frames and does not need provider credentials or transcript plaintext.

## Direct Connection

Direct mode connects the app to the daemon at a host and port you provide. It is useful for:

- a local network;
- a private VPN;
- Tailscale;
- an operator-managed server address.

Direct connections can use transport security and optional daemon authentication according to the host configuration.

## One Host, Several Routes

The mobile registry groups relay and direct routes under one host identity. Adding a direct route for an already paired host does not create a second copy of its sessions. The app can remember a preferred route while preserving the host's immutable ID.

## Connection State

The app reports whether the host is connected, offline, or waiting for reconnection. A connected host publishes its provider catalog, projects, workspaces, and agent sessions through the daemon protocol.

## Relay Versus A2A

The relay carries the interactive AxiOwl client-to-daemon protocol. A2A remains a separate standards-based agent protocol for Agent Cards, messages, tasks, and artifacts.

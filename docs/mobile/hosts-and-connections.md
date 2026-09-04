---
sidebar_position: 3
---

# Hosts And Connections

An AxiOwl host is a computer running the daemon and the provider agents you want to access.

## Host Profile

Each profile contains:

- immutable host ID;
- friendly label and appearance;
- one or more connection methods;
- preferred connection method;
- creation and update information.

Renaming a host changes the label, not the host identity that owns its agents.

## Encrypted Relay

The relay is the normal cross-network route:

```text
mobile client -> encrypted relay channel -> host daemon
```

The host creates outbound relay connections, so normal use does not require incoming port forwarding. Pairing gives the mobile client the host identity needed to establish the encrypted application channel.

The relay routes opaque frames and connection metadata. Provider credentials, repository files, prompts, and agent timelines remain at the paired endpoints.

## Direct Connection

Direct mode connects the app to a daemon endpoint through a route controlled by the user or operator. Common environments include:

- the same local network;
- a private VPN;
- Tailscale;
- an operator-managed server address.

The direct endpoint can use configured transport security and daemon authentication.

## Several Routes, One Host

A host can retain both relay and direct connection methods. The app selects the preferred available route while keeping projects and agents under one host record.

## Connection State

Connection state tells the app whether a host is online, reconnecting, unavailable, or ready for agent operations. Once ready, the daemon publishes its capabilities and current host state.

## Multiple Hosts

AxiOwl Mobile can store more than one host profile. This lets one phone move among a laptop, workstation, build machine, or managed host while keeping every host's agents and projects separate.

## Mobile And A2A Are Different

The daemon connection provides an interactive view of a host's projects, workspaces, provider agents, and timelines. A2A provides standards-based Agent Cards, messages, tasks, results, and artifacts. AxiOwl supports both, but they use different identities and routes.

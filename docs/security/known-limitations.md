---
sidebar_position: 7
---

# Shared Security Responsibilities

## The User

The user chooses provider integrations, opens pairing windows, approves mobile devices, selects hosts and agents, and reviews provider permission requests.

## The Host Operator

The host operator controls machine access, daemon lifecycle, direct network exposure, VPN or Tailscale configuration, firewall rules, and log retention.

## The Provider

Each provider owns account authentication, model access, conversation semantics, tools, and provider-side behavior.

## The Mobile Device

The phone protects its local application state and stable client identity. Device-level access controls remain part of the mobile platform's security.

## The Relay Operator

The relay operator maintains availability, routing, TLS endpoints, abuse controls, and operational logs while application content remains encrypted between client and daemon.

## The Installer And Release Authority

The installer owns AxiOwl components selected by the user. The release authority signs and publishes identifiable core, provider, daemon, and platform artifacts.

## The Shared Goal

Security remains understandable when each boundary keeps its own authority:

- provider login remains provider authority;
- pairing remains mobile-to-host trust;
- the relay remains encrypted transport routing;
- direct networking remains operator-controlled reachability;
- the daemon remains agent and timeline authority;
- licensing remains product entitlement.

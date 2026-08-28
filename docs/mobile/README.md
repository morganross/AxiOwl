---
sidebar_position: 1
slug: /mobile
---

# Mobile Control Of Your AxiOwl Hosts

AxiOwl mobile apps connect to the AxiOwl daemon running on your computer. After pairing, your phone can browse that host's projects and agent sessions, open an existing conversation, send a new turn, and follow the live timeline from anywhere the selected connection is available.

## The Product Model

```text
AxiOwl mobile app
  -> paired host connection
  -> AxiOwl daemon on your computer
  -> provider runtime and existing agent session
  -> live timeline returned to the phone
```

The host daemon is the center of the connected experience. It owns provider processes, projects, workspaces, session history, permissions, and the authoritative timeline. The mobile app is a secure client of that host.

## Two Ways To Connect

- **AxiOwl relay:** works across networks without opening an inbound port. The relay routes encrypted traffic between the phone and daemon.
- **Direct connection:** connects to the daemon through an address you control, including private-network and Tailscale-style deployments.

A paired host can retain more than one connection route. The app can use the preferred available route for that host.

## What Pairing Establishes

Pairing connects one mobile installation to one AxiOwl host identity:

1. Open **Mobile App** in AxiOwl on the computer.
2. Ask the daemon to create a time-limited pairing offer.
3. Scan the QR code or paste the pairing link on the phone.
4. Review the pending device on the computer.
5. Approve it locally.
6. The phone stores the host profile and encrypted relay identity.

The daemon can trust multiple approved mobile devices. Each device has its own stable client identity and can be managed independently.

## Read Next

- [Pair A Mobile Device](pair-a-device.md)
- [Relay And Direct Connections](relay-and-direct-connections.md)
- [Agents, Sessions, And Timelines](agents-sessions-and-timelines.md)
- [The AxiOwl Daemon](axiowl-daemon.md)
- [Mobile Connection Security](security-and-privacy.md)

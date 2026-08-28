---
sidebar_position: 5
---

# iPhone

The iPhone app is a native SwiftUI client for AxiOwl hosts.

## What The App Does

- scans an AxiOwl pairing QR code or accepts a pairing link;
- stores the paired host profile and connection routes;
- connects through the encrypted relay or a direct address;
- browses host projects, workspaces, providers, and agent sessions;
- opens an existing agent timeline;
- sends new turns to the selected host-side provider session;
- follows assistant output, tools, permissions, usage, and completion;
- reconnects to the same host and agent identity.

## Provider Credentials Stay On The Computer

The iPhone is a client of the host daemon. It does not become the provider runtime and does not need the desktop provider's account token.

## Pair More Than One Device

Each phone has its own stable client identity. A host can approve multiple devices and manage them independently.

Start with [Pair A Mobile Device](../mobile/pair-a-device.md).

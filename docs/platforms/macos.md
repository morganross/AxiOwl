---
sidebar_position: 4
---

# macOS

AxiOwl for macOS is a native Swift desktop experience with a bundled AxiOwl daemon runtime.

## Native Experience

The macOS application includes foundations for:

- a Swift CLI and SwiftUI desktop app;
- account and entitlement state in platform-protected storage;
- provider discovery and configuration;
- MCP tools and provider workflows;
- mailbox and local coordination;
- daemon lifecycle and connected-client status;
- signed package publication through the AxiOwl release system.

## Bundled Daemon

The macOS package includes an AxiOwl-branded daemon asset tree and launches it as part of the desktop product. The daemon exposes the same host, project, provider, agent, and timeline concepts used by the mobile apps.

## Mobile Pairing

A paired phone can connect through the relay or a direct route and control agents running on the Mac. Provider credentials and project files stay on macOS.

The native Swift app remains the user-facing desktop while the bundled daemon provides the connected agent runtime.

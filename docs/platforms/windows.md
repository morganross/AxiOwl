---
sidebar_position: 2
---

# Windows

Windows x64 is the primary packaged AxiOwl desktop and mobile-host experience.

## What You Can Install

- the AxiOwl runtime, CLI, MCP server, mailbox, and discovery;
- eleven isolated provider packages;
- an optional A2A server and interactive A2A client;
- optional SSH command dispatch;
- the recommended AxiOwl Node daemon;
- the alternative native C++ daemon;
- or no mobile daemon for a local-only installation.

## Mobile App Tab

The desktop interface asks the selected daemon for a real pairing offer and displays the daemon-generated QR code. The phone presents its identity through that offer, and the Windows user approves the pending device.

After pairing, the phone can connect to the host, discover provider agents, open an existing session, send turns, and follow the live timeline.

## Daemon Runtime Choices

The Node daemon is the recommended broad runtime and uses the computer's installed Node environment. The native C++ daemon splits Windows service management, relay transport, host core, and provider runtimes into separate processes.

Both occupy the same product role: they make the computer an AxiOwl host for connected clients. Only one daemon runtime is selected at a time.

## User Context

Provider sessions normally belong to the signed-in Windows user. The service host manages lifecycle, while the daemon and provider runtimes operate with the interactive user's projects, provider configuration, and credentials.

Follow [Install And First Run](../getting-started/install-first-run.md), then [Pair A Mobile Device](../mobile/pair-a-device.md).

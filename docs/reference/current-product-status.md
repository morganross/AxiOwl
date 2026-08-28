---
sidebar_position: 2
---

# Product Capabilities

AxiOwl combines local provider coordination, mobile control of desktop agents, standards-based A2A, explicit SSH routes, and native platform applications.

## Capabilities At A Glance

| Capability | Experience | What it enables |
|---|---|---|
| Windows provider coordination | Core | Discover and coordinate eleven packaged provider surfaces |
| Mailbox, MCP, and local registry | Core | Address sessions, send work, collect replies, and inspect results |
| AxiOwl Node daemon | Core connected runtime | Host projects, providers, agents, sessions, timelines, pairing, and mobile connections |
| Native C++ Windows daemon | Extended runtime | Native service, relay transport, host core, and isolated provider runtimes |
| Android mobile app | Connected client | Pair to hosts, browse agents, send turns, and follow live timelines |
| iPhone mobile app | Connected client | Native host pairing and mobile agent control |
| Encrypted relay | Connected transport | Reach paired hosts across networks without inbound port forwarding |
| Direct daemon connection | Connected transport | Reach hosts through local, VPN, Tailscale, or managed network routes |
| Multiple approved mobile devices | Connected trust | Manage several stable mobile client identities per host |
| External A2A agents | Extended | Discover Agent Cards, send messages, follow tasks, and collect artifacts |
| A2A desktop endpoints | Extended | Present selected registered sessions as standards-based agents |
| A2A-over-SSH | Extended | Carry A2A operations through an operator-managed SSH route |
| Linux x86-64 host | Native platform | Desktop package and bundled AxiOwl daemon |
| macOS host | Native platform | Swift desktop application and bundled AxiOwl daemon |
| Signed pull updates | Extended | Verify core and provider-package releases through signed metadata |

## Provider Family

The Windows installer contains dedicated local packages for Codex agents, Codex CLI, Codex Remote, VS Code Copilot-backed sessions, Cursor agents, Cursor Agent CLI, Antigravity agents, Antigravity CLI, Claude Code CLI, Copilot CLI, and OpenCode CLI.

The daemon separately publishes the provider catalog available for connected agent creation and session control on that host.

## Product Direction

AxiOwl is centered on host-owned agents available locally and from paired mobile clients. The host keeps provider authentication, repositories, provider processes, and authoritative timelines; the phone provides a focused remote control surface.

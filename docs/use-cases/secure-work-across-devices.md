---
sidebar_position: 4
---

# Control Desktop Agents From A Phone

AxiOwl connects the mobile app to the daemon running on your computer, so a provider session can continue without moving its repository, credentials, or process to the phone.

For example, you can leave a Codex, Claude Code, OpenCode, or other configured agent running on a workstation, open that exact session from the phone, send the next turn, review tool output, and follow the result.

## The Experience

```text
paired mobile app
  -> encrypted relay or direct connection
  -> AxiOwl daemon on the host
  -> existing provider agent
  -> live timeline back to the phone
```

## Why This Is Different From Remote Desktop

Remote desktop streams an entire screen. AxiOwl presents the agent itself: projects, sessions, turns, reasoning, tools, permissions, and results. The computer continues to own the repository and provider runtime.

This is useful when:

- the destination machine has a large repository or specialized environment;
- a long-running provider session already has valuable context;
- a team wants a narrow message path instead of a full interactive desktop;
- a phone should reconnect to the same authoritative agent timeline.

## Security By Layers

Protected device workflows combine several responsibilities:

- a time-limited pairing offer;
- local approval on the host;
- a distinct identity for each mobile installation;
- end-to-end encryption across the hosted relay;
- provider credentials retained on the host;
- ordered session and timeline state during reconnect.

These layers let the relay move encrypted frames while the daemon remains responsible for agents, sessions, and provider access.

Read [Pair A Mobile Device](../mobile/pair-a-device.md), [Relay And Direct Connections](../mobile/relay-and-direct-connections.md), and [Mobile Connection Security](../mobile/security-and-privacy.md) for more detail.

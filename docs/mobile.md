---
sidebar_position: 6
slug: /mobile
---

# Mobile And AxiOwl Hosts

AxiOwl mobile connects Android and iPhone clients to agents running on Windows, Linux, or macOS hosts.

## Product Model

```text
mobile app
  -> paired host connection
  -> AxiOwl daemon
  -> host provider runtime and agent session
  -> live timeline back to the phone
```

The daemon is authoritative for provider processes, projects, workspaces, agents, session history, permissions, and timeline state. The phone is a client of that host.

## Pair A Device

1. Install and start an AxiOwl daemon on the computer.
2. Open the **Mobile App** area on the host.
3. Ask the daemon for a fresh pairing offer.
4. Scan the QR code or paste the pairing link on the phone.
5. The phone connects and presents its stable client identity.
6. Approve the pending device on the host.
7. The mobile app saves the host profile and available connection routes.

The pairing offer is time-limited. Closing the window or rejecting the request leaves the client unpaired.

## Multiple Paired Devices

Each mobile installation has its own client identity. A host can approve several phones or tablets, display their connection state, and remove one client independently.

## Relay Connection

The hosted relay connects the phone and daemon across networks without requiring an inbound port on the host. Application frames are encrypted between the paired client and daemon. The relay handles connection routing rather than provider credentials or transcript plaintext.

## Direct Connection

Direct mode connects to a daemon address controlled by the user or operator. It fits local networks, private VPNs, Tailscale, and managed server routes. Direct connections use the configured transport protection and daemon authentication for that endpoint.

One host profile can contain relay and direct routes. The mobile app keeps them under the same immutable host ID and can remember the preferred connection.

## Browse Host State

A connected daemon can publish:

- providers, models, modes, and capabilities;
- projects and workspaces on the host;
- active, imported, and archived agents;
- provider session and daemon status;
- files, branches, worktrees, and other host-supported project features.

## Open An Agent

Selecting an agent opens its authoritative timeline. Events can include user and assistant text, reasoning or progress, tool calls and output, permission requests, usage information, completion, cancellation, and errors.

## Send A Turn

Text entered on the phone becomes a normal turn for the selected host-side provider agent. The daemon retains provider, model, mode, working directory, process, and underlying session identity.

## Reconnect

Stable host and agent identities plus ordered timeline acknowledgements let the client reconcile a session after reconnecting. The same host profile and agent remain available instead of becoming duplicate conversations.

## Provider Credentials

Pairing authorizes access to the daemon protocol. It does not copy provider credentials to the phone or relay. Provider authentication and processes stay in the host user's environment.

## Windows Daemon Choices

| Choice | Role |
|---|---|
| AxiOwl Node daemon | Recommended broad runtime using the installed Node environment |
| AxiOwl native C++ daemon | Native Windows service, transport, core, and provider runtime architecture |
| No mobile daemon | Local provider, mailbox, A2A, and SSH features without mobile host access |

Linux and macOS packages include an AxiOwl-branded daemon with platform-specific lifecycle integration.

## Security Summary

- pairing begins with a daemon-generated, time-limited offer;
- the host user approves each mobile identity;
- relay application frames are encrypted end to end between client and daemon;
- direct route security remains under operator control;
- provider credentials stay on the host;
- removed clients must pair and receive approval again.

---
sidebar_position: 1
slug: /security
---

# Security And Trust

AxiOwl keeps provider accounts, host identity, mobile pairing, relay routing, direct network access, A2A credentials, and licensing as separate responsibilities.

## Security In Plain English

For mobile control, AxiOwl asks:

1. Which daemon host created this pairing offer?
2. Which mobile installation is presenting itself?
3. Did the desktop user approve that device during the pairing window?
4. Is the client using the expected encrypted relay or configured direct route?
5. Which host-owned agent session is being controlled?
6. Which provider permission or result is currently visible in the timeline?

## The Main Protection Layers

### Provider Authentication Stays On The Host

Codex, Claude Code, OpenCode, Cursor, and other providers continue to authenticate and run on the computer. The phone controls an agent through the daemon rather than receiving provider credentials.

### Stable Host And Client Identity

The daemon has a stable host identity. Every mobile installation has its own client identity. Friendly host names can change without changing the paired host.

### Local Pairing Approval

The host generates a fresh, time-limited offer. The phone presents its identity through that offer, and the desktop user approves or rejects the pending device locally.

### End-To-End Relay Encryption

The hosted relay carries encrypted application frames between the paired phone and daemon. It routes connections without needing provider prompts, transcripts, or account tokens in plaintext.

### Explicit Direct Connections

Direct routes use an address and security configuration chosen by the operator. Private-network, VPN, and Tailscale deployments keep reachability under the user's control.

### Provider Permissions Stay Visible

The daemon forwards provider permission requests and decisions as part of the agent timeline. The provider runtime on the host remains the authority for the action it requested.

## Read By Topic

| Page | What you will learn |
|---|---|
| [Encryption And Privacy](encryption-and-privacy.md) | What the relay protects and which metadata remains visible |
| [Pairing And Device Trust](device-trust-and-enrollment.md) | How phones join, reconnect, and are removed |
| [Permissions And Session Control](authorization-and-replay.md) | How mobile turns and provider permissions remain tied to a host agent |
| [Metadata And Identity](metadata-and-identity.md) | Host, client, connection, agent, and provider identifiers |
| [Trust Boundaries](trust-boundaries.md) | What the phone, daemon, relay, provider, A2A service, and installer own |
| [Updates And Supply Chain](updates-and-supply-chain.md) | Signed artifacts, provider packages, and release channels |
| [Shared Security Responsibilities](known-limitations.md) | How users, hosts, providers, and operators work together |

See [Mobile Connection Security](../mobile/security-and-privacy.md) for the connected-client view.

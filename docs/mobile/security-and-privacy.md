---
sidebar_position: 5
---

# Security And Privacy

AxiOwl Mobile separates the mobile client, host daemon, relay, direct network route, and provider runtime so each has a narrow role.

## Device Approval

Pairing begins with a fresh offer from the host daemon. The offer opens a bounded approval window. The phone presents its stable client identity, and the desktop user approves or rejects that pending device.

Approved clients are stored individually. Removing one phone does not change the identities of other paired devices.

## Encrypted Relay Traffic

The hosted relay carries end-to-end encrypted daemon-protocol frames between the paired phone and host. It uses routing and connection identifiers to join the two sides without needing provider prompts or timelines in plaintext.

## Provider Credentials Stay On The Host

The mobile app controls an agent through the daemon. Provider account tokens, provider processes, project files, and working directories remain on the computer.

## Direct Route Responsibility

Direct mode places network reachability under the user or operator's control. The operator owns address exposure, private-network or VPN policy, transport security, daemon authentication, firewall rules, and endpoint lifecycle.

## Identity Layers

| Identity | Purpose |
|---|---|
| Host ID | Names one daemon and its project/agent state |
| Host label | Human-readable mobile display name |
| Mobile client ID | Names one paired app installation |
| Connection ID | Names one live relay or direct connection |
| Agent ID | Names one daemon-managed agent lifecycle |
| Provider session ID | Names the underlying provider conversation |

These identifiers remain distinct even when the user gives several of them the same friendly title.

## Metadata

Connection infrastructure can observe timing, availability, route identifiers, and encrypted frame sizes. The paired phone and host see the project and agent content required for the product experience.

Logs and support records should minimize private paths, provider session IDs, pairing material, network addresses, and message content.

## Revocation And Reset

The host can reject a pending device, remove a paired client, or reset pairing state. Active connections for removed clients are closed, and those devices must complete pairing again.

## Separate Authorities

Mobile pairing is not provider authentication, licensing, A2A authentication, or SSH access. The relay is not the agent host. The daemon is not the provider account. Keeping those roles separate makes the connected product easier to understand and operate.

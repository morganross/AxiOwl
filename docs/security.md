---
sidebar_position: 10
slug: /security
---

# Security And Trust

AxiOwl keeps provider authentication, host identity, mobile pairing, relay routing, direct networking, A2A credentials, SSH keys, licensing, and software publication as separate authorities.

## Mobile Pairing

The host daemon creates a fresh, time-limited pairing offer. The phone uses the offer to connect and present its stable client identity. The desktop user approves or rejects the pending device locally.

Approved mobile identities are stored individually. A host can pair several phones or tablets and remove one without changing the others.

## Relay Encryption

```text
mobile app
  -> encrypted daemon-protocol frame
  -> relay routes opaque frame
  -> host daemon opens frame
  -> provider agent runs on host
  -> encrypted timeline event returns
```

The relay processes connection and routing metadata required for delivery. Provider prompts, timelines, credentials, and project files remain with the paired endpoints and host environment.

## Direct Connections

Direct mode connects to a daemon endpoint chosen by the user or operator. The operator owns address exposure, private-network or VPN policy, transport security, daemon authentication, firewall configuration, and lifecycle.

## Provider Credentials

Provider processes run on the host under the intended user context. Pairing a phone does not copy provider tokens to the phone or relay. The provider continues to control account authentication, model access, tools, and session semantics.

## Provider Permissions

When a provider asks for permission to use a tool or perform an action, the request appears in the agent timeline. The user's decision returns to the provider runtime that issued it. The relay does not approve provider tools.

## Identity Model

| Identity | Meaning |
|---|---|
| Host ID | One daemon and its project/agent state |
| Host label | User-facing name for that host |
| Mobile client ID | One paired app installation |
| Connection ID | One live relay or direct connection |
| Agent ID | One daemon-managed agent lifecycle |
| Provider session ID | Underlying provider conversation |
| Timeline sequence | Ordered reconnect and rendering state |
| A2A task ID | Separate standards-based task identity |

Friendly names can change without changing the identity used for routing.

## Reconnect And Duplicate Prevention

Stable operation, agent, host, and timeline identities let the daemon return the existing operation during reconnect recovery. Ordered timeline acknowledgements let the client reconcile events without treating the connection as a new conversation.

## Trust Boundaries

| Boundary | Authority |
|---|---|
| Mobile app | Client identity, paired host profiles, user controls, and presentation |
| Daemon | Host identity, paired clients, agents, provider processes, permissions, and timelines |
| Relay | Encrypted frame routing and service availability |
| Direct-route operator | Network reachability and endpoint protection |
| Provider | Account, model, tools, session, and provider-side execution |
| A2A endpoint | Agent Card, authentication, task, result, and artifact semantics |
| Installer | Selected AxiOwl components and lifecycle |
| Licensing | Optional product entitlement |
| Release authority | Signed artifact and update publication |

## Metadata And Privacy

Connection infrastructure can observe timing, availability, route identifiers, and encrypted frame sizes. The host and mobile app see the project and agent data needed for the product. Logs and support reports should minimize private paths, provider session IDs, pairing material, and message content.

## Updates

Core applications and provider packages have identifiable revisions. Signed artifacts, immutable publication, channel selection, verified download, staging, and explicit application form separate release stages. An update does not become provider authentication or mobile pairing authority.

## Shared Responsibilities

Users approve devices and provider permissions. Host operators control machine and network access. Mobile platforms protect local app state. Providers protect provider accounts. Relay operators maintain availability and routing. AxiOwl keeps these roles explicit rather than combining them into one credential.

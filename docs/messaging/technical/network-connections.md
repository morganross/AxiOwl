---
title: "Network ingress and egress reference"
slug: /messaging/technical/network-connections
description: "Listeners, outbound destinations, triggers, transmitted data and default boundaries."
---

# Network ingress and egress reference

Network behavior is feature-specific. The following inventory covers Messaging-owned routes and the connected-client integrations visible in reviewed source. Exact installed configuration and [release status](source-and-release-status.md) remain authoritative for a machine.

## Listeners and inbound work

| Interface | Reviewed default/binding | Purpose and access |
| --- | --- | --- |
| Windows native local host | Loopback port 6767 | Authorized local HTTP/WebSocket host capabilities |
| Mac/Linux native local host | Loopback port 6768 | Authorized local host capabilities and desktop control |
| Native control IPC | Windows owner-scoped pipes; POSIX local channels/private helper IPC | Owner/user admission, not a public web API |
| Temporary account callback | Ephemeral loopback port during login; native address form varies | PKCE/browser authorization completion |
| Windows A2A service | Separate configured service; source defaults new selection off; usual loopback port 37661 | Deliberately exposed agent-service operations |
| SSH server | Usually configured port 22; not implied by Messaging installation | OS-user remote command access under OpenSSH policy |
| Provider bridge | Provider/OS-specific local configuration | Scoped integration; no universal provider bridge port |

A changed bind address, proxy, firewall rule or tunnel can change exposure. A2A/direct interfaces must not be generalized from the native host's loopback defaults.

## Outbound connections

| Destination | Trigger | Data and continuing behavior |
| --- | --- | --- |
| Configured account authority, normally HTTPS axiowl.com | Explicit account actions, authorized device reconciliation or unfinished recovery | Tokens on their authenticated route; device/public identity, membership and offers; no intended chat-body upload |
| Hosted Relay, normally WSS prelay.axiowl.com | Explicit saved enablement | Routing metadata and encrypted paired payloads; connection maintenance while enabled |
| Release object storage | Update availability/download or release-specific installer activity | Product/channel/artifact requests; signed metadata/packages |
| Configured licensing service | Applicable explicit online license action | License-operation fields; offline entitlement verification is separate |
| Selected SSH host/alias | Configured remote registry work, explicit operation/deployment | OS-authenticated command and selected operation data |
| Configured A2A endpoint | Agent Card retrieval or authorized service call | Card metadata, requested content, service/task identifiers |
| Provider-operated services | Provider app behavior and selected model/account | Conversation content and provider-specific data under that provider's policies |
| Expo/OS push services in applicable mobile builds | Notification permission and subscription | Push token/registration and notification-service metadata |
| Speech/audio service, if configured | Explicit connected audio feature | Audio/transcription data according to that backend |
| Browser/OS security and update services | Platform policy | Outside Messaging's own network-preference controls |

Release hosting is currently an HTTPS object-storage origin; deployment-specific bucket names and internal infrastructure identifiers are not client integration APIs.

## Observability limits

Passive status reports selected local events, not all sockets or bytes. “No observation” does not prove no traffic. Relay-off is not a global kill switch for provider/cloud/SSH/mobile services. See [defaults](network-defaults.md), [account timing](account-and-device-discovery.md) and [observability](observability.md).


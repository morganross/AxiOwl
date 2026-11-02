---
title: "Interface and outcome reference"
slug: /messaging/technical/interfaces-and-errors
description: "Native tool inputs, account API families and semantic failure categories."
---

# Interface and outcome reference

This reference names reviewed interfaces without making all internal wire schemas stable public APIs. Inspect the installed entrypoint's advertised schema before integration.

## Native agent tools

| Purpose | Common installed name | Contract |
| --- | --- | --- |
| Send | axiowl_send_message or axiowl_send | Required recipient name and authored body; native source metadata |
| List | axiowl_list_agents | Requested session/index observation |
| Discover | axiowl_discover | Requested native/remote discovery scope |
| Create | axiowl_create_agent | Selected supported provider/surface and creation context |
| Rename | axiowl_rename_agent | Exact existing native target and requested name, where exposed |
| Identity | axiowl_whoami | Optional requested executing-context observation |
| Earlier operation status | axiowl_get_send_status | Existing operation reference/source context, where exposed |

Hosts may namespace these names or omit tools. None of the administrative tools is a mandatory precursor to a supplied-name Send.

The Windows CLI separately exposes native command families for send, create, rename, registry, nodes, SSH and MCP hosting. Their terminal switches are not the same as MCP JSON arguments. Use the actual OS/version's help instead of copying another surface's identity flags.

## Account HTTPS route families

Relative to the configured WordPress REST base:

| Method | Route family | Purpose |
| --- | --- | --- |
| GET | account/session | Account session/profile information |
| POST | oauth/token | Code exchange/refresh under the account contract |
| POST | oauth/revoke-session | Server-session family revocation |
| GET / POST | devices | Membership listing / existing public device registration |
| POST | devices/approve, reject, rename, revoke | Scoped device management |
| GET / POST | pairing/offers | Approved device routing-offer retrieval/publication |
| GET | security/events | Bounded account security history |

Browser authorization uses the website front channel and PKCE. API authentication, exact body schema, approval checks, token lifetime and deployment HTTPS handling remain required; this table does not grant access or document a credential bypass.

## Semantic outcome categories

These are explanatory categories, not invented universal JSON enums:

- **Admitted:** durable logical request accepted; delivery not yet proved.
- **Delivered/observed provider result:** evidence limited to the exact native operation.
- **Unsupported or rejected:** requested contract/permission unavailable.
- **Uncertain:** operation may have been accepted; no automatic replay.
- **Installed with warnings:** selected attempt loop completed, named integrations incomplete.
- **Unverified:** no sufficient observation.

Return the actual native code/detail where available and preserve correlation IDs. Do not translate uncertainty into failure-with-safe-retry.

See [protocols](protocols-and-ipc.md), [Send](send-contract.md), [account discovery](account-and-device-discovery.md) and [observability](observability.md).


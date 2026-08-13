---
sidebar_position: 3
---

# Pairing, Identity, And Trust

An A2A node record and an XMPP approved device are different kinds of identity. Both are more than display names, but they use different credentials and security decisions.

## Node Record

Important node fields include:

| Field | Purpose |
|---|---|
| `node_id` | Stable routing identity. |
| `display_name` and aliases | Human-friendly lookup. |
| `api_url` | Direct A2A HTTPS endpoint. |
| `host` and `ssh_user` | SSH transport address. |
| access token | Durable bearer credential after pairing. |
| `transport` | Explicit `a2a` or `a2a-ssh` policy. |
| `enabled` | Disabled nodes are never contacted. |

## A2A Node Access

An A2A node uses an explicit endpoint and access policy. A one-time setup value is not a normal long-lived bearer credential. Direct A2A and A2A-over-SSH each retain their own transport authentication rather than deriving trust from a node display name.

## XMPP Device Admission

Secure XMPP uses a different model. A new device creates its own keys and submits a signed enrollment request. A currently trusted coordinator approves it and signs a device-admission statement. The user confirms the exact admission through a direct scan or full fingerprint comparison before the device joins the authorization domain.

The routing server can authenticate a transport connection, but it cannot grant provider action authority. Complete loss of every trusted coordinator means creating a new authorization domain; licensing, support, the server, and backups cannot recreate the old device authority.

## Sender Identity

The destination receives an attributable source agent and source node. The destination applies its own registry and provider rules. Network metadata does not grant permission to impersonate a local provider session.

## Replay And Request Controls

A2A has task and request identity at the protocol boundary. Protected XMPP actions additionally carry receiver-verified authorization and replay state before provider invocation. Neither model treats aliases as authorization.

## Trust Limit

A successful node handshake or XMPP connection proves only its transport boundary. It does not prove that the destination authorized an action, invoked a provider, or received a provider reply. Those states remain separate in receipts and logs.

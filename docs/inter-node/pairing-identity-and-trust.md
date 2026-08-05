---
sidebar_position: 3
---

# Pairing, Identity, And Trust

Remote nodes are durable identities, not arbitrary hostnames. The node registry records how a node can be contacted and which credential authorizes access.

## Node Record

Important node fields include:

| Field | Purpose |
|---|---|
| `node_id` | Stable routing identity. |
| `display_name` and aliases | Human-friendly lookup. |
| `api_url` | Direct or relay HTTPS endpoint. |
| `host` and `ssh_user` | SSH transport address. |
| access token | Durable bearer credential after pairing. |
| `transport` | Explicit transport policy. |
| `enabled` | Disabled nodes are never contacted. |

## Pairing Codes And Access Tokens

A pairing or enrollment code establishes a relationship. It is not the normal long-lived transport credential. After enrollment, AxiOwl expects a revocable access token for authenticated API and A2A requests.

## Sender Identity

The destination receives an attributable source agent and source node. The destination applies its own registry and provider rules. Network metadata does not grant permission to impersonate a local provider session.

## Replay And Request Controls

The native API path supports authenticated client scopes, request IDs, timestamps, rate limiting, and replay checks. Public deployment still requires TLS and an explicit network policy.

## Trust Limit

A successful node handshake proves transport-level acceptance by an authenticated AxiOwl endpoint. It does not prove the destination provider answered. Provider and MCP reply evidence remain separate.

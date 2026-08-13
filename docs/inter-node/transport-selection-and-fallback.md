---
sidebar_position: 2
---

# Transport Selection And Fallback

Remote routing uses an explicit transport plan. It does not try every mechanism until something appears successful, because an ambiguous failure may occur after the destination accepted the request.

## Current Node Transports

| Configuration | Transport |
|---|---|
| `a2a` | Direct A2A over the configured HTTPS endpoint. |
| `a2a-ssh` | A2A JSON-RPC over SSH standard input/output. |

The CLI registers these two modes explicitly, keeping node setup aligned with the route the operator selected.

## Direct HTTPS A2A

Before sending, AxiOwl fetches the remote Agent Card. The node must have an HTTPS API URL and a durable access token. A one-time enrollment code is not accepted as a long-running bearer token.

## A2A Over SSH

SSH mode starts `axiowl a2a-relay-session --stdio` on the remote node and exchanges one JSON-RPC request and response over the encrypted SSH stream. This preserves A2A request semantics while using SSH for transport and machine authentication.

## XMPP Is Separate

Secure XMPP routing does not appear in this fallback list. It uses approved device identity, endpoint encryption, signed action authorization, and exact resource delivery. A failed A2A request is never retried through XMPP, and a failed protected XMPP action is never retried through A2A.

## Duplicate-Delivery Protection

A failed transport is not automatically safe to retry through another path. A connection may fail after the remote side accepted the message.

When a node has both a direct A2A address and SSH information, the plan can select the next eligible A2A transport only at a boundary where retry is known not to duplicate provider delivery. Ambiguous provider failures stop the plan and remain visible.

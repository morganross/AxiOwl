---
sidebar_position: 2
---

# Transport Selection And Fallback

Remote routing uses an explicit transport plan. It does not try every mechanism until something appears successful.

## Current Transport Modes

| Configuration | Attempted transport |
|---|---|
| `a2a`, `a2a-https`, `https` | Direct HTTPS A2A |
| `a2a-relay` | Hosted A2A relay |
| `a2a-ssh` | A2A JSON-RPC over SSH standard input/output |
| `api` | Direct A2A, then legacy API only when migration-safe |
| `ssh` | A2A-over-SSH, then legacy SSH only when unavailable |
| `legacy-api` | Legacy HTTP API only |
| `legacy-ssh` | Legacy SSH relay only |
| `auto` | Direct A2A when an API URL exists, then A2A-over-SSH when SSH information exists |

## Direct HTTPS A2A

Before sending, AxiOwl fetches the remote Agent Card. The node must have an HTTPS API URL and a durable access token. A one-time enrollment code is not accepted as a long-running bearer token.

## Hosted Relay

Relay mode posts an A2A JSON-RPC request to a configured HTTPS relay. The request carries the destination node identity in authenticated request metadata. The relay resolves the target node and forwards to that node's A2A endpoint.

## A2A Over SSH

SSH mode starts `axiowl a2a-relay-session --stdio` on the remote node and exchanges one JSON-RPC request and response over the encrypted SSH stream. This preserves A2A request semantics while using SSH for transport and machine authentication.

## Duplicate-Delivery Protection

A failed transport is not automatically safe to retry through another path. A connection may fail after the remote side accepted the message.

AxiOwl falls back only when the transport is classified as unavailable or explicitly migration-safe. Ambiguous provider failures stop the plan and record that fallback was blocked to prevent duplicate delivery.

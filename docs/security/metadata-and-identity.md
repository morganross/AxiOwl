---
sidebar_position: 5
---

# Metadata And Identity

AxiOwl needs identity metadata to route messages and replies. The metadata is useful, but it is not automatically secret and it is not automatically authoritative.

## Identity Levels

These values have different meanings:

| Value | Use | Security meaning |
|---|---|---|
| Display name | Human-readable label | Never proof of identity by itself. |
| Alias | Convenience lookup | Must not authorize an action. |
| Provider and surface | Identifies the product boundary | Helps choose discovery and delivery logic. |
| Provider session ID | Addresses a specific session | Stronger than a name; must come from provider-owned state. |
| Sender identity metadata | Identifies who called back | Used to validate a reply against the registry and current session. |
| A2A agent/task ID | Addresses a standards endpoint and operation | Scoped to the A2A protocol boundary. |
| XMPP full resource | Addresses one connected device endpoint | Transport routing identity, not provider authorization by itself. |
| Approved device key | Identifies a device in a trust domain | Must be admitted and current; stronger than transport login. |
| Authorization domain | Names one customer-controlled trust history | Not a website account, license, or provider session. |

## What A Normal Message May Carry

Depending on the surface, AxiOwl may need a provider name, surface, session identifier, target identifier, request or receipt identifier, and a run correlation value. A protected XMPP route also needs enough outer routing metadata to reach the exact connected resource. These values support routing, troubleshooting, authorization, and reply matching. They should be minimized, retained only as long as useful, and kept out of provider-visible content when they are not needed there.

## Provider-Owned Truth

For support claims, a session ID or sender identity should come from the provider's own session or MCP boundary. A caller-provided environment variable, typed chat title, current working directory, or stale registry alias can be helpful discovery input, but it is not enough to prove who sent a reply.

## Device And Account Truth

A website account can identify a customer session. A pool can identify the account's current device group. An XMPP transport login can identify one connected resource. None of those facts alone grants provider action authority. The receiving endpoint verifies the admitted device, current trust state, signed request, grant, and replay state before handoff.

## Local Logs Are Sensitive

Logs can contain names, paths, session identifiers, timing, error details, and delivery outcomes. They are valuable for diagnosis and should be treated as sensitive operational data. Share the smallest excerpt needed to diagnose a problem and redact credentials, keys, tokens, personal content, and private host information.

## Metadata And Encryption

Encrypting message content does not make routing metadata disappear. AxiOwl documents this distinction so users can make an informed choice about provider surfaces and remote deployments.

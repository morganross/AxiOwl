---
sidebar_position: 5
---

# Metadata And Identity

AxiOwl needs identity metadata to route messages and replies. The metadata is useful, but it is not automatically secret and it is not automatically authoritative.

## Identity levels

These values have different meanings:

| Value | Use | Security meaning |
|---|---|---|
| Display name | Human-readable label | Never proof of identity by itself. |
| Alias | Convenience lookup | Must not authorize an action. |
| Provider and surface | Identifies the product boundary | Helps choose discovery and delivery logic. |
| Provider session ID | Addresses a specific session | Stronger than a name; must come from provider-owned state. |
| Sender identity metadata | Identifies who called back | Used to validate a reply against the registry and current session. |

## What a normal message may carry

Depending on the surface, AxiOwl may need a provider name, surface, session identifier, target identifier, request or receipt identifier, and a run correlation value. These values support routing, troubleshooting, and reply matching. They should be minimized, retained only as long as useful, and kept out of message content when they are not needed there.

## Provider-owned truth

For support claims, a session ID or sender identity should come from the provider's own session or MCP boundary. A caller-provided environment variable, typed chat title, current working directory, or stale registry alias can be helpful discovery input, but it is not enough to prove who sent a reply.

## Local logs are sensitive

Logs can contain names, paths, session identifiers, timing, error details, and delivery outcomes. They are valuable for diagnosis and should be treated as sensitive operational data. Share the smallest excerpt needed to diagnose a problem and redact credentials, keys, tokens, personal content, and private host information.

## Metadata and encryption

Encrypting message content does not make routing metadata disappear. AxiOwl documents this distinction so users can make an informed choice about provider surfaces and remote deployments.

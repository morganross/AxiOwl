---
sidebar_position: 4
---

# MCP And Metadata

MCP is how a provider session calls AxiOwl tools. Metadata is how AxiOwl identifies the provider session that made the call and matches a reply to the right registry entry.

## Plain English version

When a provider replies, AxiOwl needs more than a sentence such as "I am Codebase review." It needs provider-owned session identity that can be compared with the registry and current session state.

## Identity is layered

A display name is for people. An alias is for convenience. A provider session identifier is for addressing. A sender identity returned through the provider boundary is evidence that can support a reply claim. These values must not be silently treated as interchangeable.

## Why metadata matters

Without reliable metadata:

- a stale chat can receive a message intended for a current session;
- two windows can have the same title;
- a CLI can start in an old or missing working directory;
- a caller-owned environment variable can impersonate a provider identity;
- a reply can be accepted without proving which provider session sent it.

## CLI rule

For CLI providers, environment-only session identity is useful for experiments but is not enough for a final support claim. The provider must expose session identity through MCP or through a provider-specific integration that preserves provider-owned metadata.

## Privacy

Session identifiers, paths, timestamps, and routing labels can be sensitive even when message content is protected. Logs and diagnostics should include only what is needed to explain the handoff, and shared excerpts should be redacted.

See [Metadata And Identity](../security/metadata-and-identity.md) for the public identity model and [Receipts Versus Proof](receipts-vs-proof.md) for the evidence boundary.

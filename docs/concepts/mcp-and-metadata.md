---
sidebar_position: 4
---

# MCP And Metadata

MCP is how provider sessions call AxiOwl tools. Metadata is how AxiOwl knows which provider session is calling.

## Plain English Version

When a provider replies, AxiOwl needs caller ID. The provider should not just say “I am Codebase review.” It should provide session identity that AxiOwl can map to a registry row.

## Why Metadata Matters

Without metadata, replies can be misrouted or falsely trusted.

Examples:

- a stale chat uses an old name;
- a CLI process starts from an old cwd;
- two provider windows have similar titles;
- a user manually types a display name that looks like a session id.

## CLI Metadata Rule

For CLI providers, environment-only session identity is not enough for final support. The provider must provide metadata through MCP or through a robust provider patch.

This rule prevents a caller-owned environment variable from pretending to be provider-owned identity.

## Good Metadata

Good metadata identifies:

- provider brand;
- provider surface;
- provider session id;
- host/session/window where applicable;
- cwd when relevant for CLI;
- node/local runtime identity when relevant.

## Failure Mode

When metadata is missing, AxiOwl should fail loudly instead of guessing.

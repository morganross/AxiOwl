# Antigravity Agents

Status: `supported`

See [Provider Support Matrix](../reference/provider-support-matrix.md).

## Novice Summary

Use this page when you mean the Antigravity agent surface. Do not use this page to decide whether Antigravity CLI is supported; that is a separate target provider surface.

## Surface

Antigravity agent sessions.

Plain English version: this is the Antigravity agent surface, not the standalone AGY CLI surface.

## Delivery Method

AxiOwl uses the Antigravity provider edge and AxiOwl MCP reply path.

## Installer Action

The installer configures Antigravity/Gemini MCP integration when selected.

## Requirements

| Requirement | Needed |
|---|---|
| Patch | No editor patch expected for current supported surface. |
| Extension | No VSIX expected. |
| MCP | Required. |
| Config | Antigravity/Gemini MCP config. |

## Test Status

Response-backed Antigravity tests have passed.

## Known Risks

- Quota/auth can block testing.
- Provider metadata must identify the replying session.
- Do not assume Antigravity CLI support is the same as Antigravity agent support.

## Architecture Rationale

Antigravity agents remain separate from Antigravity CLI because their session model and delivery mechanism differ. Keeping them separate lets the agent surface stay supported while the CLI surface remains target until metadata proof is complete.

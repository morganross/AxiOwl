# Antigravity Agents

Status: `supported`

See [Provider Support Matrix](../reference/provider-support-matrix.md).

## Surface

Antigravity agent sessions.

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

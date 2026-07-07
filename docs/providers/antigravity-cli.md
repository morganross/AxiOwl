# Antigravity CLI

Status: `target`

See [Provider Support Matrix](../reference/provider-support-matrix.md).

## Surface

Standalone AGY / Antigravity CLI conversations.

## Delivery Method

Historical implementation used AGY conversation discovery and resume/print mode. Current policy requires provider-owned MCP metadata, so the final method must include a programmatic metadata patch or equivalent provider-supported metadata path.

## Installer Action

Target behavior: install CLI MCP config and apply a robust metadata patch when the CLI is discovered and selected.

## Requirements

| Requirement | Needed |
|---|---|
| Patch | Required for final metadata compliance unless provider supplies metadata natively. |
| Extension | No VSIX. |
| MCP | Required. |
| Config | CLI MCP config. |

## Test Status

Historical response-backed proof exists, but current support requires new proof with provider-owned metadata.

## Known Risks

- Quota/auth can block testing.
- CLI session storage may change.
- Environment-only sender identity is not accepted as final support.

# Copilot CLI

Status: `target`

See [Provider Support Matrix](../reference/provider-support-matrix.md).

## Surface

Standalone Copilot CLI sessions.

## Delivery Method

AxiOwl has code support for Copilot CLI create/resume paths, but final support requires provider-owned MCP metadata and working Copilot CLI authentication.

## Installer Action

Target behavior: install Copilot CLI MCP config and robust metadata patch when Copilot CLI is discovered and selected.

## Requirements

| Requirement | Needed |
|---|---|
| Patch | Required for final metadata compliance unless Copilot CLI supplies metadata natively. |
| Extension | No VSIX for CLI surface. |
| MCP | Required. |
| Config | Copilot CLI MCP config. |

## Test Status

Code support exists, but local testing has been auth-blocked and metadata patch proof is outstanding.

## Known Risks

- Copilot CLI auth is not the same as generic GitHub CLI auth.
- Classic GitHub tokens may not satisfy Copilot CLI auth requirements.
- Do not count config injection alone as support.

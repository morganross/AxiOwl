# Copilot CLI

Status: `target`

See [Provider Support Matrix](../reference/provider-support-matrix.md).

## Novice Summary

Use this page when you mean standalone Copilot CLI. It is not the same as Copilot inside VS Code, and it remains a target until auth and metadata proof are complete.

## Surface

Standalone Copilot CLI sessions.

Plain English version: this is Copilot as a command-line provider, not Copilot inside VS Code.

## Delivery Method

AxiOwl has code support for Copilot CLI create/resume paths, but final support requires provider-owned MCP metadata and working Copilot CLI authentication.

## Installer Action

Target behavior: install Copilot CLI MCP config and robust metadata patch when Copilot CLI is discovered and selected.

The installer should not treat GitHub CLI auth as proof that Copilot CLI auth is ready.

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

## Architecture Rationale

Copilot CLI should become a first-class CLI provider only when auth detection and metadata ownership are clear. It is likely simple after those are solved, but simplicity is not proof.

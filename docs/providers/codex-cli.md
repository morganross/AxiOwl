# Codex CLI

Status: `supported`

See [Provider Support Matrix](../reference/provider-support-matrix.md).

## Surface

Standalone Codex CLI sessions.

## Delivery Method

AxiOwl uses local Codex CLI/thread operations and resumes or targets Codex CLI sessions. Replies must come back through AxiOwl MCP with Codex CLI session identity.

## Installer Action

The installer installs AxiOwl MCP/plugin support needed for Codex CLI where selected.

## Requirements

| Requirement | Needed |
|---|---|
| Patch | Provider-owned metadata path must remain intact. |
| Extension | No VSIX. |
| MCP | Required. |
| Config | Required where Codex CLI needs AxiOwl MCP config. |

## Test Status

Response-backed proof exists:

```text
AXIOWL_CODEX_CLI_REPLY_OK
```

## Known Risks

- CLI support is separate from Codex agent support.
- Environment-only identity injection is not accepted as final support.
- Stale session state can produce misleading target rows.

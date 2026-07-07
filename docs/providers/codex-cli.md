# Codex CLI

Status: `supported`

See [Provider Support Matrix](../reference/provider-support-matrix.md).

## Surface

Standalone Codex CLI sessions.

Plain English version: this is Codex from the command line, not the Codex agent window.

## Delivery Method

AxiOwl uses local Codex CLI/thread operations and resumes or targets Codex CLI sessions. Replies must come back through AxiOwl MCP with Codex CLI session identity.

Expected proof flow:

```text
AxiOwl send/create
  -> Codex CLI session/thread
  -> provider receives prompt
  -> provider replies using AxiOwl MCP
  -> MCP metadata identifies Codex CLI session
```

## Installer Action

The installer installs AxiOwl MCP/plugin support needed for Codex CLI where selected.

Codex CLI should be tested separately from Codex agents. A passing Codex agent test does not prove Codex CLI.

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

## Architecture Rationale

Codex CLI gets its own provider surface because command-line sessions have different process, cwd, and session-state behavior than agent sessions. That separation keeps install, discovery, and QA honest.

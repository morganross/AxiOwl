# Claude Code CLI

Claude Code CLI uses documented session files and resume behavior, with AxiOwl MCP installed into Claude's configuration.

## Capabilities

| Operation | Status | Current implementation |
|---|---|---|
| Discovery | implemented | Claude JSONL/session state and cwd validation |
| Send | implemented | Resume exact Claude session |
| Create | implemented | New session, initial message, readiness, and verification |
| Rename | implemented | Full native rename verification workflow |
| MCP reply | implemented | MCP warm-up and provider metadata handling |

## Installer

The Claude checkbox installs Claude MCP configuration when Claude is detected and selected. It does not install Claude itself or alter Claude authentication.

## Evidence

Claude Code CLI has returned response-backed AxiOwl messages. The July 12 full test exposed a false-negative create verifier after the provider actually replied. Current `main` contains later MCP warm-up, readiness, create-verification, and rename-lifecycle fixes. A post-merge clean-machine round remains the validation gate.

## Risks

- a stale or nonexistent working directory can block the provider before MCP runs;
- session JSONL discovery must not promote stale sessions;
- successful provider output and successful lifecycle verification are distinct boundaries.

# Codex CLI

Codex CLI is a separate provider surface from Codex Desktop even though both use Codex session concepts.

## Capabilities

| Operation | Status | Method |
|---|---|---|
| Discovery | supported | Codex CLI session metadata |
| Send | supported | Resume the exact native session |
| Create | implemented | Start a new Codex CLI session with the initial message |
| Rename | supported | Provider-visible native rename |
| MCP reply | supported | Codex MCP metadata and plugin path |

## Installer

The primary MSI has one Codex checkbox for the Codex plugin/MCP/skill integration. It does not expose a separate Codex CLI checkbox, even though the runtime has a distinct `codex_cli` provider edge.

## Evidence

Codex CLI has returned response-backed AxiOwl messages and provider-visible rename proof. In the July 12 full round, create reached and named the correct session but the provider turn ended before a complete MCP reply. Current documentation therefore distinguishes implemented create from fully validated create.

## Risks

- desktop and CLI sessions must not be merged solely because they share a UUID format;
- a partial transcript is not a completed reply;
- the installer/runtime coverage difference matters on a clean machine.

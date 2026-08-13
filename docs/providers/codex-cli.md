# Codex CLI

Codex CLI is a separate surface from Codex Desktop even when both expose similar thread identifiers.

| Operation | Source status |
|---|---|
| Discover | Implemented |
| Send | Implemented |
| Create | Implemented |
| Rename | Implemented |
| MCP reply | Implemented |
| Status | Implemented |

The current Windows MSI has a dedicated Codex CLI feature and provider package. It configures AxiOwl MCP/session support but does not install Codex CLI or authenticate the user.

Historical response-backed evidence exists. A current package still needs a real authenticated CLI session and a correlated reply to establish current end-to-end proof.

Desktop and CLI registry rows remain separate. A shared UUID shape or working directory is not enough to merge them.

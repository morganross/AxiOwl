# Claude Code CLI

Claude Code CLI uses provider session records and resume behavior with an AxiOwl MCP entry in Claude's user configuration.

| Operation | Source status |
|---|---|
| Discover | Implemented |
| Send | Implemented |
| Create | Implemented |
| Rename | Implemented |
| MCP reply | Implemented |

The Windows feature installs the provider worker and AxiOwl-owned configuration. It does not install Claude Code, authenticate Anthropic, or repair a missing project directory.

Historical response-backed evidence exists. A stale session whose working directory no longer exists can fail before MCP executes; that is provider-session state, not a message acceptance success.

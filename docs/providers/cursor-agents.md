# Cursor Agents

Cursor agents are desktop Composer sessions addressed through the AxiOwl Cursor bridge and exact-session integration.

| Operation | Source status | Risk level |
|---|---|---|
| Discover | Implemented | Provider-private session state |
| Send | Implemented | Experimental integration boundary |
| Create | Implemented | Experimental integration boundary |
| Rename | Implemented | Provider-visible persistence required |
| MCP reply | Implemented | Exact session metadata required |

The Cursor feature owns its VSIX bridge, MCP configuration, adaptive integration, isolated worker, process scope, and AxiOwl-owned cleanup.

The bridge command-file path is preferred while Cursor is active; URI activation is a fallback. Cursor workbench and session internals are private and can change, so package installation never substitutes for a current response-backed check.

AxiOwl must not broadcast to every Cursor window, infer a session from visible text, or claim a rename merely because a command was accepted.

# Copilot CLI

Copilot CLI is the standalone GitHub Copilot command-line product, not a chat hosted by VS Code.

| Operation | Source status |
|---|---|
| Discover | Implemented |
| Send | Implemented |
| Create | Implemented |
| Rename | Implemented |
| MCP reply | Implemented |

The Windows feature installs a session-metadata patch, runtime configuration, and isolated provider worker. The patch supplies provider-owned session identity to AxiOwl MCP calls. It does not install Copilot CLI or authenticate GitHub.

Older docs that marked rename unsupported are superseded by the current provider contract. Because the integration touches provider-private runtime behavior, it still requires post-update verification on the installed Copilot version.

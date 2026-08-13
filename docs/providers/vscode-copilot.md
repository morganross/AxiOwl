# VS Code Copilot-Backed Sessions

This is the current packaged VS Code provider surface. It combines an in-host VSIX bridge with MCP configuration, session metadata integration, and an isolated worker.

| Operation | Source status |
|---|---|
| Discover | Implemented |
| Send | Implemented |
| Create | Implemented |
| Rename | Implemented |
| MCP reply | Implemented |
| Status | Implemented |

The bridge identifies which VS Code window owns the exact session. The metadata integration binds MCP calls to provider-owned session state. A command receipt from the extension is weaker than a transcript change and correlated provider response.

VS Code and Copilot updates can change private storage or runtime anchors. The integration is therefore package-backed but still experimental at its patch-sensitive boundary.

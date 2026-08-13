# Cursor Agent CLI

Cursor Agent CLI is separate from Cursor Composer in the desktop editor.

| Operation | Source status |
|---|---|
| Discover | Implemented |
| Send | Implemented |
| Create | Implemented |
| Rename | Implemented |
| MCP reply | Implemented |

The Windows MSI now has a dedicated Cursor CLI feature and isolated package. It applies the provider-specific session-metadata integration needed for exact MCP identity. Older docs saying there was no checkbox or no rename support are stale.

Cursor authentication remains external. Editor and CLI sessions must not be merged by name or assumed to share one delivery method.

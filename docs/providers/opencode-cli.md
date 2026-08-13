# OpenCode CLI

OpenCode CLI is addressed through provider-owned session state and native command/configuration boundaries.

| Operation | Source status |
|---|---|
| Discover | Implemented |
| Send | Implemented |
| Create | Implemented |
| Rename | Implemented |
| MCP reply | Implemented |

The current Windows installer has a dedicated OpenCode feature and provider package. This replaces the older runtime-only/no-checkbox state.

Delivery must preserve the exact message bytes. AxiOwl should refuse a shell shim that corrupts multiline input rather than send altered content and report success.

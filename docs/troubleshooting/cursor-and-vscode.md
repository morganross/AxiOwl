---
sidebar_position: 5
---

# Cursor And VS Code Troubleshooting

Cursor and VS Code are the most patch/extension-sensitive provider surfaces.

## Cursor

Cursor needs:

- Cursor feature selected;
- Cursor bridge extension installed;
- Cursor MCP config;
- Cursor patch installed;
- command-file watcher active;
- `glass.axiowlSubmitToAgent` visible;
- provider restart when patch state changes.

Important error:

```text
Cursor Glass submit patch is not installed or not visible to the bridge.
```

That means the bridge ran but the submit hook was unavailable.

## VS Code

VS Code needs:

- VS Code feature selected;
- VS Code bridge extension installed;
- MCP server definition visible;
- bridge ownership correct;
- native session id mapped correctly;
- provider restart/reload when needed.

## Shared Risk

Both providers can have stale extension folders or stale workspace state. Treat warnings and old paths as evidence to investigate, not automatic root cause.

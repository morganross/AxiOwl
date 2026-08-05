# Cursor Agents

Cursor agents are Composer sessions addressed by the Cursor bridge extension and a patch-provided exact-session submit path.

## Capabilities

| Operation | Status | Method |
|---|---|---|
| Discovery | supported | Cursor Composer headers and bridge registry |
| Send | experimental | Command-file watcher and patched submit command |
| Create | experimental | Cursor Agent/Composer lifecycle with correlation checks |
| Rename | experimental | Native title command plus provider-visible verification |
| MCP reply | supported | Cursor MCP configuration and provider metadata |

## Installer

The Cursor checkbox owns bridge extension installation, MCP configuration, adaptive workbench patching, discovery, preflight, rollback, and commit stages.

The command-file watcher is the normal delivery path after Cursor is running. A Cursor URI wake-up is a fallback and can produce a false extension-not-found warning.

## Evidence

Cursor has produced response-backed AxiOwl replies. The current patch engine and bridge are built around exact session ownership rather than broad UI text matching. Rename remains experimental because Cursor can accept a title command without persisting the requested title.

## Risks

- Cursor workbench code is private and minified;
- patch installation can succeed while runtime activation fails;
- a black window indicates damaged workbench code and requires rollback;
- command acceptance is not provider-visible delivery;
- stale bridge directories can produce misleading extension warnings.

# Cursor Agents

Status: `supported`

See [Provider Support Matrix](../reference/provider-support-matrix.md).

## Surface

Cursor Agent Window / Composer sessions.

## Delivery Method

AxiOwl uses a Cursor bridge extension plus Cursor patch support. The preferred path is:

```text
AxiOwl provider edge
  -> command JSON file
  -> Cursor bridge command watcher
  -> glass.axiowlSubmitToAgent
  -> Cursor agent/composer
```

The Cursor URI wake-up path is fallback only. It should not be the normal path when the bridge watcher is installed and active.

## Installer Action

The installer installs the Cursor bridge extension, configures Cursor MCP, applies the Cursor patch when selected, and runs Cursor discovery.

## Requirements

| Requirement | Needed |
|---|---|
| Patch | Yes. Cursor Glass/workbench submit hook is required. |
| Extension | AxiOwl Cursor bridge extension. |
| MCP | Required for replies. |
| Config | Cursor MCP and bridge registry/config. |

## Test Status

Response-backed Cursor tests have passed.

## Known Risks

- Cursor patching touches private/minified implementation details.
- The required command is `glass.axiowlSubmitToAgent`; when missing, sends must fail loudly.
- URI wake-up can cause false `extension not found` warnings and should remain fallback.
- Cursor must be restarted after certain patch/install changes.
- Black-screen failures can come from bad patch state or corrupted provider runtime state and require forensic log review before further edits.

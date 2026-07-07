# Cursor Agents

Status: `supported`

See [Provider Support Matrix](../reference/provider-support-matrix.md).

## Surface

Cursor Agent Window / Composer sessions.

Plain English version: this is Cursor's agent/composer UI surface, not a separate standalone Cursor CLI.

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

## Why Cursor Needs More Machinery

Cursor does not expose a stable public API for the exact delivery behavior AxiOwl needs. The working path therefore combines:

- a bridge extension running inside Cursor;
- a command-file watcher for normal delivery;
- a fallback URI trigger for waking the bridge;
- a patch-provided submit command;
- detailed logs and result files.

That is not accidental complexity. It is the cost of targeting a private provider surface while still demanding proof and avoiding false success.

## Installer Action

The installer installs the Cursor bridge extension, configures Cursor MCP, applies the Cursor patch when selected, and runs Cursor discovery.

The installer should close Cursor only when selected patch or extension work requires it.

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

## Architecture Rationale

Cursor is intentionally isolated as its own provider feature because a Cursor failure can affect app startup. Its patch, bridge, watcher, cleanup, and rollback behavior should not be mixed with generic installer logic.

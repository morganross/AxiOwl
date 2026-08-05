# Cursor Agent CLI

Cursor Agent CLI is a command-line provider surface recognized by current runtime code. It is separate from Cursor Composer in the desktop editor.

## Capabilities

| Operation | Status |
|---|---|
| Discovery | implemented |
| Send | implemented |
| Create | implemented |
| Rename | unsupported |
| MCP reply | implemented |

## Installer

The primary MSI has no dedicated Cursor Agent CLI checkbox. The Cursor checkbox configures and patches the editor/Composer surface.

## Evidence

The July 12 full test found `agent.cmd` but stopped because the Cursor Agent CLI was not authenticated. No provider session was created and no message was dispatched. That is a prerequisite failure, not successful CLI support on the tested machine.

## Risks

- product authentication is external to the AxiOwl installer;
- editor and CLI sessions require separate discovery and delivery;
- runtime code should not be presented as clean-machine installer coverage.

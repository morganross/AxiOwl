# VS Code Native

VS Code native support addresses sessions through an in-host bridge extension because the useful chat/session APIs live inside VS Code.

## Capabilities

| Operation | Status | Method |
|---|---|---|
| Discovery | supported | Bridge and provider session state |
| Send | experimental | Exact-session bridge command |
| Create | implemented | Native bridge create command |
| Rename | implemented | Native bridge rename and verification |
| MCP reply | supported | VS Code MCP definition and session metadata |

## Installer

The VS Code native checkbox installs the native bridge extension and MCP configuration. VS Code Copilot-backed support is a separate feature with an additional metadata patch.

## Ownership

Multiple VS Code windows can exist. Bridge ownership identifies which window owns a session and avoids broadcasting a command until any window claims it. Command acceptance without native transcript mutation is not delivery proof.

## Evidence

Response-backed native messages have worked. The July 12 full round exposed a bridge queue/ownership failure: the target transcript did not change and no reply returned. The path remains implemented but requires current post-install validation.

## Risks

- stale extension folders;
- wrong-window ownership;
- queued commands without bridge receipt;
- stale workspace paths in newly created provider sessions.

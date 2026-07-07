# AxiOwl Support And Forensic Docs

Use this guide when install, discovery, send, or reply behavior fails.

## First Rule

Separate these events:

| Event | Meaning |
|---|---|
| MSI install succeeded | Selected installer actions completed. |
| `accepted_by_axiowl` | AxiOwl accepted and handed off the request. |
| provider accepted | Provider edge claims delivery was accepted. |
| MCP reply received | End-to-end provider response path worked. |

Do not treat an earlier event as proof of a later event.

## Diagnostic Mindset

Most AxiOwl failures are boundary failures. The job is to find which boundary failed:

1. MSI selected the wrong feature.
2. MSI failed to install/configure/patch.
3. Provider app did not load the integration.
4. Discovery enrolled the wrong session.
5. AxiOwl sent to the wrong target.
6. Provider received but could not reply.
7. MCP tools were missing.
8. MCP reply lacked sender metadata.

This framing prevents circular debugging. Do not keep reinstalling when the failure is stale provider session metadata. Do not keep editing provider code when the MSI installed an old artifact.

## Collect Logs

Collect:

```text
%LOCALAPPDATA%\AxiOwl\logs
%LOCALAPPDATA%\AxiOwl\registry
%LOCALAPPDATA%\AxiOwl\runtime
```

Also collect:

- MSI verbose log;
- VS Code AxiOwl Bridge output channel;
- Cursor AxiOwl Cursor Bridge output channel;
- provider CLI stdout/stderr;
- relevant provider session files when safe;
- exact MSI path and file timestamp;
- `axiowl status` output;
- unique run id used for tests.

## Failed Install

Check:

1. Which checkboxes were selected.
2. Whether the selected providers were actually installed on the machine.
3. Whether the installer closed only selected/needed apps.
4. Whether old legacy bridge folders were removed.
5. Whether payload manifest hash matched installed `axiowl.exe`.
6. Whether helper custom actions failed or were skipped.
7. Whether the installed MSI was the intended new artifact.

Common causes:

- stale extension folder;
- stale provider config;
- selected provider not installed;
- missing elevation for patch path;
- app still running during patch;
- stale MSI artifact installed instead of new build;
- provider checkbox preselected from bad discovery.

## Missing MCP Tools

Check:

1. Provider session was restarted after install.
2. MCP config exists in the provider's expected config location.
3. The AxiOwl executable path in config exists.
4. The provider can start `axiowl mcp-server`.
5. The MCP server receives provider metadata.
6. The provider surface actually supports MCP in that context.

If tools exist in one session but not another, compare provider session/workspace config and startup time.

## Bad Provider Discovery

Check:

1. Registry rows under `%LOCALAPPDATA%\AxiOwl\registry`.
2. Provider session ids.
3. Display names and aliases.
4. `sendable` state.
5. `source`, `last_seen_at`, `last_verified_at`, and `last_error`.

Discovery failure patterns:

- stale old path enrolled as sendable;
- provider workspace folder no longer exists;
- old session name reused;
- provider-specific database/session format changed;
- local discovery skipped because provider was not selected;
- a target provider surface confused with another surface from the same brand.

## Cursor Patch Failures

Check:

1. Cursor feature was selected.
2. Cursor was closed before patching.
3. Cursor extension installed.
4. Cursor bridge registered.
5. Cursor command watcher active.
6. `glass.axiowlSubmitToAgent` exists.
7. URI wake-up is fallback, not primary.
8. Result file was written by the expected bridge id.

Important failure text:

```text
Cursor Glass submit patch is not installed or not visible to the bridge.
```

That means the bridge ran but the required patched command was not available.

Cursor diagnosis should be extra conservative. A bad patch can affect app startup. Read logs before patching again.

## VS Code Patch Failures

Check:

1. VS Code feature was selected.
2. VS Code was closed before patching.
3. Bridge extension installed under the current AxiOwl id.
4. Old legacy extension folders were removed.
5. MCP server definition is visible to VS Code.
6. Native session id maps to the intended target session.
7. The bridge ownership check selected the right window.

## Wrong Paths And Stale Chats

When a provider reports an old cwd or missing workspace folder, do not assume the send path failed. Determine whether:

- provider itself reused stale workspace state;
- AxiOwl installed stale MCP config;
- registry contains a stale row;
- new chat creation inherited old provider defaults;
- old folder path came from provider session metadata.

## Forensic Report Template

Use this structure:

```text
# Incident Title

Date:
Machine:
Installer version:
MSI path:
Run id:

## Expected behavior
## Actual behavior
## Selected installer features
## Logs reviewed
## Timeline
## Evidence
## Root cause
## Non-causes ruled out
## Fix options
## Selected fix
## Regression tests
```

## Support Opinion

AxiOwl support should prefer a small number of high-quality facts over a large amount of speculation. The best support answer says what failed, where it failed, what proof shows that, and what the next correction should verify.

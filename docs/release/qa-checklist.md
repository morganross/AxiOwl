# AxiOwl Release And QA Docs

The canonical release checklist is [Release Validation Checklist](../reference/release-validation-checklist.md). This page expands it for day-to-day release execution.

## Release Inputs

Before building:

- confirm branch is `main`;
- confirm folder is the intended single repo workspace;
- review `git status`;
- confirm untracked files are intentional;
- confirm provider support matrix is current;
- remove stale local release artifacts that could be installed by mistake.

## Build Validation

Required:

```powershell
cmake --build apps\windows-desktop\build --config Release
ctest --test-dir apps\windows-desktop\build -C Release --output-on-failure
apps\windows-desktop\installer\build-windows-msi.ps1
```

The build must produce a fresh MSI and provenance files under `release`.

## Installer Validation

On the dev machine and clean VM:

1. Start from a known provider install state.
2. Run MSI.
3. Verify checkbox defaults.
4. Select intended providers.
5. Finish install.
6. Read install logs.
7. Run `axiowl status`.
8. Run discovery.
9. Confirm registry rows.

## Provider Response Tests

Use one fresh/current target per supported provider surface. Ask for a plain response over AxiOwl MCP and include a unique run id.

Required currently supported surfaces:

- Codex agents;
- Codex CLI;
- VS Code/Copilot;
- VS Code native where available;
- Cursor agents;
- Antigravity agents.

Target surfaces should be tested separately but must not be marked supported until they satisfy the current metadata rule.

## CLI Provider Tests

For CLI providers:

- create or discover a CLI session;
- send through AxiOwl;
- require reply through AxiOwl MCP;
- verify provider-owned sender metadata;
- record auth failures separately from implementation failures.

## Uninstall/Reinstall Validation

Run:

1. install selected providers;
2. test;
3. uninstall;
4. verify AxiOwl-owned cleanup;
5. reinstall;
6. verify selected-only behavior;
7. retest.

The reinstall should not depend on stale extension folders, stale registry rows, or old MSI artifacts.

## Release Decision

Publish only when:

- build passed;
- MSI provenance passed;
- clean VM install passed;
- provider response tests passed for supported providers;
- uninstall/reinstall passed;
- docs match actual status;
- success-method report exists for new working methods.

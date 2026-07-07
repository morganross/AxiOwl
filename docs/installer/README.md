# AxiOwl Installer Docs

The Windows MSI installs the AxiOwl local runtime and selected provider integrations. Each provider checkbox should behave like a separate feature even though everything is packaged in one MSI.

The source of truth is [Installer Behavior Matrix](../reference/installer-behavior-matrix.md).

## Plain English Summary

The installer should do three things well:

1. Install the AxiOwl runtime.
2. Install only the provider integrations the user selected or discovery safely preselected.
3. Leave enough logs and proof to explain what happened.

It should not close or change provider apps just because they exist. It should not uninstall Codex because Cursor is being installed. It should not precheck Claude merely because AxiOwl has Claude code. It should be provider-aware.

## MSI Checkboxes

Provider checkboxes should be selected from discovery:

- provider app or CLI detected;
- required install path exists;
- provider-specific support gate allows the feature;
- feature is not remote-only or unsupported by default.

Unchecked provider features should not be installed, patched, closed, restarted, or uninstalled as collateral damage.

## What Gets Installed

The core install places AxiOwl under `%LOCALAPPDATA%\AxiOwl`, including:

- `bin\axiowl.exe`;
- manifest/provenance file;
- runtime directories;
- registry directories;
- logs;
- selected provider integration files.

Provider features may install:

- MCP config;
- provider bridge extension;
- provider patch;
- CLI config;
- discovery records;
- AxiOwl-owned wrapper/config files.

## What Gets Patched

Patches are provider-specific and selected-feature-specific.

VS Code and Cursor integrations can require patching private provider implementation details. Those patches are fragile by nature and must be validated after install.

CLI providers that are still `target` need future provider-owned metadata patches before they count as fully supported.

The important rule is that a patch must have a reason and a proof. The reason is the provider does not expose a stable public API for the needed behavior. The proof is post-install behavior, not just “patch code ran.”

## What Gets Configured

Depending on selected features, the installer configures:

- AxiOwl MCP server entries;
- VS Code bridge extension and MCP server definition;
- Cursor bridge extension and MCP config;
- Codex plugin/skill integration;
- Antigravity/Gemini MCP config;
- Claude/OpenCode/Copilot CLI MCP config where selected.

## What Gets Removed

The installer may remove stale AxiOwl-owned files, including:

- old legacy bridge extension folders;
- stale AxiOwl bridge registry/config entries;
- stale AxiOwl-owned runtime files;
- obsolete AxiOwl-owned install artifacts.

It should not remove unrelated provider files, user chats, user auth tokens, unrelated extensions, or unrelated settings.

## App Shutdown Behavior

The installer should close provider apps only when a selected install action requires it. Patching or replacing a loaded extension may require closing that provider app. Discovery alone does not.

This is a major safety boundary. Closing apps by discovery instead of selected feature creates surprising user interruption and makes unchecked boxes meaningless.

## Logs

Read these first during install diagnosis:

```text
%LOCALAPPDATA%\AxiOwl\logs
%LOCALAPPDATA%\AxiOwl\registry
%LOCALAPPDATA%\AxiOwl\runtime
```

For MSI-level diagnosis, run or collect an MSI verbose log:

```powershell
msiexec /i path\to\axiowl-activation-windows-installer.msi /l*v install.log
```

## Common Installer Problems

| Symptom | Meaning |
|---|---|
| Checkbox preselected for missing provider | Discovery/default-selection bug. |
| Provider app closed while unchecked | Feature isolation bug. |
| `extension not found` warning | Stale provider extension id/path or URI wake-up fallback behavior. |
| Install succeeds but provider cannot reply | Install success is not message-path proof. Run provider send/receive tests. |
| Old folder appears in new chat | Stale provider workspace/session state, stale config, or provider default behavior. Diagnose before assuming AxiOwl delivery failed. |

## Success Criteria

The installer is successful when selected install actions complete and logs/provenance prove what was installed. Provider support is successful later, when each supported provider surface replies over AxiOwl MCP.

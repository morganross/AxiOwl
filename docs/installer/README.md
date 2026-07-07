# AxiOwl Installer Docs

The Windows MSI installs the AxiOwl local runtime and selected provider integrations. Each provider checkbox should behave like a separate feature even though everything is packaged in one MSI.

The source of truth is [Installer Behavior Matrix](../reference/installer-behavior-matrix.md).

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

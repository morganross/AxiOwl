# Installer Behavior Matrix

This page is the source of truth for Windows MSI behavior. The installer should be robust, adaptive, and provider-aware, but it should not be mysterious. A user should be able to tell what each checkbox does and what it will not touch.

## Design Goal

The MSI should feel like one installer to the user and like separate feature installers internally. That is the key design choice.

Plain English version: one MSI, many isolated provider features. Selecting Cursor should not change Codex. Selecting VS Code should not uninstall Claude CLI config. Leaving a provider unchecked should mean AxiOwl leaves that provider alone unless a core cleanup step is explicitly safe and AxiOwl-owned.

## Installer Principles

1. Provider checkboxes default from discovery, not assumptions.
2. A selected provider feature installs only what that provider surface needs.
3. An unchecked provider feature is not installed, patched, closed, restarted, or uninstalled.
4. Selected provider apps are closed only when the selected action needs exclusive file access.
5. The installer fails loudly when a selected feature cannot be installed safely.
6. Cleanup removes AxiOwl-owned stale files, not unrelated provider data.
7. Cursor URI wake-up is fallback only when the command-file watcher path is unavailable.
8. Remote features can exist but should be unchecked by default.
9. Logs should explain each install phase in plain terms.

## Core Install

| Area | Action | Rationale |
|---|---|---|
| Local runtime | Install `axiowl.exe` under `%LOCALAPPDATA%\AxiOwl\bin`. | Keeps the runtime user-local and avoids unnecessary machine-wide mutation. |
| Manifest | Install `%LOCALAPPDATA%\AxiOwl\manifest.json` and verify hashes/provenance. | Prevents stale MSI artifacts from masquerading as new builds. |
| PATH | Add AxiOwl bin directory when selected/required. | Lets users and provider configs call `axiowl`. |
| Runtime cleanup | Stop existing AxiOwl runtime before replacing the binary. | Avoids locked files and half-updated runtime state. |
| Finalization | Run selected discovery and write status/proof logs. | A successful install should leave evidence, not just exit code 0. |

## Provider Feature Matrix

| Provider feature | Checkbox behavior | Installs | Patches | Configures | Removes / cleans | Intentionally does not touch |
|---|---|---|---|---|---|---|
| Codex agents | Precheck only when Codex is discovered or user selects it. | Codex plugin/skill support. | No editor binary patch expected. | Codex MCP/plugin config. | Stale AxiOwl-owned Codex config. | Non-AxiOwl Codex user config and unrelated sessions. |
| Codex CLI | Precheck only when Codex CLI is discovered or user selects it. | CLI integration/config support. | Future metadata patch if required. | MCP config. | Stale AxiOwl-owned CLI config. | Provider auth and unrelated CLI config. |
| VS Code / Copilot VSIX | Precheck only when VS Code is discovered or user selects it. | AxiOwl VS Code bridge extension and VSIX payload. | VS Code native/Copilot patch when selected. | VS Code MCP server definition. | Legacy AxiOwl bridge folders and stale AxiOwl-owned extension registry entries. | Non-AxiOwl extensions, user settings, nonselected provider apps. |
| Cursor agents | Precheck only when Cursor is discovered or user selects it. | AxiOwl Cursor bridge extension. | Cursor Glass/workbench patch when selected. | Cursor MCP config and bridge registry. | Legacy AxiOwl Cursor folders and stale bridge artifacts. | Cursor user chats, unrelated extensions, provider auth. |
| Antigravity agents | Precheck only when Antigravity/Gemini state is discovered or user selects it. | MCP integration. | No editor patch expected. | Antigravity/Gemini MCP config. | Stale AxiOwl-owned MCP entries. | Non-AxiOwl provider config. |
| Antigravity CLI | Target; precheck only when CLI discovered and support gate allows it. | CLI MCP config. | Future CLI metadata patch. | CLI session config. | Stale AxiOwl-owned CLI config. | Auth tokens and unrelated CLI files. |
| Claude Code CLI | Target; precheck only when Claude CLI is discovered and support gate allows it. | Claude MCP config. | Future CLI metadata patch. | Per-session or provider MCP config. | Stale AxiOwl-owned config. | Claude auth, user projects, session history. |
| OpenCode CLI | Target; precheck only when OpenCode CLI is discovered and support gate allows it. | OpenCode MCP config. | Future CLI metadata patch. | OpenCode config directory / MCP config. | Stale AxiOwl-owned config. | OpenCode auth and unrelated config. |
| Copilot CLI | Target; precheck only when Copilot CLI is discovered and support gate allows it. | Copilot CLI MCP config. | Future CLI metadata patch. | Copilot MCP config. | Stale AxiOwl-owned config. | GitHub/Copilot auth tokens. |
| Remote | Unchecked by default. | Remote config only when explicitly selected. | None for local install. | Remote node config. | Stale AxiOwl-owned remote config. | Local provider repair should not use remote fallback. |

## Provider Discovery And Checkbox Defaults

Discovery should determine defaults. The installer should not precheck Claude because Claude support exists in code; it should precheck Claude only when the machine has a usable Claude Code CLI install and the feature is eligible. The same applies to all providers.

Discovery is not proof of support. It only answers “does this provider appear present?” Release tests still need send/receive proof.

## Closing And Restarting Provider Apps

Provider apps should be closed only when the selected feature requires it. Reasons include locked extension folders, patching files under the provider installation, or replacing files the provider has loaded.

Provider apps should not be closed merely because they were discovered. Discovery alone is not a license to interrupt a user session.

## Cleanup Boundaries

Cleanup should be aggressive inside AxiOwl-owned paths and conservative elsewhere.

Safe cleanup examples:

- stale AxiOwl bridge extension folders;
- stale AxiOwl runtime temp files;
- stale AxiOwl-owned MCP entries;
- stale AxiOwl bridge command/result files;
- old AxiOwl product-name artifacts.

Unsafe cleanup examples:

- provider auth tokens;
- user chats;
- unrelated provider extensions;
- unrelated workspace files;
- global provider settings not created by AxiOwl.

## Logs

Common log/proof locations:

| Location | Purpose |
|---|---|
| `%LOCALAPPDATA%\AxiOwl\logs` | Runtime, installer helper, delivery, and discovery logs. |
| `%LOCALAPPDATA%\AxiOwl\registry` | Agent registry and bridge registries. |
| `%LOCALAPPDATA%\AxiOwl\runtime` | Runtime request/result files and delivery worker handoff. |
| MSI log file selected by installer or `msiexec /l*v` | Windows Installer action log. |
| Provider extension output channels | VS Code/Cursor bridge activation and command logs. |

## Success Definition

A successful MSI install proves selected install actions completed. It does not prove every provider can send and reply. Provider support requires post-install discovery and response-backed provider validation.

That distinction is intentional. The installer can install a bridge, but only a provider reply proves the bridge is useful in the current session.

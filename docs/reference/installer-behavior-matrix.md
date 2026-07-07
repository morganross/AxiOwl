# Installer Behavior Matrix

This is the source of truth for what the Windows MSI should install, patch, configure, remove, and avoid.

## Installer Principles

1. The MSI installs AxiOwl once, but each provider feature behaves like a separate install unit.
2. Provider checkboxes should default from discovery, not from stale assumptions.
3. Unchecked provider features should not be installed, patched, closed, restarted, or uninstalled as collateral damage.
4. The installer should fail loudly when a selected provider feature cannot be installed safely.
5. The installer should preserve robust uninstall/reinstall behavior without deleting unrelated user data.
6. Cursor URI wake-up is fallback only when the command-file watcher path is unavailable.
7. Remote features can remain present but should not be checked by default.

## Core Install

| Area | Action |
|---|---|
| Local runtime | Install `axiowl.exe` under `%LOCALAPPDATA%\AxiOwl\bin`. |
| Manifest | Install `%LOCALAPPDATA%\AxiOwl\manifest.json` and verify payload hashes/provenance. |
| PATH | Add AxiOwl bin directory where selected/required. |
| Runtime cleanup | Stop existing AxiOwl runtime before replacing the binary. |
| Finalization | Run local discovery and write status/proof logs. |

## Provider Feature Matrix

| Provider feature | Checkbox behavior | Installs | Patches | Configures | Removes / cleans | Intentionally does not touch |
|---|---|---|---|---|---|---|
| Codex agents | Precheck only when Codex is discovered or user selects it | Codex plugin/skill support | No editor binary patch expected | Codex MCP/plugin config | Stale AxiOwl-owned Codex config only | Non-AxiOwl Codex user config and unrelated sessions |
| Codex CLI | Precheck only when Codex CLI is discovered or user selects it | CLI integration/config support | Future metadata patch if required | MCP config | Stale AxiOwl-owned CLI config | Provider auth and unrelated CLI config |
| VS Code / Copilot VSIX | Precheck only when VS Code is discovered or user selects it | AxiOwl VS Code bridge extension and VSIX payload | VS Code native/Copilot patch when selected | VS Code MCP server definition | Legacy AxiOwl bridge folders and stale AxiOwl-owned extension registry entries | Non-AxiOwl extensions, user settings, nonselected provider apps |
| Cursor agents | Precheck only when Cursor is discovered or user selects it | AxiOwl Cursor bridge extension | Cursor Glass/workbench patch when selected | Cursor MCP config and bridge registry | Legacy AxiOwl Cursor folders and stale bridge artifacts | Cursor user chats, unrelated extensions, provider auth |
| Antigravity agents | Precheck only when Antigravity/Gemini state is discovered or user selects it | MCP integration | No editor patch expected | Antigravity/Gemini MCP config | Stale AxiOwl-owned MCP entries | Non-AxiOwl provider config |
| Antigravity CLI | Target; precheck only when CLI discovered and support gate allows it | CLI MCP config | Future CLI metadata patch | CLI session config | Stale AxiOwl-owned CLI config | Auth tokens and unrelated CLI files |
| Claude Code CLI | Target; precheck only when Claude CLI is discovered and support gate allows it | Claude MCP config | Future CLI metadata patch | Per-session or provider MCP config | Stale AxiOwl-owned config | Claude auth, user projects, session history |
| OpenCode CLI | Target; precheck only when OpenCode CLI is discovered and support gate allows it | OpenCode MCP config | Future CLI metadata patch | OpenCode config directory / MCP config | Stale AxiOwl-owned config | OpenCode auth and unrelated config |
| Copilot CLI | Target; precheck only when Copilot CLI is discovered and support gate allows it | Copilot CLI MCP config | Future CLI metadata patch | Copilot MCP config | Stale AxiOwl-owned config | GitHub/Copilot auth tokens |
| Remote | Unchecked by default | Remote config only when explicitly selected | None for local install | Remote node config | Stale AxiOwl-owned remote config | Local provider repair should not use remote fallback |

## Logs

Common log/proof locations:

| Location | Purpose |
|---|---|
| `%LOCALAPPDATA%\AxiOwl\logs` | Runtime, installer helper, delivery, and discovery logs. |
| `%LOCALAPPDATA%\AxiOwl\registry` | Agent registry and bridge registries. |
| `%LOCALAPPDATA%\AxiOwl\runtime` | Runtime request/result files and delivery worker handoff. |
| MSI log file selected by installer or `msiexec /l*v` | Windows Installer action log. |
| Provider extension output channels | VS Code/Cursor bridge activation and command logs. |

## What A Successful Install Proves

A successful MSI install proves only that selected install actions completed. It does not prove all provider message paths work. Provider support requires post-install discovery and send/receive validation.

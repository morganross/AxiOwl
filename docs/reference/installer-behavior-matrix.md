# Installer Behavior Matrix

This page is the public source of truth for Windows MSI behavior. The installer should be adaptive and provider-aware without being mysterious. A user should be able to tell what each checkbox does and what it will not touch.

## Design goal

The MSI should feel like one installer to the user and like separate feature installers internally. One MSI can contain many isolated provider features. Selecting Cursor should not change Codex. Selecting VS Code should not uninstall a Claude CLI configuration. Leaving a provider unchecked should mean AxiOwl leaves that provider alone, except for safe cleanup of AxiOwl-owned state.

## Installer principles

1. Provider checkboxes default from discovery and explicit user choice.
2. A selected provider feature installs only what that surface needs.
3. An unchecked provider feature is not installed, patched, closed, restarted, or uninstalled.
4. Selected provider apps are closed only when the selected action needs exclusive file access.
5. A selected feature reports an unsafe or incompatible action instead of pretending it worked.
6. Cleanup removes AxiOwl-owned stale files, not unrelated provider data.
7. Cursor command-file delivery is primary when its watcher is available; URI wake-up is fallback only.
8. Remote features can exist but should be unchecked by default.
9. Logs explain each install phase in plain terms.

## Core install

| Area | Action | Rationale |
|---|---|---|
| Local runtime | Install the AxiOwl runtime in the selected user or machine scope. | Keeps ownership clear and avoids unnecessary system-wide mutation. |
| Provenance | Record product version and artifact provenance. | Helps distinguish a fresh installer from a stale MSI. |
| Runtime state | Create only AxiOwl-owned runtime, registry, and log state. | Makes cleanup and diagnosis predictable. |
| Finalization | Run selected discovery and write status evidence. | A successful install should leave an explanation, not just an exit code. |

## Provider feature matrix

| Provider feature | Checkbox behavior | Installs | Patches | Configures | Cleans | Does not touch |
|---|---|---|---|---|---|---|
| Codex agents | Precheck when Codex is discovered or the user selects it. | Agent integration. | No editor binary patch expected. | MCP and plugin support. | AxiOwl-owned stale config. | Provider auth and unrelated sessions. |
| Codex CLI | Precheck when Codex CLI is discovered or selected. | CLI integration. | Only a future provider-specific metadata patch if required. | MCP support. | AxiOwl-owned stale CLI config. | Provider auth and unrelated CLI config. |
| VS Code / Copilot VSIX | Precheck when VS Code is discovered or selected. | AxiOwl VS Code bridge. | Native integration patch only when selected. | VS Code MCP definition. | Old AxiOwl bridge entries. | Non-AxiOwl extensions and settings. |
| Cursor agents | Precheck when Cursor is discovered or selected. | Cursor bridge. | Cursor editor patch only when selected. | MCP config and bridge registry. | Old AxiOwl Cursor artifacts. | User chats, auth, and unrelated extensions. |
| Antigravity agents | Precheck when Antigravity state is discovered or selected. | MCP integration. | No editor patch expected. | Provider MCP config. | AxiOwl-owned stale entries. | Non-AxiOwl provider config. |
| Antigravity CLI | Target; precheck only when discovered and eligible. | CLI MCP configuration. | Future metadata integration. | CLI session configuration. | AxiOwl-owned stale entries. | Auth tokens and unrelated CLI files. |
| Claude Code CLI | Target; precheck only when discovered and eligible. | CLI MCP configuration. | Future metadata integration. | Provider MCP configuration. | AxiOwl-owned stale entries. | Auth, projects, and session history. |
| OpenCode CLI | Target; precheck only when discovered and eligible. | CLI MCP configuration. | Future metadata integration. | Provider MCP configuration. | AxiOwl-owned stale entries. | Auth and unrelated configuration. |
| Copilot CLI | Target; precheck only when discovered and eligible. | CLI MCP configuration. | Future metadata integration. | Provider MCP configuration. | AxiOwl-owned stale entries. | Account credentials and unrelated files. |
| Remote | Unchecked by default. | Remote config only when explicitly selected. | None for local install. | Remote node settings. | AxiOwl-owned remote state. | Local provider repair and unrelated remote data. |

## Discovery and checkbox defaults

Discovery answers whether a provider appears present and usable. It does not prove support. The installer should not preselect a provider because AxiOwl contains code for it. It should preselect only when discovery finds the provider and the selected feature is eligible.

## Closing and restarting apps

Provider apps should be closed only when the selected feature needs exclusive access. They should not be closed merely because discovery found them. If a restart is required, the installer should identify which selected feature caused it.

## Cleanup boundaries

Cleanup should be aggressive inside AxiOwl-owned paths and conservative elsewhere.

Safe cleanup includes stale AxiOwl bridge artifacts, runtime temporary files, MCP entries created by AxiOwl, and old AxiOwl product-name artifacts. Unsafe cleanup includes provider auth tokens, user chats, unrelated extensions, workspace files, and global settings not created by AxiOwl.

## Security boundary

The MSI installs integration components; it does not become the provider's credential manager or the customer's device authority. Device trust, encryption, authorization, and replay protection remain runtime concerns. See [Security And Trust](../security/README.md).

## Success definition

A successful MSI install proves selected install actions completed. It does not prove every provider can send and reply. Provider support requires a current response-backed path with provider-owned identity evidence.

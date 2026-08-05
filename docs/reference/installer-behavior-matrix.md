# Installer Behavior Matrix

This is the source of truth for current Windows MSI feature ownership. It describes checked-in behavior, not the ideal future installer.

## Design Contract

The MSI is one package with isolated provider features. Selecting one provider authorizes only that provider's install, patch, process, configuration, and cleanup scopes.

An unchecked provider must not be installed, patched, closed, restarted, or removed merely because discovery found it.

## Core Runtime

| Component | Ownership |
|---|---|
| `axiowl.exe` | Always-installed local CLI, MCP, registry, provider, A2A-client, and diagnostic runtime. |
| `axiowl-mailbox.exe` | Always-installed mailbox GUI and local endpoint. |
| installer helper executables | MSI custom-action implementation and silent helper boundary. |
| `axiowl-tester.exe` | Provider test interface packaged with the primary installer. |

The core runtime can act as an outbound A2A client without installing the optional machine service.

## Current Provider Checkboxes

| Checkbox | Current feature ownership | Discovery default | Process/config scope |
|---|---|---|---|
| Codex | Codex plugin, MCP configuration, and skill | Checked only when Codex is detected | Codex plugin/MCP/marketplace only |
| VS Code Copilot-backed | Bridge extension, MCP configuration, metadata patch | Checked only when the surface is detected | VS Code only |
| VS Code native | Bridge extension and MCP configuration | Checked only when VS Code native is detected | VS Code only |
| Antigravity | Antigravity/Gemini MCP configuration | Checked only when detected | Antigravity MCP config |
| Claude | Claude Code CLI MCP configuration | Checked only when Claude is detected | Claude MCP config |
| Copilot CLI | Copilot CLI metadata patch | Checked only when Copilot CLI is detected | Copilot CLI patch state |
| Cursor | Bridge extension, MCP configuration, submit patch, and discovery | Checked only when Cursor is detected | Cursor only, with rollback stages |
| Remote | Enroll, deploy, and discovery modules | Unchecked by default | Explicit remote configuration and nodes |

## Runtime Providers Without Dedicated Checkboxes

Current runtime provider edges also include Codex CLI, Antigravity CLI, OpenCode CLI, and Cursor Agent CLI. They do not currently have equivalent dedicated provider contracts in the primary MSI.

This distinction matters on another computer: source-level support does not guarantee the installer provisions the CLI, authentication, MCP configuration, or native executable required by that provider.

## Optional A2A Feature

The `A2A networking` checkbox is separate from provider discovery and is unchecked by default.

When selected, it owns:

- `axiowl-api-service.exe`;
- the automatic `AxiOwlApi` Windows service;
- `axiowl-relay.exe`;
- machine service configuration;
- the `HKLM\Software\AxiOwl\Features\A2A` feature marker;
- service and relay removal during feature deselection or uninstall.

Repair and upgrade preserve an already installed A2A feature unless it is explicitly deselected.

### Current User-Broker Gap

The API service starts with `--user-broker` so authenticated protected A2A routes can reach registry and provider state owned by the active interactive user. Current CMake contains `axiowl-user-broker.exe`, but the primary MSI build target list, artifact manifest, and WiX source do not package or start it.

Therefore:

- public Agent Card routes can be hosted by the service;
- direct user-run `axiowl a2a serve` remains available;
- protected machine-service requests requiring local provider delivery return `503` without a running broker;
- installing the A2A checkbox does not yet prove end-to-end desktop-agent exposure through the service.

## XMPP Installer

The XMPP branch has a separate MSI, product identity, upgrade identity, install directory, build script, and safety checker. It is not currently a checkbox in the primary MSI and must not be described as installed by the current A2A feature.

## Discovery And Defaults

Discovery answers whether a provider appears installed and eligible. It does not prove the provider can receive or reply.

Default checkbox rules:

1. detected local provider: eligible to be prechecked;
2. undetected provider: unchecked unless the user explicitly selects it;
3. remote features: unchecked by default;
4. A2A networking: unchecked by default;
5. repair/upgrade: preserve the previous explicit A2A selection.

## Closing And Restarting Apps

The installer closes provider applications only within selected feature scopes and only when file replacement or patching requires it. Discovery alone must not close an app.

Current explicit process scopes include VS Code-only, Cursor-only, Codex-only, the API service, and the relay executable.

## Cleanup And Uninstall

Cleanup is aggressive inside AxiOwl-owned paths and conservative around provider-owned data.

The installer may remove:

- stale AxiOwl bridge extension folders;
- AxiOwl-created MCP entries;
- AxiOwl patch backups and command files;
- AxiOwl services, relay payloads, feature markers, and machine config owned by a removed feature.

It must not remove:

- provider authentication tokens;
- user chats or session history;
- unrelated extensions;
- unrelated provider configuration;
- another unchecked AxiOwl provider feature.

## Logs And Proof

| Evidence | Purpose |
|---|---|
| MSI verbose log | Feature selection, component action, custom-action sequencing, and Windows Installer failures. |
| `%LOCALAPPDATA%\AxiOwl\logs` | User-context helper, discovery, bridge, and provider logs. |
| `%PROGRAMDATA%\AxiOwl\logs` | Elevated and machine-service install logs. |
| build preflight JSON | Git head, worktree state, payload hashes, MSI identity, and safety-check results. |
| provider-native logs | Proof that install output was usable by the provider. |

An artifact marked `artifact_verified` proves build-time payload and MSI checks. It does not prove a clean-machine install, provider roundtrip, or machine-service user-broker path.

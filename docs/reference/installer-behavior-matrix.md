# Installer Behavior Matrix

This is the public source of truth for the current Windows MSI feature graph. It describes current checked-in WiX and provider-package ownership; a signed MSI produced earlier can contain an older graph.

## Core Features

| Feature | Installed content | Default |
|---|---|---|
| Required payload | Core runtime, secure shared library, installer helper, manifest, logging and cleanup ownership | Always |
| Mailbox GUI | Mailbox, provider test UI, launch helper, Start menu shortcut | Normal install selection |
| Local CLI | `axiowl.exe` command line and MCP runtime | Always |
| PATH | Machine PATH entry for the installed CLI | Always |
| Local discovery | Provider and session discovery pass | Always |

## Provider Features

Each row owns one isolated provider package and only the provider-specific assets declared by that package.

| Provider feature | What it installs or configures | Normal preselection |
|---|---|---|
| Codex agents | Codex plugin, MCP configuration, skill, worker | Codex detected |
| Codex Remote | Isolated Codex Remote provider worker/config | Eligible Remote surface detected or explicitly selected |
| Codex CLI | CLI MCP and session metadata support | Codex CLI detected |
| VS Code Copilot-backed | VSIX bridge, MCP config, metadata patch, worker | VS Code/Copilot surface detected |
| Antigravity agents | Desktop MCP config and worker | Antigravity detected |
| Antigravity CLI | CLI MCP/config, metadata support, worker | AG CLI detected |
| Claude Code CLI | User MCP config and worker | Claude Code CLI detected |
| Copilot CLI | Session-metadata patch and worker | Copilot CLI detected |
| Cursor Agent CLI | Session-metadata patch and worker | Cursor Agent CLI detected |
| OpenCode CLI | MCP/native metadata config and worker | OpenCode detected |
| Cursor agents | Bridge VSIX, MCP config, adaptive integration, worker | Cursor detected |

The installer does not install the provider application, create a provider account, or copy provider authentication.

## Network Features

| Feature | Ownership | Background behavior |
|---|---|---|
| A2A Server | Machine-scoped `AxiOwlApi` service and tray integration | Listens only when selected and configured |
| A2A Client | Interactive `axiowl-user-broker` and tray integration | Runs in the signed-in user's session when selected |
| XMPP Client | Per-user XMPP client, CA bundle, tray/setup integration | Maintains a connection only after user-specific onboarding and selection |
| XMPP Server | Native Windows XMPP service and administration tool | Optional self-host service |

These are separate checkboxes and ownership boundaries. A2A does not install XMPP; XMPP does not install A2A.

## Selection Contract

1. Discovery may recommend a provider feature.
2. The user's checkbox selection authorizes the change.
3. An unchecked provider is not patched, configured, closed, restarted, or removed merely because it was discovered.
4. Network features are explicit selections rather than consequences of local provider discovery.
5. A selected feature may close only the processes in its declared scope when replacement requires it.

## Lifecycle Contract

The supported product vocabulary is:

- **Uninstall**: remove AxiOwl-owned installed state for the selected product.
- **Uninstall-install**: complete Uninstall followed by installation of the new artifact.

The public contract does not promise a separate repair, in-place upgrade, downgrade, rollback, or modify mode. Provider packages may internally expose maintenance operations, but that does not create another whole-product lifecycle.

## What Removal Preserves

Uninstall may remove AxiOwl binaries, services, feature markers, MCP entries, bridge extensions, patch journals/backups, and provider-package state owned by AxiOwl. It must preserve provider chats, provider accounts, authentication tokens, unrelated extensions, unrelated settings, and customer files.

Customer-controlled identity or server data requires its own explicit export/retention contract. It must not survive accidentally because an installer forgot to remove AxiOwl-owned state.

## Evidence Boundaries

| Evidence | What it proves |
|---|---|
| Generated WiX | Current source feature graph |
| Provider package manifest | Declared package contents and operations |
| Signed MSI | Integrity and publisher identity of that exact installer |
| MSI exit status and verbose log | Installation result on that machine |
| Provider response | The selected provider path worked after installation |

A generated WiX file newer than a signed MSI can describe behavior not yet present in that signed MSI. Always identify the exact artifact under investigation.

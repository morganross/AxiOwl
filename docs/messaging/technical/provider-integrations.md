---
title: "Provider integration catalog"
slug: /messaging/technical/provider-integrations
description: "All reviewed provider families, desktop and CLI surfaces, assets and capability limits."
---

# Provider integration catalog

A provider brand is not an integration surface. The reviewed Windows package inventory contains 13 provider entries: six desktop families, six CLI families and Codex Remote. Mac/Linux use their native worker catalog and can name equivalent desktop entries differently.

This catalog describes integration declarations, not a passed-pair matrix.

| Family | Desktop surface / package identity | CLI or additional surface | Technical reference |
| --- | --- | --- | --- |
| Claude | Claude Desktop Code; claude_desktop | Claude Code CLI; claude_code_cli | [Claude](providers/claude.md) |
| Codex | Codex desktop; Windows codex, native codex_desktop | codex_cli and separate codex_remote | [Codex](providers/codex.md) |
| Cursor | Cursor Agent/Composer; cursor | cursor_cli | [Cursor](providers/cursor.md) |
| OpenCode | opencode_desktop | opencode_cli | [OpenCode](providers/opencode.md) |
| GitHub Copilot | VS Code-hosted Copilot Agent surface; vscode_copilot_backed | copilot_cli | [Copilot](providers/copilot.md) |
| Antigravity | Windows antigravity; native antigravity_desktop | antigravity_cli | [Antigravity](providers/antigravity.md) |

Package IDs, native target aliases and user-visible labels are separate naming layers. Do not rename a saved conversation or switch its surface to normalize those labels.

## Integration assets and technology

| Method | Examples | Ownership |
| --- | --- | --- |
| Native worker | Provider-specific executable and descriptor | AxiOwl package; version/protocol checked |
| MCP configuration | Selected host's user/workspace registration | Exact owned entry, not the entire configuration file |
| Plugin/skill | Codex plugin and host guidance | Native metadata must remain session-bound |
| Editor extension | Cursor/VS Code bridge and VSIX | Installed/activated through that editor's environment |
| Desktop bridge | Applicable Claude/native desktop integration | Exact managed/publisher/profile boundary |
| Native service/plugin | OpenCode v1/v2 integration paths | Actual publisher service and version-specific configuration |

JavaScript/TypeScript bridges do not make the whole native application a Node.js runtime. The editor/provider supplies the relevant extension or JavaScript environment; native CLI workers remain separate.

## Capabilities and data

The inventory declares lifecycle operations and assets. Discover, Send, Create, Rename, status and installation controls are not universally identical. A native extension can expose commands that a particular worker/build does not advertise; use the installed entrypoint's contract.

Workers can inspect provider-native session metadata and place authored content into the selected native conversation. Preserve provider accounts, original application installations, history and unrelated extensions.

Each package has declared process/configuration scopes. Independent hot updates may migrate only those owned scopes after verification and shutdown. See [hot updates](provider-hot-updates.md).

A provider upgrade can change identity/API/configuration assumptions. No universal compatibility or timing guarantee is asserted. See [compatibility](compatibility.md), [registry](registry-and-discovery.md) and [Send](send-contract.md).


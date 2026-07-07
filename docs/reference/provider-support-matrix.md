# Provider Support Matrix

This is the source of truth for provider/surface status. Provider pages in `docs/providers` should link back here and not redefine status independently.

## Status Terms

| Status | Meaning |
|---|---|
| `supported` | Current code has a provider edge and has response-backed proof or active working test evidence. |
| `target` | Intended support exists or is planned, but the current implementation has not met the current test bar. |
| `experimental` | Current code path exists, but it depends on fragile private provider behavior or patch-sensitive internals. |
| `unsupported` | No current supported implementation. |
| `removed` | Explicitly removed from current scope. |

## Current Matrix

| Provider surface | Status | Delivery method | Installer action | Patch/extension/MCP/config required | Current test status | Known risks |
|---|---|---|---|---|---|---|
| `codex:agents` | supported | Codex desktop/local app session delivery plus AxiOwl MCP reply path | Install Codex plugin/skill and MCP integration | MCP/plugin config | Response-backed tests have passed | Existing Codex session can have stale MCP transport until restarted. |
| `codex:cli` | supported | Codex CLI/local Codex thread operations | Install MCP config/plugin support where applicable | MCP metadata required | Response-backed proof exists: `AXIOWL_CODEX_CLI_REPLY_OK` | Must preserve provider-owned session metadata. |
| `vscode:agents` | supported | VS Code native chat/session commands through AxiOwl bridge extension | Install VS Code bridge extension, MCP config, patch where selected | VSIX extension, MCP server definition, native patch logic | Response-backed VS Code tests have passed | Stale extension folders and old workspace paths can confuse new sessions. |
| `copilot:vsix extension` | supported | VS Code Copilot-backed MCP through VS Code bridge | Install VS Code bridge extension and MCP server definition | VSIX extension and MCP definition | Response-backed Copilot-in-VS-Code tests have passed | Requires VS Code host MCP API and a valid Copilot-capable session. |
| `cursor:agents` | supported | Cursor bridge command files, watcher, URI fallback, and Glass submit patch | Install Cursor bridge extension, MCP config, Cursor patch, discovery | VSIX-like extension, MCP config, Cursor private patch | Response-backed Cursor tests have passed | Patch-sensitive. Cursor private internals can change. URI wake-up can show false extension warnings and should remain fallback. |
| `antigravity:agents` | supported | Antigravity provider edge and MCP reply path | Install Antigravity/Gemini MCP config | MCP config | Response-backed tests have passed | Provider app/session state must expose usable sender metadata. |
| `antigravity:cli` | target | AGY CLI conversation resume | Install CLI MCP config and future metadata patch | CLI config plus provider metadata patch | Historical response-backed proof exists, but current bar requires metadata patch proof | Quota/auth and metadata ownership can block final support. |
| `claude-code:cli` | target | Claude Code CLI documented print/resume flow | Install Claude MCP config and future metadata patch | CLI MCP config plus provider metadata patch | Historical response-backed proof exists, but current bar requires metadata patch proof | Claude sessions need valid cwd and JSONL session state. |
| `opencode:cli` | target | `opencode run --session` with generated config | Install OpenCode MCP config and future metadata patch | CLI config plus provider metadata patch | Historical response-backed proof exists, but current bar requires metadata patch proof | Needs provider-owned metadata, not environment-only identity. |
| `copilot:cli` | target | Copilot CLI resume/create path | Install Copilot CLI MCP config and future metadata patch | CLI config plus provider metadata patch | Code support exists; auth and metadata patch proof outstanding | Copilot CLI auth differs from GitHub classic token auth. |
| `cursor:cli` | unsupported | No accepted current provider surface | None by default | N/A | Removed from current matrix unless a real Cursor CLI product/surface is confirmed | Do not confuse Cursor editor/agent window with a separate CLI provider. |
| `remote` | unsupported | Explicitly out of scope for local-provider remediation builds | Installer may retain remote features unchecked where present | Remote node contract required | Not part of local provider support | Must not be used as fallback for local provider failures. |

## Support Bar

A provider is not supported merely because AxiOwl can write a config file or start a process. The support bar is:

1. Provider/session discovery works.
2. Installer installs only the required integration pieces.
3. AxiOwl can send to a named provider session.
4. The provider receives the message.
5. The provider replies through AxiOwl MCP.
6. The reply carries correct provider-owned sender identity.

For CLI providers, metadata must come from real MCP metadata or a provider patch. Injected `AXIOWL_MCP_SESSION_ID` and similar environment identity is not considered final support.

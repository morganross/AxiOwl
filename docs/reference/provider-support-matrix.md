# Provider Support Matrix

This page is the source of truth for provider/surface support. A provider is a brand plus a surface, not just a brand name. For example, `cursor:agents`, `codex:cli`, and `copilot:vsix extension` are separate provider surfaces because they use different discovery, install, delivery, and proof paths.

## Why The Matrix Is Strict

It is easy to say a provider “works” when only part of the path works. AxiOwl uses a stricter bar because a partial path is operationally dangerous. Writing a config file is not support. Discovering a stale chat is not support. Returning `accepted_by_axiowl` is not support. A provider is supported when the full round trip works under the current rules.

Plain English version: supported means the target can receive a message and reply back through AxiOwl with the right identity.

## Status Terms

| Status | Meaning | How to change it |
|---|---|---|
| `supported` | Current code has a provider edge and response-backed proof or active working evidence under current rules. | Keep it supported only while release tests continue to pass. |
| `target` | Intended support exists or code exists, but the current implementation has not met the current support bar. | Promote only after current proof exists. |
| `experimental` | Code path exists but depends on fragile private provider behavior or patch-sensitive internals. | Keep warnings visible and require extra QA. |
| `unsupported` | No current supported implementation. | Do not expose as checked/default install behavior. |
| `removed` | Explicitly removed from current scope. | Reintroduce only with a new provider contract. |

## Current Matrix

| Provider surface | Status | Delivery method | Installer action | Required integration | Current test status | Known risks |
|---|---|---|---|---|---|---|
| `codex:agents` | supported | Codex desktop/local app session delivery plus AxiOwl MCP reply path. | Install Codex plugin/skill and MCP integration when selected. | MCP/plugin config. | Response-backed tests have passed. | Existing sessions can keep stale MCP transport until restart. |
| `codex:cli` | supported | Codex CLI/local Codex thread operations. | Install MCP config/plugin support where applicable. | MCP metadata required. | Response-backed proof exists: `AXIOWL_CODEX_CLI_REPLY_OK`. | Must preserve provider-owned session metadata. |
| `vscode:agents` | supported | VS Code native chat/session commands through the AxiOwl bridge extension. | Install VS Code bridge extension, MCP config, and patch/config where selected. | VSIX extension, MCP server definition, native ownership/session logic. | Response-backed VS Code tests have passed. | Stale extension folders and old workspace paths can confuse sessions. |
| `copilot:vsix extension` | supported | VS Code Copilot-backed MCP through the VS Code bridge. | Install VS Code bridge extension and MCP server definition. | VSIX extension and MCP definition. | Response-backed Copilot-in-VS-Code tests have passed. | Requires VS Code host MCP API and a usable Copilot-capable session. |
| `cursor:agents` | supported | Cursor bridge command files, command watcher, URI fallback, and Glass submit patch. | Install Cursor bridge extension, MCP config, Cursor patch, and discovery. | Cursor extension, MCP config, private Cursor patch. | Response-backed Cursor tests have passed. | Patch-sensitive. Cursor private internals can change. URI wake-up should stay fallback. |
| `antigravity:agents` | supported | Antigravity provider edge and MCP reply path. | Install Antigravity/Gemini MCP config when selected. | MCP config. | Response-backed tests have passed. | Provider app/session state must expose usable sender metadata. |
| `antigravity:cli` | target | AGY CLI conversation discovery and resume. | Install CLI MCP config and future metadata patch when ready. | CLI config plus provider metadata patch or native metadata. | Historical response proof exists, but current bar requires metadata-patch proof. | Quota/auth and metadata ownership can block final support. |
| `claude-code:cli` | target | Claude Code CLI documented print/resume flow against JSONL sessions. | Install Claude MCP config and future metadata patch when ready. | CLI MCP config plus provider metadata patch or native metadata. | Historical response proof exists, but current bar requires metadata-patch proof. | Claude sessions need valid cwd and non-stale JSONL session state. |
| `opencode:cli` | target | `opencode run --session` with generated config. | Install OpenCode MCP config and future metadata patch when ready. | CLI config plus provider metadata patch or native metadata. | Historical response proof exists, but current bar requires metadata-patch proof. | Needs provider-owned metadata, not environment-only identity. |
| `copilot:cli` | target | Copilot CLI create/resume path. | Install Copilot CLI MCP config and future metadata patch when ready. | CLI config plus provider metadata patch or native metadata. | Code support exists; auth and metadata proof are outstanding. | Copilot CLI auth differs from classic GitHub token auth. |
| `cursor:cli` | unsupported | No accepted current provider surface. | None by default. | N/A. | Removed from current matrix unless a real Cursor CLI product/surface is confirmed. | Do not confuse Cursor editor/agent window with a separate CLI provider. |
| `remote` | unsupported | Explicitly out of scope for local-provider remediation builds. | May remain visible but unchecked when present. | Remote node contract required. | Not part of local provider support. | Must not hide local provider failures. |

## The Support Bar

A provider surface is supported only when all of these are true:

1. Provider/session discovery works.
2. Installer behavior is selected-feature-specific.
3. AxiOwl can address the target by stable provider identity.
4. AxiOwl can send to the provider.
5. The provider receives or persists the message.
6. The provider can reply through AxiOwl MCP.
7. The reply carries correct provider-owned sender identity.
8. The path is documented with known risks and logs.

## Why CLI Providers Are Mostly Target

The CLI experiments proved that several providers could be reached. The current product bar is higher: the provider must supply session identity through MCP metadata or through a robust AxiOwl/provider patch. Per-session environment identity is useful for experiments but not sufficient for final support because it can make AxiOwl believe a caller-owned label instead of provider-owned truth.

The architecture decision is to prefer slower promotion and fewer false positives over broad claims that break on another machine.

## Promotion Checklist

Before moving a provider from `target` to `supported`:

- document install action;
- document discovery source;
- document delivery method;
- document metadata source;
- run clean-machine install;
- create or discover a fresh session;
- send a message;
- receive an MCP reply;
- prove sender identity;
- record known risks;
- update this matrix first.

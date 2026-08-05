# VS Code Copilot-Backed Sessions

This surface is a Copilot session hosted inside VS Code. It is not the standalone Copilot CLI.

## Capabilities

| Operation | Status | Method |
|---|---|---|
| Discovery | supported | VS Code bridge and Copilot session state |
| Send | experimental | Exact-session bridge command |
| Create | implemented | Copilot-backed bridge create |
| Rename | implemented | Bridge command plus provider-native verification |
| MCP reply | supported | VS Code host MCP plus patched session metadata |

## Installer

The checkbox owns the bridge extension, MCP configuration, and Copilot metadata patch. These are separate MSI features from VS Code native support even though both operate inside VS Code.

## Evidence

Response-backed messages have passed in earlier rounds. The July 12 full round did not complete a roundtrip, and one rename target had a provider-owned corrupted `events.jsonl`. AxiOwl registry updates do not substitute for a provider-visible title.

## Risks

- VS Code and Copilot extension updates can change private metadata anchors;
- corrupted Copilot session files are provider-state failures, not successful AxiOwl renames;
- an extension command resolving is weaker than provider transcript proof.

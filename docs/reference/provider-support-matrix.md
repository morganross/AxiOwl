# Provider Support Matrix

This is the source of truth for provider-surface capabilities. A single provider-wide status is insufficient because send, create, rename, discovery, installation, and MCP reply support can differ.

## Status Terms

| Term | Meaning |
|---|---|
| `supported` | Current code and response-backed evidence satisfy the operation's support bar. |
| `implemented` | Current code contains the operation, but current clean-machine or response-backed validation is incomplete. |
| `experimental` | The operation exists but depends on patch-sensitive private behavior. |
| `unsupported` | Current code deliberately rejects the operation or has no accepted product surface. |
| `feature branch` | Implemented outside current `main`. |

## Current Operation Matrix

| Provider surface | Discover | Send | Create | Rename | MCP reply | Installer coverage | Current evidence and limitation |
|---|---|---|---|---|---|---|---|
| Codex agents | supported | supported | unsupported | supported | supported | Plugin, MCP config, skill | Desktop create is deliberately disabled; send and provider-visible rename have response/native proof. |
| Codex CLI | supported | supported | implemented | supported | supported | No separate provider checkbox | Historical response proof exists; latest full-round create did not finish its MCP reply turn. |
| VS Code native | supported | experimental | implemented | implemented | supported | Bridge extension and MCP config | Earlier response proof exists; latest full round found bridge queue/ownership failures. |
| VS Code Copilot-backed | supported | experimental | implemented | implemented | supported | Bridge extension, MCP config, metadata patch | Earlier response proof exists; latest full round found provider session corruption and no roundtrip. |
| Cursor agents | supported | experimental | experimental | experimental | supported | Bridge extension, MCP config, submit patch, discovery | Response proof exists; private Cursor internals and title persistence remain patch-sensitive. |
| Antigravity agents | supported | supported | implemented | implemented | supported | MCP config | Response proof exists; latest full-round create reached the provider but did not execute its MCP reply. |
| Antigravity CLI | implemented | implemented | implemented | unsupported | implemented | No dedicated checkbox | Earlier response proof exists; rename is a deliberate unsupported stub. |
| Claude Code CLI | implemented | implemented | implemented | implemented | implemented | MCP config | Current main includes readiness, MCP warm-up, create verification, and rename lifecycle fixes; post-merge clean-machine roundtrip proof remains required. |
| Copilot CLI | implemented | implemented | implemented | unsupported | implemented | MCP metadata patch | Latest full round failed because Copilot CLI was unauthenticated; rename is unsupported. |
| OpenCode CLI | implemented | implemented | implemented | unsupported | implemented | No dedicated checkbox | Latest full round refused unsafe multiline delivery through a batch shim because no native executable was available. |
| Cursor Agent CLI | implemented | implemented | implemented | unsupported | implemented | No dedicated checkbox | Code recognizes the surface; latest full round was blocked by Cursor Agent authentication. |
| External A2A endpoint | implemented | implemented | not applicable | not applicable | task/result model | A2A optional feature is not required for outbound client use | Agent Card import, bearer/OAuth delivery, and task persistence are implemented. Independent interop evidence remains part of release validation. |
| AxiOwl remote node | implemented | implemented | unsupported | implemented | task/remote result model | Remote features retained unchecked | Direct A2A, relay, A2A-over-SSH, and legacy migration paths exist. Remote create is unsupported. |
| AxiOwl Mailbox | built in | supported | unsupported | unsupported | local endpoint | Installed with core runtime | Singleton local endpoint used for messages, responses, GUI, and tests. |
| XMPP remote transport | feature branch | feature branch | unsupported | not established | XMPP result stanzas | Separate branch MSI | Substantial implementation exists but is not merged into current main. |

## Installer Coverage Is Not Runtime Coverage

Current installer provider contracts exist for Codex agents, both VS Code surfaces, Antigravity agents, Claude Code CLI, Copilot CLI, Cursor agents, and remote features. The runtime also contains Codex CLI, Antigravity CLI, OpenCode CLI, and Cursor Agent CLI provider edges without equivalent dedicated MSI checkboxes.

The website must not imply that a runtime provider edge automatically means clean-machine installation is complete.

## Support Bar

An operation is supported only when:

1. the provider and target session are discovered correctly;
2. required installer/configuration work is repeatable on a clean machine;
3. AxiOwl addresses the intended provider-owned session;
4. the provider receives the full message;
5. the expected provider-visible mutation or response occurs;
6. replies carry provider-owned sender identity;
7. logs distinguish AxiOwl acceptance from provider proof.

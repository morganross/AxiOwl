# AxiOwl Documentation Source Of Truth

This folder is the current product contract for AxiOwl. Other docs can explain the product for a specific audience, but they should not invent a second version of provider support, installer behavior, release gates, or architecture.

## Why This Folder Exists

AxiOwl has several moving parts: a Windows installer, local runtime, provider discovery, MCP tools, provider-specific bridges, patches, CLI integrations, an A2A boundary, inter-node routing, and feature-branch transports. When those parts are documented in separate dated reports, it becomes easy for one page to describe a plan, another to describe branch code, and a third to treat an old experiment as a released feature.

The source-of-truth pattern prevents that loop. Current behavior belongs here. Historical discoveries belong in reports. Future ideas belong in plans. Troubleshooting stories belong in support docs.

## Canonical Docs

| Document | Purpose |
|---|---|
| [Architecture Overview](architecture-overview.md) | Explains the system shape, message flow, registry, discovery, delivery, and receipt boundaries. |
| [Provider Support Matrix](provider-support-matrix.md) | Defines discovery, send, create, rename, reply, installer, and test status by provider surface. |
| [Platform Support Matrix](platform-support-matrix.md) | Separates released OS support from remote, laboratory, and feature-branch assets. |
| [Protocol Support Matrix](protocol-support-matrix.md) | Defines MCP, A2A, relay, SSH, legacy, and XMPP boundaries. |
| [Installer Behavior Matrix](installer-behavior-matrix.md) | Defines what the MSI installs, patches, configures, removes, avoids, and logs. |
| [Release Validation Checklist](release-validation-checklist.md) | Defines the minimum release proof before publishing a Windows installer or docs update. |

## Definitions Used Everywhere

| Term | Meaning |
|---|---|
| Provider | A brand and surface pair, such as `cursor:agents`, `codex:cli`, or `copilot:vsix extension`. |
| Surface | The specific place AxiOwl talks to: editor, agent window, CLI, VSIX-backed session, or remote node. |
| Supported | End-to-end response proof exists under the current rules. |
| Implemented | Current code contains the operation, but current release proof is incomplete. |
| Feature branch | Code exists outside current `main` and is not part of the primary release. |
| Receipt | A record that AxiOwl accepted a request. It is not the same as provider delivery proof. |
| MCP reply | A provider response through AxiOwl MCP with provider-owned sender metadata. This is the strongest routine proof. |
| Discovery | The process of finding provider sessions and adding or refreshing registry rows. |
| Patch | A selected provider modification needed when the provider does not expose a stable public API for the required behavior. |

## Documentation Rules

1. Describe what exists now, not what would be ideal.
2. Do not mark a provider supported because config files exist.
3. Do not mark a provider supported because AxiOwl accepted a send request.
4. Do not use historical proof as current proof when the support bar has changed.
5. Do not hide fragile paths. Explain why they are fragile and what proof is required.
6. Keep provider pages consistent with the matrix.
7. Keep installer docs consistent with the installer behavior matrix.
8. When a provider changes status, update the matrix first.
9. Do not describe a feature branch as current-main behavior.
10. Separate an operation's implementation status from its most recent end-to-end test result.

## Architecture Opinion

AxiOwl should stay explicit and evidence-driven. The system should prefer a louder failure with useful logs over a quiet fallback that makes a broken path look successful. This matters because provider automation often fails in ambiguous ways: stale sessions, old workspace paths, missing MCP tools, partial patch installs, and provider auth failures can all look similar from the outside.

The docs should help a user or developer answer three questions quickly:

1. What was supposed to happen?
2. What actually happened?
3. Which boundary failed: install, discovery, send handoff, provider delivery, or MCP reply?

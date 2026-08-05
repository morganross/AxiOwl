# AxiOwl Documentation Source Of Truth

This folder is the current public product contract for AxiOwl. Other docs can explain the product for a specific audience, but they should not invent a second version of provider support, installer behavior, architecture, or security expectations.

## Why this folder exists

AxiOwl has several moving parts: a Windows installer, local runtime, provider discovery, MCP tools, provider-specific bridges, patches, CLI integrations, an A2A boundary, inter-node routing, and feature-branch transports. When those parts are documented in separate dated reports, it becomes easy for one page to describe a plan, another to describe branch code, and a third to treat an old experiment as a released feature.

The source-of-truth pattern prevents that drift:

- current behavior belongs here;
- public security expectations belong in `docs/security`;
- historical discoveries belong in dated reports;
- future ideas belong in plans;
- troubleshooting stories belong in support docs.

## Canonical docs

| Document | Purpose |
|---|---|
| [Architecture Overview](architecture-overview.md) | Explains the system shape, message flow, registry, discovery, delivery, and receipt boundaries. |
| [Provider Support Matrix](provider-support-matrix.md) | Defines discovery, send, create, rename, reply, installer, and test status by provider surface. |
| [Platform Support Matrix](platform-support-matrix.md) | Separates released OS support from remote, laboratory, and feature-branch assets. |
| [Protocol Support Matrix](protocol-support-matrix.md) | Defines MCP, A2A, relay, SSH, legacy, and XMPP boundaries. |
| [Installer Behavior Matrix](installer-behavior-matrix.md) | Defines what the MSI installs, patches, configures, removes, avoids, and logs. |
| [Security And Trust](../security/README.md) | Defines the public security model, encryption limits, device trust, authorization, and data boundaries. |
| [Release Validation Checklist](release-validation-checklist.md) | Defines the public release evidence expected before publishing a product or docs release. |

## Definitions used everywhere

| Term | Meaning |
|---|---|
| Provider | A brand and surface pair, such as `cursor:agents`, `codex:cli`, or `copilot:vsix extension`. |
| Surface | The specific place AxiOwl talks to: editor, agent window, CLI, VSIX-backed session, or remote node. |
| Supported | End-to-end response proof exists under the current rules. |
| Implemented | Current code contains the operation, but current release proof is incomplete. |
| Feature branch | Code exists outside current `main` and is not part of the primary release. |
| Receipt | A record that AxiOwl accepted a request. It is not the same as provider delivery proof. |
| MCP reply | A provider response through AxiOwl MCP with provider-owned sender metadata. |
| Discovery | The process of finding provider sessions and adding or refreshing registry rows. |
| Patch | A selected provider modification needed when the provider does not expose a stable public API for the required behavior. |

## Documentation rules

1. Describe what exists now, not what would be ideal.
2. Do not mark a provider supported because a config file exists.
3. Do not mark a provider supported because AxiOwl accepted a send request.
4. Do not use historical proof as current proof when the support bar has changed.
5. Keep provider pages consistent with the matrix.
6. Keep installer docs consistent with the installer behavior matrix.
7. Keep public security pages conceptual and do not publish credentials, private keys, internal deployment identifiers, or exact cryptographic wire formats.
8. When a provider changes status, update the matrix first.
9. Do not describe a feature branch as current-main behavior.
10. Separate an operation's implementation status from its most recent end-to-end test result.

## Architecture opinion

AxiOwl should prefer a clear failure with useful evidence over a quiet fallback that makes a broken path look successful. Stale sessions, old workspace paths, missing MCP tools, partial patch installs, provider auth failures, and revoked devices can all look similar from the outside.

The docs should help a user or developer answer three questions quickly:

1. What was supposed to happen?
2. What actually happened?
3. Which boundary failed: install, discovery, authorization, send handoff, provider delivery, or MCP reply?

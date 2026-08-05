# AxiOwl Documentation Source Of Truth

This folder is the current public product contract for AxiOwl. Other docs can explain the product for a specific audience, but they should not invent a second version of provider support, installer behavior, architecture, or security expectations.

## Why this folder exists

AxiOwl has several moving parts: a Windows installer, a local runtime, provider discovery, MCP tools, provider-specific bridges, patches, and CLI integrations. When those parts are documented in separate dated reports, it becomes easy for one page to describe an experiment as current behavior.

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
| [Provider Support Matrix](provider-support-matrix.md) | Defines which provider surfaces are supported, target, experimental, unsupported, or removed. |
| [Installer Behavior Matrix](installer-behavior-matrix.md) | Defines what the MSI installs, patches, configures, removes, avoids, and logs. |
| [Security And Trust](../security/README.md) | Defines the public security model, encryption limits, device trust, authorization, and data boundaries. |
| [Release Validation Checklist](release-validation-checklist.md) | Defines the public release evidence expected before publishing a product or docs release. |

## Definitions used everywhere

| Term | Meaning |
|---|---|
| Provider | A brand and surface pair, such as `cursor:agents`, `codex:cli`, or `copilot:vsix extension`. |
| Surface | The specific place AxiOwl talks to: editor, agent window, CLI, VSIX-backed session, or remote node. |
| Supported | Current evidence supports the full documented path for that surface. |
| Target | Intended support exists or code exists, but the current support bar has not been met. |
| Experimental | A path exists but depends on fragile or changing provider behavior. |
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

## Architecture opinion

AxiOwl should prefer a clear failure with useful evidence over a quiet fallback that makes a broken path look successful. Stale sessions, old workspace paths, missing MCP tools, partial patch installs, provider auth failures, and revoked devices can all look similar from the outside.

The docs should help a user or developer answer three questions quickly:

1. What was supposed to happen?
2. What actually happened?
3. Which boundary failed: install, discovery, authorization, send handoff, provider delivery, or MCP reply?

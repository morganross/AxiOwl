# AxiOwl Documentation Source Of Truth

This folder contains the source-of-truth documents for AxiOwl. Audience-specific docs in `docs/user`, `docs/installer`, `docs/providers`, `docs/developer`, `docs/support`, `docs/release`, and `docs/security` should point back here instead of redefining product behavior.

## Canonical Docs

| Document | Purpose |
|---|---|
| [Architecture Overview](architecture-overview.md) | How AxiOwl is structured and how messages flow through the system. |
| [Provider Support Matrix](provider-support-matrix.md) | Current provider/surface status, delivery method, installer action, and test evidence. |
| [Installer Behavior Matrix](installer-behavior-matrix.md) | What the MSI installs, patches, configures, removes, and intentionally avoids. |
| [Release Validation Checklist](release-validation-checklist.md) | Required release and QA gates before publishing an installer. |

## Documentation Rule

Docs must describe the product as it behaves now. Planned behavior belongs in plans. Historical behavior belongs in reports. Current supported behavior belongs here.

When provider status changes, update [Provider Support Matrix](provider-support-matrix.md) first, then update provider pages that link to it.

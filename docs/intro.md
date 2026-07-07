---
sidebar_position: 1
slug: /intro
---

# AxiOwl Docs

AxiOwl is local Windows software for AI provider messaging. It installs provider integrations, discovers provider sessions, sends messages to those sessions, and lets providers reply back through AxiOwl MCP with sender identity.

Plain English version: AxiOwl is a local message switchboard for AI work sessions. It helps one provider session talk to another without pretending all providers work the same way.

## Start Here

| Document | Purpose |
|---|---|
| [Architecture Overview](reference/architecture-overview.md) | How AxiOwl is structured and how messages move through the system. |
| [Provider Support Matrix](reference/provider-support-matrix.md) | Which provider surfaces are supported, target, experimental, unsupported, or removed. |
| [Installer Behavior Matrix](reference/installer-behavior-matrix.md) | What the MSI installs, patches, configures, removes, and avoids. |
| [Release Validation Checklist](reference/release-validation-checklist.md) | Required release and QA gates. |

## Audience Guides

| Audience | Guide |
|---|---|
| Users | [User Docs](user/README.md) |
| Installer operators | [Installer Docs](installer/README.md) |
| Provider-specific work | [Provider Docs](providers/README.md) |
| Developers | [Developer Docs](developer/README.md) |
| Support and diagnosis | [Support / Forensics](support/forensics.md) |
| Release and QA | [Release / QA](release/qa-checklist.md) |
| Security and trust | [Security / Trust](security/trust-boundaries.md) |

## The One Rule To Remember

An AxiOwl receipt means AxiOwl accepted a request. It does not prove the target provider received the message. The strongest normal proof is a response from the provider over AxiOwl MCP with the correct sender identity.

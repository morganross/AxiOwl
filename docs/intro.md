---
sidebar_position: 1
slug: /intro
---

# AxiOwl Docs

AxiOwl is local Windows software for AI provider messaging. It installs provider integrations, discovers provider sessions, sends messages to those sessions, and lets providers reply back through AxiOwl MCP with sender identity.

Plain English version: AxiOwl is a local message switchboard for AI work sessions. It helps one provider session talk to another without pretending all providers work the same way.

## Start Here

New readers should start with the plain-English workflow pages before jumping into the matrices:

| Why page | Why it matters |
|---|---|
| [Why Use AxiOwl](why-axiowl/why-use-axiowl.md) | Explains the problem AxiOwl solves. |
| [Who AxiOwl Is For](why-axiowl/who-it-is-for.md) | Describes the people and workflows that benefit. |
| [A Workflow Story](why-axiowl/workflow-story.md) | Shows how AxiOwl fits into everyday work. |
| [Why Download And Install It](why-axiowl/why-download-and-install.md) | Explains what installing gives you. |
| [When Not To Use AxiOwl](why-axiowl/when-not-to-use-it.md) | Sets honest boundaries. |
| [Practical Examples](why-axiowl/examples.md) | Shows real use cases. |

Then move to the beginner pages:

| Beginner page | Why it matters |
|---|---|
| [What AxiOwl Is](getting-started/what-axiowl-is.md) | Establishes the switchboard mental model. |
| [Install And First Run](getting-started/install-first-run.md) | Explains what the MSI should do and what install success means. |
| [Send Your First Message](getting-started/send-your-first-message.md) | Shows the basic send/receipt/reply loop. |
| [How To Read Status And Logs](getting-started/how-to-read-status.md) | Helps users find evidence instead of guessing. |

After that, use the source-of-truth docs:

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

## Concept Guides

| Concept | Guide |
|---|---|
| Provider surfaces | [Provider Surfaces](concepts/provider-surfaces.md) |
| Support status words | [Supported, Target, Experimental, Unsupported](concepts/supported-target-experimental.md) |
| Receipts and proof | [Receipts Versus Proof](concepts/receipts-vs-proof.md) |
| MCP identity | [MCP And Metadata](concepts/mcp-and-metadata.md) |
| Discovery and registry | [Discovery And Registry](concepts/discovery-and-registry.md) |
| Installer checkboxes | [Installer Checkboxes](concepts/installer-checkboxes.md) |
| Local and remote | [Local Versus Remote](concepts/local-vs-remote.md) |

## The One Rule To Remember

An AxiOwl receipt means AxiOwl accepted a request. It does not prove the target provider received the message. The strongest normal proof is a response from the provider over AxiOwl MCP with the correct sender identity.

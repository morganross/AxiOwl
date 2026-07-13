---
sidebar_position: 1
slug: /intro
---

# AxiOwl Documentation

AxiOwl is a general-purpose normalization and communication layer for AI agents. It gives unlike provider surfaces a shared address book, message contract, identity model, receipt model, and set of diagnostic tools without pretending that every provider works the same way.

Plain English: AxiOwl lets you find an AI work session, send work to it through the method that provider actually supports, and receive a reply whose origin can be checked. The session may be in a desktop agent window, an editor, a CLI, another AxiOwl node, or an external A2A system.

## Product Areas

| Area | What it does | Current boundary |
|---|---|---|
| Provider messaging | Discovers and addresses local provider sessions, then sends through provider-specific delivery edges. | Current Windows product; support varies by provider surface. |
| MCP replies | Lets a provider return a message with sender, session, run, and receipt correlation. | Current main behavior. |
| A2A | Exposes selected desktop agents as A2A endpoints and calls external Agent Card endpoints. | Implemented on current main; streaming routes are declared but not implemented. |
| Inter-node | Connects AxiOwl nodes through direct HTTPS A2A, relay, or A2A over SSH. | Implemented on current main with explicit transport selection and guarded fallback. |
| XMPP | Adds standards-based chat transport and external XMPP gateway behavior. | Implemented on `feature/xmpp-remote-transport`, not merged into current main. |
| Installation | Installs the core runtime and selected provider-specific config, extensions, patches, or services. | Windows MSI is primary. Linux support is narrower; macOS is unsupported. |

The status statements above are summaries. Use the [Provider Support Matrix](reference/provider-support-matrix.md), [Protocol Support Matrix](reference/protocol-support-matrix.md), [Platform Support Matrix](reference/platform-support-matrix.md), and [Installer Behavior Matrix](reference/installer-behavior-matrix.md) for the exact current claims.

## Start Here

New users:

1. Read [What AxiOwl Is](getting-started/what-axiowl-is.md).
2. Read [Install And First Run](getting-started/install-first-run.md).
3. Follow [Send Your First Message](getting-started/send-your-first-message.md).
4. Learn the difference between [Receipts And Proof](concepts/receipts-vs-proof.md).

People evaluating the product should read [Why Use AxiOwl](why-axiowl/why-use-axiowl.md) and [AxiOwl As A Normalization Layer](concepts/normalization-layer.md).

Developers and operators should start with [Architecture Overview](reference/architecture-overview.md), [A2A](a2a/README.md), [Inter-Node Communication](inter-node/README.md), and [Release Validation](reference/release-validation-checklist.md).

## Source Of Truth

These documents govern current product claims:

| Document | Governs |
|---|---|
| [Provider Support Matrix](reference/provider-support-matrix.md) | Provider surface support and last validation status. |
| [Installer Behavior Matrix](reference/installer-behavior-matrix.md) | What each MSI feature installs, patches, configures, and removes. |
| [Protocol Support Matrix](reference/protocol-support-matrix.md) | A2A, inter-node, relay, SSH, streaming, and XMPP status. |
| [Platform Support Matrix](reference/platform-support-matrix.md) | Windows, Linux, and macOS product boundaries. |
| [Architecture Overview](reference/architecture-overview.md) | Runtime components and message flows. |
| [Release Validation Checklist](reference/release-validation-checklist.md) | Evidence required before a capability is called release-ready. |

Historical reports explain how a method was discovered. They do not override these current matrices.

## One Rule To Remember

An AxiOwl acceptance receipt proves that AxiOwl accepted responsibility for a request. It does not prove the target consumed the message. The strongest ordinary proof is a correlated response from the intended provider session over AxiOwl MCP or the corresponding completed A2A task result.

---
sidebar_position: 1
slug: /intro
---

# AxiOwl Documentation

AxiOwl is a communication and normalization layer for AI work sessions. It gives unlike provider surfaces a common address book, message contract, sender-identity model, receipt model, and diagnostic vocabulary while preserving the provider-specific method that actually performs each operation.

In plain English: AxiOwl helps a user or agent find the intended AI session, send work through the integration for that exact surface, and receive a correlated response without pretending that Codex, Cursor, VS Code, Claude, Antigravity, Copilot, and OpenCode all behave alike.

## What Exists Today

| Area | Current product reality |
|---|---|
| Local provider messaging | Implemented through eleven isolated Windows provider packages plus built-in mailbox and registry behavior. Operation support differs by surface. |
| MCP | The common tool boundary for sender identity, listing, discovery, send, create, rename, status, and correlated replies where a provider exposes the needed metadata. |
| A2A | A separate standards-based HTTP boundary for exposing registered sessions and calling external agent endpoints. The Windows package includes separate A2A server and interactive client/broker features. |
| Secure XMPP | Merged into `main`. Shared endpoint security, Windows and Linux clients, Windows and Linux server implementations, and a cloud server role exist. A complete current encrypted client-to-provider journey is not yet claimed. |
| Desktop platforms | Windows is the packaged primary desktop. Linux x86-64 has a Debian package and provider/XMPP source. macOS has a native Swift implementation and unsigned package evidence. |
| Mobile platforms | Native Android and iPhone clients exist as engineering previews. They are not public production releases, and protected messaging remains fail-closed where required runtime pieces are unavailable. |
| Licensing and trust | License entitlement, website account/pool state, device trust, and XMPP transport credentials are separate authorities. A license token is not a device identity or messaging credential. |
| Updates | Signed Windows artifacts and isolated provider packages exist. Signed pull metadata and provider-package update machinery exist; unattended core replacement is not claimed. |

Read [Current Product Status](reference/current-product-status.md) before interpreting any capability claim. It distinguishes source, package, signature, installation, deployment, and end-to-end evidence.

## Start Here

New users:

1. Read [What AxiOwl Is](getting-started/what-axiowl-is.md).
2. Check the [Platform Support Matrix](reference/platform-support-matrix.md).
3. Check the [Provider Support Matrix](reference/provider-support-matrix.md).
4. Follow [Install And First Run](getting-started/install-first-run.md).
5. Follow [Send Your First Message](getting-started/send-your-first-message.md).
6. Learn the difference between [Receipts And Proof](concepts/receipts-vs-proof.md).

For security-sensitive use, read [Security And Trust](security/README.md), [Encryption And Privacy](security/encryption-and-privacy.md), and [Device Trust And Enrollment](security/device-trust-and-enrollment.md).

## Public Sources Of Truth

| Document | Governs |
|---|---|
| [Current Product Status](reference/current-product-status.md) | Review date, evidence vocabulary, and current maturity boundaries. |
| [Provider Support Matrix](reference/provider-support-matrix.md) | Operations and installer ownership by concrete provider surface. |
| [Installer Behavior Matrix](reference/installer-behavior-matrix.md) | Windows feature ownership and what each selection changes. |
| [Protocol Support Matrix](reference/protocol-support-matrix.md) | MCP, A2A, XMPP, and legacy transport status. |
| [Platform Support Matrix](reference/platform-support-matrix.md) | Windows, Linux, macOS, iOS, Android, and server maturity. |
| [Architecture Overview](reference/architecture-overview.md) | Runtime, provider, network, trust, and release boundaries. |
| [Security And Trust](security/README.md) | Public protection goals, limits, and trust boundaries. |

Historical reports remain useful evidence, but they do not override these pages. A dated plan can show what engineers intended; current source and current artifact evidence decide what the website claims.

## One Rule To Remember

An AxiOwl acceptance receipt proves that AxiOwl accepted responsibility for a request. It does not by itself prove that the provider displayed the message, completed the work, or returned a response. The strongest normal proof is a correlated response from the intended provider-owned session or a completed protocol task bound to that response.

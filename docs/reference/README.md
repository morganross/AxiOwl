# AxiOwl Public Sources Of Truth

This folder is the public product contract. Other pages can explain AxiOwl for a specific audience, but they should link here rather than creating a second support matrix or a second architecture.

## Canonical Pages

| Document | Purpose |
|---|---|
| [Current Product Status](current-product-status.md) | Defines the review date and separates design, source, package, signature, installation, deployment, demonstration, and support. |
| [Architecture Overview](architecture-overview.md) | Explains local runtime, providers, protocols, trust services, and release boundaries. |
| [Provider Support Matrix](provider-support-matrix.md) | Defines source operations, packaging, evidence, and risks by provider surface. |
| [Platform Support Matrix](platform-support-matrix.md) | Defines maturity for Windows, Linux, macOS, iOS, Android, and server roles. |
| [Protocol Support Matrix](protocol-support-matrix.md) | Defines MCP, A2A, XMPP, and legacy transport status. |
| [Installer Behavior Matrix](installer-behavior-matrix.md) | Defines current Windows MSI feature ownership. |
| [Release Validation Checklist](release-validation-checklist.md) | Explains the evidence that should accompany a public release claim. |
| [Security And Trust](../security/README.md) | Defines the public security model and its limits. |

## Rules For Current Claims

1. Name the concrete provider surface, platform, component, and operation.
2. State the strongest evidence actually available.
3. Do not turn source presence into package, install, deployment, or end-to-end proof.
4. Do not use a chat title or alias as identity proof.
5. Do not treat an accepted request as provider completion.
6. Do not treat a signed artifact as a live deployment.
7. Keep licensing separate from account identity, pool membership, device trust, and transport credentials.
8. Keep A2A and XMPP as separate transports with separate security and failure boundaries.
9. Keep public security explanations useful without publishing credentials, private infrastructure identifiers, or cryptographic secret material.
10. When source and a dated report disagree, current source wins unless stronger current runtime evidence proves otherwise.

## Why This Matters

AxiOwl spans provider-owned applications, local user state, machine services, network protocols, cloud services, installers, and signed release artifacts. A vague word such as "working" can hide six different outcomes. The public contract makes those boundaries explicit so a user can tell whether something was implemented, packaged, installed, deployed, or actually demonstrated.

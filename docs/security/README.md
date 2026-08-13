---
sidebar_position: 1
slug: /security
---

# Security And Trust

AxiOwl is designed for useful coordination without turning one credential, server, display name, or transport event into universal authority.

The security model keeps important responsibilities separate and combines them only at the endpoint that is allowed to act.

## Security In Plain English

For an approved-device workflow, AxiOwl asks several independent questions:

1. Is this the intended server connection?
2. Which approved device is on the connection?
3. Is the message protected for this destination?
4. Is the sender allowed to request this action?
5. Is the request fresh and unused?
6. Which local provider target may receive it?

The destination endpoint answers those questions before it gives work to a local provider integration.

## The Main Protection Layers

### Provider-Owned Authentication

Provider accounts and model access remain under the provider's control. AxiOwl coordinates with an authenticated provider session rather than becoming the provider account.

### Distinct Device Identity

Every approved device has its own identity and transport credential. A trusted coordinator can approve another device, and device membership can be managed individually.

### Endpoint Content Protection

The sending endpoint protects remote message content for the intended receiving endpoint. The routing service handles the information needed to deliver the protected envelope.

### Receiver-Owned Authorization

The destination decides whether the sender, target, operation, and current policy allow a provider handoff. A readable message becomes actionable only after that local decision.

### Replay Protection

The receiver records message and dispatch state so a previously accepted action cannot simply be presented as new work.

### Protected Results

Results and terminal receipts return through the authenticated endpoint session with correlation to the original action.

## Read By Topic

| Page | What you will learn |
|---|---|
| [Encryption And Privacy](encryption-and-privacy.md) | How endpoint protection and visible routing metadata differ |
| [Device Trust And Enrollment](device-trust-and-enrollment.md) | How approved devices join and maintain distinct identity |
| [Authorization And Replay](authorization-and-replay.md) | How the destination controls provider invocation |
| [Metadata And Identity](metadata-and-identity.md) | How session identity and routing labels are handled |
| [Trust Boundaries](trust-boundaries.md) | Which product component owns each decision |
| [Updates And Supply Chain](updates-and-supply-chain.md) | How signed artifacts and provider packages reach users |
| [Shared Security Responsibilities](known-limitations.md) | How users, providers, endpoints, and operators work together |

## Secure Coordination As A Product Benefit

The goal is not encryption as a badge. The goal is a useful remote workflow where protected content, device trust, action permission, replay protection, and provider delivery all preserve their own meaning.

See [Work Securely Across Devices](../use-cases/secure-work-across-devices.md) for the user journey.

---
sidebar_position: 7
---

# Known Security Limits

## End-To-End Demonstration Is Incomplete

Secure XMPP source, packages, and cloud service evidence exist. A current complete admitted-client, encrypted-message, provider-effect, and protected-receipt journey is not yet a public support claim.

## Metadata Remains

Content encryption does not hide connection timing, endpoint availability, routing identifiers, message size, provider state, or all local logs.

## Providers Are External Trust Domains

Once a local provider receives an authorized message, that provider applies its own privacy, retention, account, model, and execution policies. AxiOwl cannot make an external provider zero knowledge.

## Patch-Sensitive Integrations Can Break

Cursor, VS Code/Copilot, and selected CLI identity paths depend on provider behavior that is not always a stable public API. Upstream updates can invalidate a patch or change discovery. The safe result is a visible refusal, not an unverified guess.

## Device Loss Has A Hard Boundary

If every trusted coordinator is lost, central services cannot recover the old trust domain. A new domain is required. This prevents server-side recovery power but increases the importance of keeping at least one trusted device available during normal transfer.

## No Offline Protected Action Queue

The selected secure action path rejects an offline exact destination instead of retaining message bodies for later delivery.

## No Universal Exactly-Once Provider Effect

AxiOwl can prevent a second authorized local handoff for the same request. It cannot always prove whether an external provider performed an effect immediately before a crash or disconnection.

## No Unattended Core Update Claim

Signed metadata and provider-package update machinery exist, but automatic core download, staging, and replacement are not presented as production behavior.

## Release Evidence Is Artifact-Specific

A newer source revision does not retroactively change an older signed MSI or package. Always identify the exact manifest, artifact, and installation under investigation.

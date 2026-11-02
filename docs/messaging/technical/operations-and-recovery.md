---
title: "Operations, outages and recovery"
slug: /messaging/technical/operations-and-recovery
description: "Failure-specific actions that preserve identities, data and uncertain operations."
---

# Operations, outages and recovery

Recovery should address the observed boundary. Do not replace an entire profile, credential store or node identity merely because a component cannot finish an operation.

| Symptom | Distinguish first | Preserve |
| --- | --- | --- |
| Tool returned promptly but no target proof yet | Admission versus delivery | Original operation/body/target binding |
| Tool or SSH timed out | Uncertainty versus confirmed rejection | No automatic resend |
| Recipient absent/stale | Correct surface, account, native identity and registry source | Existing provider history and admitted requests |
| Provider tools missing | Installation, extension activation and provider permissions | Owned configuration and unrelated entries |
| Account signed in but peers absent | Device-connect consent, Relay enablement and approval | Existing host keys and independent pairing |
| Account authority unavailable | Backoff and account-only freshness expiry | Refuse new stale account work; preserve independent grants |
| Sign-out incomplete | Local usable session versus server-family revocation | Visible recovery record |
| Update refused | Signature/protocol/ownership/shutdown/migration boundary | Verified active version and transaction material |
| Installation warnings | Which explicit selections remain incomplete | Healthy independent installations |

## Outage behavior

Reconnection is a transport action. It must not replay a logical provider Send. Account hints may be delayed, so reconnect/fallback obtains authority independently. The five-minute source lease bounds new account-only admission even when requests fail.

A provider login outage is not an AxiOwl license failure. A2A endpoint completion and remote SSH command completion are also separate from native provider delivery.

## Backup and restore

Back up exact application/runtime state with its supported ownership and identity. Include the records needed for deduplication and recovery. Protect message bodies, trust material and credentials in backups.

Do not restore only a database while discarding its required identity/sidecar/transaction relationship. A copied path does not establish correct owner or native host identity.

No universal disaster-recovery procedure or tested recovery-time objective is claimed here. Follow the matching component's published migration/recovery contract.

## Escalation evidence

Report the exact operation, OS/user/surface, versions, observed error and whether any part may already have been accepted. Preserve unknown times instead of inventing them.

A suggested investigation is not authorization for a provider test, reinstall, reboot, credential reset or live fix. During a restricted task, use source/local evidence and ask only for information or action that is actually required.

See [observability](observability.md), [installation](installation-and-removal.md), [credentials](credential-storage.md) and [source status](source-and-release-status.md).


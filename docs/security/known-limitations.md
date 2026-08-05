---
sidebar_position: 7
---

# Known Security Limits

Good security documentation includes the boundaries of the protection. AxiOwl reduces several classes of risk, but it cannot make an untrusted computer or provider trustworthy by itself.

## AxiOwl cannot protect a compromised host

If malware controls the operating system, provider process, user account, or trusted device, it may read content before encryption or after decryption. Protect the host, user account, and provider account separately.

## Provider behavior still matters

AxiOwl can normalize discovery, delivery, identity, and receipts, but it cannot force a provider to preserve history, display content, keep a session alive, or expose reliable metadata. Provider support is therefore surface-specific.

## Private integrations can be fragile

Some editor integrations depend on provider extension or workbench behavior that is not a stable public API. A provider update can invalidate a patch or change discovery. The installer should report that boundary rather than silently claiming success.

## Encryption does not hide everything

Content protection does not automatically hide routing metadata, timing, endpoint state, local logs, provider history, or the fact that a connection exists.

## Remote services add trust boundaries

A remote server can route protected content without being the customer's device authority, but it still has operational visibility and availability power. Operators should review server access, logs, backups, network policy, and credential rotation.

## Support status can change

The [Provider Support Matrix](../reference/provider-support-matrix.md) is the current public status page. A target or experimental surface may be useful for evaluation without being suitable for an unattended or security-sensitive workflow.

## What to do when evidence is ambiguous

Stop at the last known boundary. A receipt is not delivery proof, a display name is not identity proof, and an installed bridge is not provider support proof. Preserve the relevant log excerpt, redact secrets, and use the troubleshooting documentation to classify the failure.

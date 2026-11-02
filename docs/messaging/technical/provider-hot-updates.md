---
title: "Independent provider hot updates"
slug: /messaging/technical/provider-hot-updates
description: "Signed availability, verified shutdown, owned migration and activation."
---

# Independent provider hot updates

A provider hot update delivers an integration package independently from a full application release. “Hot” describes the independent update path; it does not mean files are replaced while the provider stays open.

## Update pipeline

1. An availability check obtains the selected channel's signed metadata.
2. The updater verifies product/channel/platform identity, signature, release binding and applicable anti-replay/sequence rules.
3. The selected provider package is verified against its signed descriptor, payload sizes/hashes, ownership and protocol requirements.
4. The updater closes the exact target provider application/process scope and verifies exit.
5. It prepares the declared integration/configuration changes using the supported transaction.
6. It activates the verified worker/configuration only after the required migration/readback succeeds.
7. The UI records the actual installed result or the reason the update did not complete.

A newer source version or downloadable package is not proof that activation succeeded.

## GUI behavior

Components/Provider Setup shows installed version, available version, availability and the download/install action. The chosen channel is part of the decision. Checking availability and downloading are network operations; opening the passive network-status view is not.

Save work before updating. A provider save dialog, unexpected restart, ambiguous process identity or an update launched inside the process being replaced can prevent verified shutdown. Do not force a broader unrelated process kill to conceal that refusal.

## Configuration migration

Owned configuration migration is part of installation, not a separate user repair ritual. OpenCode v2's reviewed contract requires automatic migration before worker activation. It retains provider/version/surface identity and transactional recovery.

A migration must not reset unrelated provider settings, replace credentials or silently switch to another provider surface. Failure leaves an incomplete outcome and retains the recovery material appropriate to that transaction.

## Compatibility

A provider worker cannot upgrade an incompatible core protocol by itself. OS/architecture, worker/package protocol, minimum core and declared assets all matter. Windows native package verification and Mac/Linux native update adapters have different implementation details but must preserve the same trust boundary.

Full shared-runtime/application upgrades remain separate signed workflows. See [provider catalog](provider-integrations.md), [supply chain](release-and-supply-chain.md), [installation](installation-and-removal.md) and [source status](source-and-release-status.md).


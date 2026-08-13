---
sidebar_position: 6
---

# Updates And Supply Chain

AxiOwl treats build, signing, publication, channel selection, download, and local application as distinct steps in a traceable release journey.

## From Source To User

1. Select the intended source revision.
2. Build the core and provider components as release artifacts.
3. Sign the executable components with the release authority.
4. Package the platform installer and provider revisions.
5. Publish immutable release bytes and signed metadata.
6. Promote a signed channel pointer when that release is ready for the channel.
7. Let clients pull, verify, stage, and explicitly apply the selected update.

## Why Signing Matters

Signing lets a user or client verify the expected publisher and detect changes to the signed bytes. Component signatures, release metadata signatures, and device-action signatures serve different purposes and remain separate authorities.

## Immutable Releases

Release objects are published as immutable bytes. Channel pointers select an approved release without rewriting that release. This creates a clear history and makes promotion a deliberate action.

## Provider Packages

Provider integrations have their own revisions. A provider package can evolve with its upstream provider while preserving independent ownership from the AxiOwl core and from other provider packages.

## User Scope Is Preserved

An update follows the same selected feature boundaries as installation. Provider applications continue to own accounts and conversations, while AxiOwl updates the integration assets it owns.

For the operator-level lifecycle, read [Update Publication And Pull Updates](../release/update-publication-operator-guide.md).

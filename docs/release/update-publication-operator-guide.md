---
sidebar_position: 1
slug: /release
---

# Releases And Pull Updates

AxiOwl separates artifact creation, publication, channel promotion, download, staging, and application. This keeps each release identifiable and lets provider integrations update independently from the core product.

## Release Flow

```text
source revision
  -> platform artifacts
  -> platform signatures and manifests
  -> immutable publication
  -> Preview or Internal channel
  -> deliberate Stable promotion
  -> client download and application
```

Publishing an artifact does not automatically make it Stable. Channel promotion is a separate decision.

## Platform Entry Points

| Platform | Release entry point |
|---|---|
| Windows | `release/Invoke-AxiOwlWindowsRelease.ps1` |
| Linux | `release/Invoke-AxiOwlLinuxRelease.ps1` |
| macOS | `release/Invoke-AxiOwlMacOSRelease.ps1` |
| Android | `release/Invoke-AxiOwlAndroidRelease.ps1` |
| iPhone | `release/Invoke-AxiOwlIosRelease.ps1` |

Windows package construction is owned by `installer/windows/build-windows-msi.ps1`.

## Release Artifacts

| Artifact | Purpose |
|---|---|
| Windows MSI | Installs core, providers, A2A, SSH, and the selected daemon runtime |
| Linux package | Installs the native Linux product and branded daemon service |
| macOS package | Installs the Swift desktop and bundled daemon |
| Android package | Delivers the Android mobile client |
| iPhone package | Delivers the iOS mobile client |
| Provider package | Delivers one isolated local provider integration revision |
| Component manifest | Identifies included files, ownership, sizes, and digests |
| Release envelope | Identifies one immutable product release and its channel |
| Channel pointer | Selects the release currently offered by a channel |

## Windows Packaging

The Windows release builds the core, eleven provider packages, A2A components, SSH support, and daemon payloads. The MSI feature map keeps provider selection and the Node/native/none daemon choice explicit.

Executable components are signed before they are packaged. The final MSI is signed after its contents are final.

## Provider Packages

Provider packages have their own IDs and revisions. A package owns one provider's worker, integration assets, and install strategy. It does not own another provider's files, account, credentials, or process scope.

The current provider inventory is defined in `providers/provider-package-inventory.json`.

In update code, a **generation** means an installed provider-package revision. It does not mean AI-generated content.

## Immutable Publication

Release components and package archives are published as immutable objects. Their manifests bind the expected size and digest. A release description binds those objects to one product version and channel.

Existing immutable objects are not rewritten when a channel changes.

## Preview, Internal, And Stable

- **Preview** makes a platform package available before Stable promotion.
- **Internal** is used for the Windows provider hot-update path before Stable promotion.
- **Stable** is the deliberately promoted public channel.

The channel identity is part of signed release metadata. Moving the same component bytes to another channel creates channel-specific release metadata rather than relabeling the existing record.

## Client Pull Commands

```text
axiowl update status
axiowl update check [--channel <channel>] [--endpoint <url>]
axiowl update provider status <provider-id>
axiowl update provider pull <provider-id> [--channel <channel>] [--endpoint <url>]
axiowl update provider apply <provider-id> --package-root <directory>
```

The client checks signed channel and release metadata, confirms component identity, and records accepted local update state before application.

Downloading a package does not grant it permission to overwrite another provider or change an unselected installer feature.

## Opportunistic Update Checks

Common Create and Send workflows can launch a detached one-shot update check when the existing channel state is missing or old.

The provider operation keeps its own result. The update check does not retry the provider operation and does not automatically apply a provider package or MSI. The checker exits after publishing the current local update state.

This is event-driven pull behavior rather than an always-running polling service.

## Hold And Previous Releases

A signed channel pointer can place a channel on hold. A later pointer can select a previously published immutable release while the channel sequence continues forward. The original release bytes remain unchanged.

## Documentation Site

The public documentation is released separately. A push to the documentation repository's `main` branch invokes its GitHub Pages workflow, builds Docusaurus in GitHub, and deploys the resulting static site.

## Public Release Record

A useful release record names the source revision, platform, version, artifact name, size, digest, publisher identity, channel, and promotion state. Private credentials and infrastructure identifiers remain outside public documentation.

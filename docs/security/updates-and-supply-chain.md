---
sidebar_position: 6
---

# Updates And Supply Chain

Security depends on more than the running executable. It also depends on how an installer was built, which components it contains, and whether the bytes a user installs are the bytes that were reviewed and published.

## The trust chain

A public release should have a traceable path from source to user:

1. Source is selected from the intended repository revision.
2. The application and provider components are built as release artifacts.
3. Release artifacts are signed by the project release authority.
4. The installer records what it contains and where it came from.
5. The published artifact is retrieved without silent replacement.
6. A signed channel pointer deliberately makes one immutable release visible to clients.
7. The installer applies only the selected features and reports the result.

This page describes the goal and the operator questions. It does not publish signing credentials, private storage details, internal object names, or deployment secrets.

## What users should verify

- Download from the project release location rather than an unknown mirror.
- Confirm the artifact name and version match the release notes.
- Keep the installer and its provenance information together.
- Read the install result and retain the log if the installation matters.
- Treat an unexpected signature, version, or publisher as a stop condition.
- Do not treat a successful MSI exit code as proof that provider messaging works.

## Why signed artifacts matter

Signing helps answer whether an artifact came from the expected release authority and whether it changed after signing. It does not prove that the software is bug-free, that a provider will accept a message, or that the user's machine is uncompromised.

Windows component signatures, signed release metadata, and signed XMPP actions are separate uses of cryptography. A valid installer signature cannot authorize a remote provider action, and a valid device action cannot publish a software release.

## Immutable Releases And Channels

AxiOwl publishes release bytes immutably and promotes signed channel pointers separately. This allows an internal release to be inspected before stable promotion. Clients verify the channel pointer, release description, component and provider-package metadata, and downloaded bytes before publishing verified local update state.

Provider packages have their own revisions. A provider package can be pulled and explicitly applied without treating it as permission to overwrite another provider or silently replace the core product. See [Update Publication And Pull Updates](../release/update-publication-operator-guide.md).

## Updates are not permission to widen scope

An update should preserve feature selection and ownership boundaries. It should not silently enable an unchecked provider, copy provider credentials, or replace unrelated extensions. A complete [Uninstall then Uninstall-install](../installer/README.md) lifecycle is the documented product vocabulary for replacing an installation; public docs do not promise an invisible repair or downgrade mode.

## Reporting a suspicious release

Do not install an artifact that has a mismatched signature, unexpected publisher, or unexplained component. Preserve the release metadata and contact the maintainer through a private security channel.

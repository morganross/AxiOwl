---
sidebar_position: 1
---

# Current Product Status

Last repository and public-site reconciliation: **August 12, 2026**.

This page is the public baseline for interpreting every other status statement. AxiOwl changes quickly, and several older pages once treated source code, a signed package, and a completed live workflow as the same thing. They are not the same.

## Evidence Vocabulary

| Term | Meaning |
|---|---|
| Designed | A reviewed product direction exists, but current source may not implement it. |
| Implemented | Current source contains the behavior at the named component boundary. |
| Packaged | A distributable artifact contains the component. |
| Signed | The inspected artifact has release-signing evidence. |
| Installed | The artifact completed its supported installation lifecycle on a named class of system. |
| Deployed | A service is running in an environment; this says nothing about an end-user journey by itself. |
| Demonstrated | A current end-to-end workflow reached the stated final boundary with attributable evidence. |
| Supported | The operation has current product, installation, and end-to-end evidence appropriate to its risk. |
| Experimental | The path is usable for controlled work but remains sensitive to private provider behavior or incomplete release evidence. |

These terms are cumulative only when the evidence says so. "Implemented" does not imply "packaged." "Deployed" does not imply "demonstrated."

## Current High-Level Baseline

| Product area | Strongest current evidence | Important remaining boundary |
|---|---|---|
| Windows desktop | Current main source, signed MSI evidence, eleven isolated provider packages, and internal Uninstall then Uninstall-install evidence | Not every provider operation has been re-demonstrated against the newest artifact |
| Linux x86-64 desktop | Current main source, Debian packaging, detached-signature evidence, and an internal install | The protected client was not started without customer-authorized runtime/admission state |
| macOS desktop | Native Swift source, an unsigned package, and local GUI launch evidence | No signed/notarized public release; several provider and network surfaces remain preview-level |
| iPhone | Native SwiftUI source and simulator-build work | No App Store/public distribution; protected messaging remains unavailable until the full Apple runtime is linked |
| Android | Native source, secure onboarding/storage work, and local build records | No public release; production protected connection remains fail-closed until all required native and live-server bindings are available |
| A2A | Current main client/server source; Windows package contains separate server and user-broker features | Streaming subscriptions remain unimplemented; current external interoperability evidence is not universal |
| Secure XMPP | Shared security library, Windows/Linux clients, Windows/Linux servers, and deployed cloud server evidence | The site does not claim a current complete encrypted endpoint-to-provider journey |
| License entitlement | Purpose-separated licensing service and local entitlement verification | A license is optional feature state, not account, device, pool, or messaging authority |
| Account/pool and device trust | Separate service source and device-trust deployment evidence | Current deployment and client-admission proof must be evaluated separately from source completion |
| Updates | Signed Windows artifacts, provider packages, signed release metadata, and pull-check behavior | Automatic core download/stage/apply is not claimed |

## Version Reality

The repository contains more than one version-bearing file because core releases and provider packages are independently versioned, and build output can lag current source. At this review, the Windows release-identity ledger reaches `3.0.133`, while older signed artifacts and component version files remain in the workspace as evidence from earlier builds.

Therefore:

- use a release manifest to identify a Windows release;
- use the provider package manifest to identify a provider package;
- do not infer the newest signed installer from a development `version.json` alone;
- do not infer deployment from a file existing in `release/` or `dist/`.

## What Is Not Claimed

The public site does not currently claim:

- universal provider support across every operation and operating system;
- a public production release for macOS, iOS, or Android;
- an end-to-end encrypted production journey merely because E2EE source exists;
- invisible or automatic installation changes to unselected providers;
- background polling as the normal local provider workflow;
- unattended core updates;
- that an acceptance receipt is provider completion proof.

## How To Use This Page

Read the operation-specific matrices next. They refine this baseline but must not contradict it:

- [Provider Support Matrix](provider-support-matrix.md)
- [Platform Support Matrix](platform-support-matrix.md)
- [Protocol Support Matrix](protocol-support-matrix.md)
- [Installer Behavior Matrix](installer-behavior-matrix.md)

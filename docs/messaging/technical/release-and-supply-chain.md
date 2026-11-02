---
title: "Release engineering and supply-chain boundaries"
slug: /messaging/technical/release-and-supply-chain
description: "Canonical native scripts, producer identity, signed artifacts and independent release states."
---

# Release engineering and supply-chain boundaries

Source delivery, signing, artifact publication, installation and functional evidence must be reported separately.

## Build and publication stack

The native workflows use PowerShell, Bash and Python to coordinate Git source, platform compilation, packaging, signing and publication. Windows uses CMake/MSVC and MSI; Mac uses Swift/native tooling and PKG; Linux uses its native CMake/package toolchain and Debian media.

The canonical application entrypoints in reviewed source are the Windows and Linux release PowerShell scripts and the Mac release Bash script. This reference is not permission to execute them or an invitation to substitute a partial helper.

The shared native daemon/account producer has its own source and release identity. Consumers must acquire compatible verified source/artifacts under the supported producer contract.

## Verification chain

| Layer | Required evidence |
| --- | --- |
| Source | Exact application/producer revision and intended main branch |
| Channel metadata | Expected product, platform, channel, state and sequence |
| Release binding | Verified signed release and selected artifact identity |
| Provider package | Descriptor, declared payload hashes/sizes, protocol and ownership |
| Platform package | Applicable Authenticode, Developer ID/notarization or Linux release-signature checks |
| Installed result | Actual package/integration outcome and retained version |
| Functional result | Separately authorized observed behavior at the exact endpoint |

A checksum without trusted provenance is not publisher authentication. A signature without matching product/platform identity is not permission to install any bytes signed by anyone.

## Channels and component versions

Stable, Preview/internal and other channel names belong to the specific release workflow. Do not assume a provider channel label is the same as a full-product promotion flag.

Application, native runtime, provider worker, provider publisher version and documentation version can all differ. Promotion must not relabel unbuilt source or a failed integration as a released success.

## Publication safeguards

Keep signing material private; preserve signature/envelope, hash, descriptor, anti-replay, native ownership and shutdown checks. The Windows package must not bundle WebView2 runtime media or complete provider apps. Managed copies are derived locally from publisher installations under their provider/OS contract.

Browser/OS reputation submissions are separate one-time vendor reviews. They are not package signatures, a guarantee against future warnings or a desktop update subscription.

See [source status](source-and-release-status.md), [hot updates](provider-hot-updates.md), [installation](installation-and-removal.md) and [compatibility](compatibility.md).


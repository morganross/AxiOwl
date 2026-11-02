---
title: "Installation, warnings and removal"
slug: /messaging/technical/installation-and-removal
description: "Selected integration attempts, essential failures, preserved ownership and uninstall scope."
---

# Installation, warnings and removal

The installer must attempt every explicitly selected integration through its normal safe path. Discovery can recommend defaults; it cannot silently replace a selection with only currently ready integrations.

## Platform media

| Platform | Reviewed family | Boundary |
| --- | --- | --- |
| Windows x64 | Signed MSI and required runtime media | System Evergreen WebView2 is separately installed, not redistributed |
| Mac Apple Silicon | Signed/notarized PKG | Preserve managed-copy, profile and native identity boundaries |
| Linux amd64 | Application/runtime Debian media and release verification material | Keep matching components and source/access requirements together |

Mac/Linux require local shared-runtime packages. Windows remote hosting/Relay/A2A selections remain distinct from required package media and local application/account components.

## Outcomes

| Outcome | Meaning |
| --- | --- |
| Verified component installed | Its normal installation/readback finished |
| Completed with warnings | The independent attempt loop completed; named integrations remain incomplete |
| Integration safety refusal | Report the incomplete component and exact reason without an unsafe write |
| Essential failure | Required media/identity/elevation/package-engine failure or cancellation can prevent completion |

An internal diagnostic may use an error code while the installer presents an integration warning. Neither label may turn an unverified component into a successful receipt.

Independent healthy work is retained. A failed sibling does not justify rolling back every installed integration or claiming every selection worked.

## Provider setup

Depending on the surface, setup changes owned MCP configuration, a plugin/extension, bridge assets or a locally derived managed application. Publisher provider applications and accounts remain independently supplied.

A successful component installation does not prove provider login, loaded tools, correct model permissions or target delivery. Use the actual installed surface.

## Removal and recovery

Choose the exact product/component and OS user. Consumer removal and shared-runtime removal have different ownership. Deleting Messaging is not a request to erase provider histories, whole profiles, accounts, arbitrary credentials or other runtime consumers.

Preserve data and unresolved operation records until their removal is explicitly intended. A fresh install must not treat partial/corrupt identity state as permission to generate a replacement identity.

Installation is a mutation; this handbook does not authorize running installers during a documentation-only task.

See [hot updates](provider-hot-updates.md), [data lifecycle](data-lifecycle.md), [operations](operations-and-recovery.md) and [release verification](release-and-supply-chain.md).


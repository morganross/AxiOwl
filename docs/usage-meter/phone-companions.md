---
title: Usage Meter On Your Phone
---

# Usage Meter On Your Phone

A Usage Meter companion shows your desktop's subscription and cloud-cost readings on a phone. It is a dedicated viewer with its own pairing relationship, independent of AxiOwl Mobile's agent and terminal controls.

This is useful when you want to see remaining capacity, the next reset, or reported spending without returning to the computer that owns the accounts.

## Which App Is Which?

| App | Its role |
|---|---|
| AxiOwl Mobile | Interacts with agent sessions on a paired host |
| Usage Meter Android companion | Receives approved usage snapshots from a desktop meter |
| Usage Meter iPhone companion | Receives compatible desktop meter snapshots |
| Earlier standalone Android Usage Meter | Collects provider readings on Android through its own account/runtime environment |

The Android companion is a separate app from the earlier collector and can exist alongside it. Use the exact product entry on [Downloads](https://axiowl.com/downloads/); do not assume all APKs named Usage Meter have the same role.

## Pair With A Desktop

1. Open the desktop Usage Meter's **Companion** area.
2. Create a fresh Usage Meter pairing offer.
3. Import that offer in the matching companion app.
4. Review and approve the pending device on the desktop.
5. Open the approved source on the phone.

Use a Usage Meter offer. A generic AxiOwl Mobile pairing link is for a different product and does not grant usage access.

## What Reaches The Phone

The desktop exports a limited snapshot: account labels and safe identity display, quota windows, reset information, observation times, and supported renewal or cloud-cost fields.

It excludes provider credentials, raw provider responses, terminal output, local config paths, and unrelated desktop state. The phone does not need provider login buttons or a provider CLI to display those readings.

The connection grants usage-reading access. It does not grant permission to run a terminal, edit files, control agents, or sign in to providers.

## Keep Desktop Sources Distinct

A paired desktop is the source of its readings. The same provider account observed on two computers remains two source-scoped views unless the application explicitly offers an aggregate.

The phone follows complete snapshots from the approved source. When an account is removed on the desktop, the updated source snapshot determines what remains visible.

## Fresh, Stored, And Disconnected

The observation time comes from collection on the desktop. Reconnecting the phone does not refresh the provider.

Android can retain an encrypted offline copy with its stored or disconnected state. The current iPhone companion clears current readings on disconnect or backgrounding until a new snapshot arrives. Both keep freshness separate from connection status.

Leave the desktop running and reachable when you need continuing readings.

## Platform Compatibility

Use the companion release intended for the desktop source. The Windows/Android and Mac/iPhone implementations have distinct snapshot capabilities, particularly for cloud-cost data. Shared relay encryption does not make every product-version combination interchangeable.

The app negotiates what the source can supply. A chart appears from genuine compatible readings; an absent field is not a zero amount.

## Android's Current Reading Views

The 0.5.3 Android companion includes quota details, reset countdowns, and supported bar, line, and calendar views. Historical quota points come from readings actually observed while the app runs; the app does not manufacture earlier quota history.

Cloud views preserve source, currency, period, and cost basis. Daily bars can show the complete reported range, including the current Scaleway thirty-day series. Service breakdowns appear only where the supplied amounts reconcile to that period. Missing days are not filled with zero spending, and signed credits are not turned into positive charges.

The recorded Windows 1.0.32 to Android 0.5.3 physical-device flow includes normal desktop approval, fresh quota delivery, OCI and Scaleway daily charts, desktop refresh delivery while the phone stays open, and automatic reconnect after normal app reopen. No second pairing or provider login was needed for that reopen.

These are capabilities of that paired product combination. They do not imply that the phone collected the readings or that every cloud/provider account has been connected.

## Apple Distribution

The Apple companion uses its own platform app, protected identity, and compatible desktop payload. Obtain the distribution listed for your device and follow its setup. A prepared signed IPA is an artifact; use an actual installed app and approved source for current readings rather than assuming another phone's state applies to yours.

## Remove Access

Revoke the device from the desktop companion controls when it should no longer receive readings. Unpairing on the phone removes that local relationship and its retained source state according to the platform's controls.

For credential and account ownership, read [Usage Meter privacy](security-and-privacy.md).

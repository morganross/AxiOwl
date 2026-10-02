---
title: Accounts, Readings, And Reset Times
---

# Accounts, Readings, And Reset Times

A reading is useful only when you know which account it describes, where it came from, and when it was observed. Usage Meter keeps those details beside the allowance.

## Account Labels And Identity

The label is your name for a card. The provider identity comes from authenticated provider state. Renaming a card does not log it into another account or combine its allowance with another card.

Account profiles isolate application-managed provider state. Adding a second account should use its own login flow. Removing one card should not require clearing another account's provider configuration.

## Collection Methods

The provider set includes Codex, Antigravity, GitHub Copilot, Claude Code, Cursor, and OpenCode Go. The supported method depends on the platform and release.

On Windows, the canonical collection paths use provider-owned CLI interfaces for Codex, Antigravity, Copilot, Claude, and Cursor, and a dedicated subscription-key path for OpenCode Go. A browser involved in login does not necessarily mean the quota itself was collected from a web page.

Other platform paths can expose WEB, CLI, or desktop-derived readings. Preserve the method label when comparing them. Two observations for the same provider are not automatically independent allowances that can be added together.

OpenCode Go has a narrower multi-account path where provider-issued identity is unavailable. Use the supported card model rather than treating arbitrary key labels as confirmed distinct users.

## Quota Windows

Read every window independently. A provider can limit several kinds or periods of work at once.

| Field | What it means |
|---|---|
| Used | The reported portion already consumed |
| Remaining | Available portion, reported or derived from a reported used percentage |
| Reset time | When that specific allowance window renews |
| Window label | The provider's meaning for the pool or duration |
| Observed time | When Usage Meter obtained the reading |
| Method | The provider interface that supplied it |

A remaining percentage derived from used percentage is a mathematical complement. It is not another independent provider observation.

## Reset And Renewal Are Different

A quota reset replenishes a usage window. A subscription renewal belongs to the billing arrangement. A weekly reset does not tell you when the next subscription payment occurs.

When renewal information is available, it has its own source and date precision. A date-only value should remain a date; it should not acquire an invented time of day.

## Freshness

A provider observation and a phone connection have different clocks. Receiving a snapshot now does not make its underlying reading new.

Current readings retain their collection times. Historical or stored views retain theirs too. A reconnect, theme change, or dashboard refresh must not be read as evidence that the provider was queried again.

If a current reading is unavailable, the app keeps that state visible instead of drawing an assumed full allowance. Historical charts, where offered, remain useful for looking back but should be read with their historical labels.

## Make A Better Routing Decision

Compare accounts with the kind of work in mind. A task that needs a long uninterrupted window may fit a different account from a short review. Consider both capacity and the provider's suitability for the work.

The meter informs your decision. It does not alter the provider's limits or automatically reroute a running conversation.

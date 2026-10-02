---
title: AxiOwl Usage Meter
slug: /usage-meter
---

# AxiOwl Usage Meter

AxiOwl Usage Meter helps you see the capacity you have already paid for. It brings subscription allowance, reset timing, account identity, and reported cloud costs into one place so you can choose where the next task should run.

It is an independent product. You do not need AxiOwl Messaging or AxiOwl IDE to use the desktop meter.

## Two Views Of Usage

**Subscription usage** answers: how much of this provider's reported allowance has been used, what remains, and when does the window reset?

**Cloud Costs** answers: what spending has the cloud provider reported for the displayed account, period, and currency?

Those values are deliberately separate. A quota bar is not an invoice. A reported hourly cost is not a forecast of the next hour. A missing amount is not a zero bill.

## Accounts Remain Separate

Each account card retains its provider identity and collection method. You can label cards for convenience without changing the account they represent.

Where a provider supports multiple isolated accounts, their credentials and readings remain separate. A provider that does not return enough identity information can have narrower account support. [Accounts and readings](accounts-and-readings.md) explains how to read the cards.

## Plan Work Around Capacity

Before starting a long session, look at the relevant provider's current windows and reset times. A short-window allowance and a weekly allowance can both affect whether a task has room to finish.

Use the readings to inform your choice in the provider app or IDE. Usage Meter observes capacity; it does not silently move your conversations, spend unused allowance, or switch the account running a task.

## Cloud Costs

The desktop cloud-account code includes OCI, AWS, Azure, and Google Cloud connections. Each needs an explicitly selected account and the provider's billing access. The options available in your installed platform release determine what you can add.

Cloud collection is manual. The view keeps currencies, source methods, reporting periods, and freshness visible. Read [Cloud Costs](cloud-costs.md) before connecting an account, particularly when the provider charges for billing queries.

## Phone Companions

The current companion design displays readings from a paired desktop. Provider authentication and collection stay on that computer. The phone receives a limited encrypted snapshot and shows the desktop source and observation time.

The Android companion is a separate application from the earlier standalone Android collector. The iPhone companion also uses desktop-provided readings. [Phone companions](phone-companions.md) explains the distinction and setup.

## Find The Right Guide

- [Install and connect](getting-started.md)
- [Accounts, quota windows, and freshness](accounts-and-readings.md)
- [Cloud accounts and reported costs](cloud-costs.md)
- [Phone companions](phone-companions.md)
- [Privacy and account control](security-and-privacy.md)

Use [Downloads](https://axiowl.com/downloads/) for the package and channel currently offered for your device. Desktop and mobile releases are published independently.

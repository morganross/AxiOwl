---
title: Install And Connect Usage Meter
---

# Install And Connect Usage Meter

Choose **AxiOwl Usage Meter** for your computer on [Downloads](https://axiowl.com/downloads/). The desktop app collects readings locally and presents a dashboard. The companion app on a phone displays readings from an approved desktop source.

## Install The Desktop App

Use the package for your operating system and selected release channel. Windows uses its Usage Meter MSI; macOS and Linux have their own platform packages.

Open Usage Meter after installation. Its local dashboard and background collection belong to Usage Meter, independently of other AxiOwl applications. You do not need to install the Messaging daemon to create a Usage Meter account.

## Add A Subscription Account

Open **Logins** or **Providers**, depending on the platform interface. Choose the provider and the method offered by the application. Give the card a useful label, then follow its login flow.

The provider may use a browser, device authorization, its installed CLI, or a subscription key. These are different connection methods. Complete the flow shown for that card rather than pasting credentials into another provider's field.

Some account methods require a provider CLI. Use the app's offered install action where present, or the provider's normal installation instructions. Desktop provider tools remain separate from a phone companion.

## Read The First Observation

Return to the usage or graphs view. A connected card shows the identity and quota windows returned through its configured method. Look at the observation time as well as the number.

Several windows can apply to one account. A provider may report a short rolling window and a weekly window, or separate pools for different kinds of work. Read each window by its label.

A card with no current reading needs attention to its account status. It should not be interpreted as unused capacity.

## Add Another Account

Create a separate card and sign it in through that card's isolated account flow. A different label on the same credential does not make it a second subscription.

Keep the returned provider identity visible while setting up multiple accounts. Some providers expose only a single supported identity path in a particular release; use the account operations the app offers.

## Add Cloud Costs Separately

Open **Cloud Costs** and manage cloud accounts there. Select the actual profile or billing scope, authorize the connection, and request a manual refresh.

A cloud account is separate from a subscription card. A Google model-provider login, for example, does not automatically authorize a Google Cloud billing export. [Cloud Costs](cloud-costs.md) lists the connection requirements.

## Pair A Phone

Use the desktop **Companion** area to create a Usage Meter pairing offer. Open the matching Usage Meter companion, import the offer, and approve the device on the desktop.

The phone then receives allowed readings. It does not need the provider CLIs or account tokens. See [Phone companions](phone-companions.md) for the current platform combinations and connection behavior.

## Daily Use

Keep the desktop available while you want fresh collection and companion updates. Review reset times before assigning long tasks. Refresh cloud costs deliberately, and keep the displayed period and currency in view when comparing spending.

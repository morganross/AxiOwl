---
title: Cloud Costs
---

# Cloud Costs

Cloud Costs puts provider-reported spending beside subscription usage. It helps you understand which account and services produced a charge while preserving the period, currency, and source of the amount.

The current Windows source includes five cloud-account paths: OCI, AWS, Azure, Google Cloud, and Scaleway. Choose from the options exposed by your installed release. An account path in source is not a claim that all five are configured on your computer or present in every desktop and phone release.

## Connect The Account You Intend

Open **Cloud Costs** and then the cloud-account management view. Local discovery can identify existing CLI installations and profile metadata. It does not sign in, select a default cloud account, or authorize billing requests on your behalf.

Select the exact profile or billing scope. Activate the account through the app's explicit action, then read its collection and consent settings. You can request a manual refresh; eligible active accounts also use the current release's scheduled collection.

| Provider | Account selection | Reported cost source |
|---|---|---|
| OCI | Selected config file and API-key profile | Usage API; an independent CLI observation can also be shown |
| AWS | Named AWS CLI profile and account | Cost Explorer, scoped to that account |
| Azure | Selected CLI configuration, tenant, and subscription | Cost Management for that subscription |
| Google Cloud | Selected account, billing account, query project, and existing export table | BigQuery billing-export data |
| Scaleway | Dedicated API credential bound to the selected organization | FinOps interval allocations and separately labeled monthly consumption |

Provider credentials remain in their selected local stores. Usage Meter records the binding needed to read the account; it does not create cloud resources or change your default CLI account.

## Access Requirements

Use credentials authorized for the selected billing scope. AWS needs Cost Explorer access. Azure needs the corresponding subscription cost-reading permissions. Google Cloud needs access to the billing account and export table, plus permission to run the query. OCI needs the relevant identity and usage access.

Google Cloud billing export must already exist. The meter does not create the dataset or enable export for you.

Scaleway uses the app's dedicated credential controls and organization binding. A Scaleway CLI installation is not required for that path. Supply billing access for the organization you intend to read; a similarly named project or account is not a substitute for the bound organization.

AWS Cost Explorer requests and Google BigQuery scans can incur provider charges. Their connection paths require deliberate consent, and Google queries use a configured scan budget. Use the current provider billing terms when choosing that budget.

## Manual And Scheduled Collection

Cloud collection is separate from subscription collection. The current Windows scheduler collects eligible enabled cloud accounts at provider-specific intervals. Its account state records the next refresh and collection failures; a manual refresh remains an explicit action.

AWS and Google Cloud keep separate consent for automatic billable queries. Permission for one manual query should not be read as permission for repeated scheduled queries. Review the automatic setting for the exact account before enabling that use.

Opening the dashboard, reconnecting a phone, or receiving a snapshot does not itself mean a new cloud billing query occurred. The meter's observation time tells you when collection actually happened.

After refreshing, read the observed time and the data-through boundary. Cloud billing data can arrive after the actual resource activity. The most recently reported hour is not necessarily the current hour.

## Compare Like With Like

Keep the displayed period and currency attached to each amount. Daily history, hourly history, and a billing month are different measurements.

OCI exposes hourly and daily observations. AWS, Azure, and Google Cloud use their own reported periods. Scaleway supplies interval-based allocations as well as a separate monthly consumption view. Read the period and cost basis shown by your version instead of extrapolating a chart into an invoice or a future spend rate.

API and CLI readings of the same account are separate observations, not amounts to add. A partial source does not become a complete total. Provider credits retain their sign; they are not turned into positive spending slices.

## Charts And Breakdowns

Cost-over-time charts use the reported periods available in the snapshot. Service breakdowns belong to the matching period and currency. A missing service breakdown leaves that view unavailable rather than inventing an unnamed share.

An empty provider response means no rows were reported for the query. It is different from a provider explicitly reporting a numeric zero.

## Scaleway's Two Billing Views

Scaleway FinOps can allocate raw charges into a requested interval. A daily or hourly bar made from that response is a provider allocation, not a measurement of instantaneous spending. Keep that label with the chart.

The separate monthly consumption view has its own period and update time. Its current source describes consumption excluding tax and discounts, with discount information separate. Interval allocation, rounding, month-to-date consumption, and a final invoice can therefore differ without being interchangeable numbers.

Do not subtract an unrelated credit, combine currencies, or replace an unavailable interval series with the monthly value. The view preserves those distinctions so you can understand which question each amount answers.

## Phone Views

A compatible Usage Meter companion can display the cloud fields exported by its paired desktop. The phone does not contact the cloud provider or trigger cloud refresh merely by reconnecting.

The desktop remains the source for billing identity, collection, and freshness. See [Phone companions](phone-companions.md) for compatible snapshot capabilities.

Windows 1.0.32 and Android companion 0.5.3 have a recorded physical-device flow displaying OCI and Scaleway daily readings, with new desktop observations delivered without reopening the phone. That describes those two configured feeds, not all five cloud paths.

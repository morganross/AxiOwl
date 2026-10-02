---
title: Cloud Costs
---

# Cloud Costs

Cloud Costs puts provider-reported spending beside subscription usage. It helps you understand which account and services produced a charge while preserving the period, currency, and source of the amount.

The desktop implementations include OCI, AWS, Azure, and Google Cloud account paths. Choose from the cloud options exposed by your installed release. The website's earlier OCI-only Windows description covers the first integration; newer source and Windows releases add the other account forms and collection routes.

## Connect The Account You Intend

Open **Cloud Costs** and then the cloud-account management view. Local discovery can identify existing CLI installations and profile metadata. It does not sign in, select a default cloud account, or authorize billing requests on your behalf.

Select the exact profile or billing scope. Activate the account through the app's explicit action, then request a manual refresh.

| Provider | Account selection | Reported cost source |
|---|---|---|
| OCI | Selected config file and API-key profile | Usage API; an independent CLI observation can also be shown |
| AWS | Named AWS CLI profile and account | Cost Explorer, scoped to that account |
| Azure | Selected CLI configuration, tenant, and subscription | Cost Management for that subscription |
| Google Cloud | Selected account, billing account, query project, and existing export table | BigQuery billing-export data |

Provider credentials remain in their selected local stores. Usage Meter records the binding needed to read the account; it does not create cloud resources or change your default CLI account.

## Access Requirements

Use credentials authorized for the selected billing scope. AWS needs Cost Explorer access. Azure needs the corresponding subscription cost-reading permissions. Google Cloud needs access to the billing account and export table, plus permission to run the query. OCI needs the relevant identity and usage access.

Google Cloud billing export must already exist. The meter does not create the dataset or enable export for you.

AWS Cost Explorer requests and Google BigQuery scans can incur provider charges. Their connection paths require deliberate consent, and Google queries use a configured scan budget. Use the current provider billing terms when choosing that budget.

## Refresh Is Manual

Subscription collection can follow its own schedule. Cloud-cost refresh is a separate, deliberate operation. Opening the dashboard or receiving a phone snapshot does not itself mean a new cloud billing query occurred.

After refreshing, read the observed time and the data-through boundary. Cloud billing data can arrive after the actual resource activity. The most recently reported hour is not necessarily the current hour.

## Compare Like With Like

Keep the displayed period and currency attached to each amount. Daily history, hourly history, and a billing month are different measurements.

OCI exposes hourly and daily observations. The other cloud collection routes use provider-reported daily periods. Read the period shown by your version instead of extrapolating it into an invoice or a future spend rate.

API and CLI readings of the same account are separate observations, not amounts to add. A partial source does not become a complete total. Provider credits retain their sign; they are not turned into positive spending slices.

## Charts And Breakdowns

Cost-over-time charts use the reported periods available in the snapshot. Service breakdowns belong to the matching period and currency. A missing service breakdown leaves that view unavailable rather than inventing an unnamed share.

An empty provider response means no rows were reported for the query. It is different from a provider explicitly reporting a numeric zero.

## Phone Views

A compatible Usage Meter companion can display the cloud fields exported by its paired desktop. The phone does not contact the cloud provider or trigger cloud refresh merely by reconnecting.

The desktop remains the source for billing identity, collection, and freshness. See [Phone companions](phone-companions.md) for compatible snapshot capabilities.

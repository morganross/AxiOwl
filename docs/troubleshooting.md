---
sidebar_position: 11
slug: /troubleshooting
title: Help And Everyday Questions
---

# Help And Everyday Questions

Start with the product and action you are using. A Messaging receipt, an IDE account, a Mobile connection, and a Usage Meter reading each describe a different state.

## Which App Should I Install?

Use [Downloads](https://axiowl.com/downloads/) and select the product first.

- Messaging connects agents in provider applications.
- IDE supplies a desktop conversation and project workspace.
- Mobile controls agents on a paired computer.
- Usage Meter displays account capacity and reported cloud spending.
- Usage Meter companions display a desktop meter's readings on a phone.

A shared brand does not mean the installers or pairing links are interchangeable.

## I Sent A Message. Where Is The Answer?

Read the delivery result and the target's actual session. Ask the recipient to reply through AxiOwl MCP when you need a correlated response.

An acceptance receipt records the request entering AxiOwl. The recipient still needs to run and answer. Keep the message's sender, target, and correlation information when following up.

Refresh discovery if the provider session or workspace changed. Choose the exact provider surface, particularly when the same brand has desktop and CLI entries.

## An SSH Computer Appears In The List But A Message Cannot Reach It

A saved chat list can outlive a network connection. Confirm that the destination is running, its SSH service is reachable from the sending computer, and its SSH alias still points to the intended address. A temporary firewall allowance can expire between registry synchronization and the send.

Replies need the reverse connection too. Keep the full computer-qualified chat name and `(SSH)` ending; removing them can select a local or relay route instead. Follow [Messaging over SSH](ssh.md).

## The Request Stays At `worker_started`

This means AxiOwl admitted the request and started its background operation. It does not establish that the provider received the message or returned an answer. Follow the existing operation status, and read the sender's and recipient's recent chat history before sending anything again.

On Windows 3.1.408, one recorded Mac-to-Windows Copilot CLI exchange reached Copilot successfully, but Copilot's outgoing answer remained `worker_started` and never reached the Mac chat. The recorded process had exited without publishing a result. That reply failure remains unresolved; see the [version-specific observation](ssh.md#windows-copilot-reply-limitation).

Include the operation reference and the versions of both computers when reporting a stuck exchange. Do not clear provider credentials or the whole registry to conceal its pending state.

## The Agent Does Not Show AxiOwl Tools

Open the provider environment that received the integration. Confirm that the selected application or managed copy has loaded its current MCP configuration or bridge.

A provider can require a new session or application restart to load changed tools. Follow its configuration status rather than treating the presence of a package file as an active MCP session.

## My IDE Account Is Signed In. How Do I Choose A Model?

Read **Billed to**, **Model**, and **Brain** together. The model must be available through that account and compatible with the chosen runtime.

A provider CLI login, AxiCode direct connection, and AxiCode proxy connection are separate routes. Use the account setup for the route you selected. See [Models and accounts](ide/models-and-accounts.md).

## Did Changing The Brain Move My Original Chat?

A confirmed brain change can create a destination session with transferred context. The source remains separately owned by its provider.

Open the destination history and continue there. A transcript transfer is not a transfer of all credentials, live processes, tool state, or filesystem contents.

## My Phone Is Paired But The Host Is Unavailable

Keep the host awake with its connection runtime running. For relay access, both devices need their route to the relay. For direct access, the selected endpoint must be reachable through the configured network.

Pairing identifies an approved relationship; it does not keep a powered-off computer online. Reconnection and provider readiness remain separate.

## Where Are My Files On Mobile?

File views refer to the selected host workspace. Mobile does not automatically clone the repository onto the phone.

Confirm the host and project before sending a path or opening a terminal. The same-looking folder on another computer can contain different files.

## Why Is A Usage Card Missing A Number?

Read the account identity, method, observation time, and current status. A missing value is not zero used or unlimited capacity.

A login may need attention, a method may be unavailable for that platform, or the provider may not have supplied the required current fields. Use the account's offered controls. Do not add another label pointing at the same credentials to represent a second account.

## Why Do Cloud Costs Look Delayed?

Cloud providers report costs for particular periods and can report them after resource activity. Read the displayed data-through time and currency.

Cloud collection can be manual or scheduled in the current Windows app. Review the exact account's eligibility and automatic-query consent. Opening a phone companion does not request a new provider billing query, and a recent connection time does not make an older cost observation current.

## My Phone Sees The Host But Not The IDE

The host runtime and IDE attachment are separate. Open the intended desktop IDE and read the host's IDE attachment and device-grant status. A successful phone pairing does not select or attach an IDE account.

Do not create another phone identity merely to refresh that application connection. Keep the approved relationship and follow the host's available controls.

## Is This Chat Running On The Phone Or Computer?

Read the selected mode and host. Native Goose phone apps can have a local agent loop and connected desktop sessions. Local provider setup belongs to the phone; desktop session credentials and project tools remain on the host.

Two conversations with the same title are not necessarily the same session. Keep the host, provider, workspace, and native session identity together when continuing work.

## I Reconnected. Should I Send The Task Again?

First return to the selected conversation and read its current state. The provider may have continued while the phone was disconnected. An unknown request outcome is not evidence that the request was never accepted.

Avoid duplicating file-changing work while the earlier result is unresolved. Keep the request or session details when asking for help.

## My Usage Meter Companion Reopened With Older Readings

The companion reconnects to its approved desktop source; it does not collect from providers. Read the observation time and the stored/disconnected/current label. Keep the desktop meter running and inspect its account status or collection controls there.

For a normal reopen, use the existing approved phone identity. A fresh offer is for a new pairing relationship, not a substitute for a desktop refresh.

## Why Does A Reset Date Not Have A Countdown?

A countdown needs an actual reset timestamp. A provider's date-only renewal field or an observation time should not acquire an invented time of day. Read the date and its source as supplied.

## Why Do Scaleway Charts And A Monthly Amount Differ?

The interval chart can be a provider allocation of raw charges, while monthly consumption has its own update time and treatment of tax and discounts. Read the cost-basis label, currency, and period. These are not interchangeable views of a final invoice. See [Cloud Costs](usage-meter/cloud-costs.md).

## Ask For Help

Include the product, operating system, version/channel, selected provider or connection, action, and visible status. Add only the relevant redacted log lines or screenshot.

Keep credentials, pairing links, private keys, complete account directories, and unrelated project content private. Use [Contact](https://axiowl.com/contact/) for support.

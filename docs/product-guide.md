---
title: Product Guide And Everyday Setup
slug: /product-guide
---

# Product Guide And Everyday Setup

AxiOwl is a family of applications, not one installer with several names. Start with the job you want to accomplish. Then choose the application, platform, account, and connection that belong to that job.

This guide brings those choices together. The individual product categories provide the detailed instructions.

## Choose The Job First

| Your goal | Product | Where the work happens |
|---|---|---|
| Ask another coding agent a question without copying between applications | AxiOwl Messaging | The recipient's existing provider session |
| Work in a dedicated conversation and project window | AxiOwl IDE | The selected desktop runtime and workspace |
| Continue a computer's agent session from a phone | AxiOwl Mobile, connected-host mode | The paired computer |
| Run an agent through a native phone application | AxiOwl Mobile's native Goose applications | The phone's local agent runtime; inference follows the selected model connection |
| Compare subscription allowance and reset timing | AxiOwl Usage Meter | The application collecting the provider reading |
| Read a desktop meter's usage and cloud costs on a phone | Usage Meter companion | Collection on the desktop, display on the phone |
| Address a standards-based agent service | Messaging's A2A interfaces | The selected A2A endpoint |

Axiom Messaging is also a title on the product website. It describes agent-to-agent coordination; these guides do not introduce a separate Axiom executable, installer, or account system.

## Messaging: Give Work An Address

Messaging starts with an actual destination: a provider, a surface, a session, and sometimes a remote computer. A friendly chat name helps you find that destination. It does not replace the underlying identity.

Prepare the provider in the user account that owns it. Install the relevant AxiOwl integration, let the provider load its tools, and refresh discovery. Choose the conversation that should receive the request.

A useful message states the question, the relevant context, and how the recipient should reply. You can ask for a reply through AxiOwl MCP without asking the recipient to rebuild your entire working context.

**What the result means:** an acceptance receipt says the request entered AxiOwl. A delivery result describes the handoff. A reply is the recipient's answer. Do not treat those as three names for the same event.

Read [Messaging setup](getting-started.md) and [Messaging workflows](messaging-workflows.md).

## IDE: Keep The Execution Route Visible

The IDE combines a conversation, a composer, session navigation, and project views. Its three route choices answer different questions:

- **Billed to:** which configured account supplies model access?
- **Model:** which available model receives the request?
- **Brain:** which agent runtime runs the tools and working loop?

A provider CLI and AxiCode are different brains, even when they can use a model with the same name. A local proxy is a connection component, not another brain.

Open the intended project before giving the agent a file-changing task. Sign in through the route you actually want, then choose an available model and compatible brain. A saved transcript can remain readable when that account is not currently ready to send.

**What the result means:** a complete conversation turn includes the instruction and the actual assistant response in the selected session. A loaded history or a signed-in account is useful, but it is not itself a new response.

Read [IDE setup](ide/getting-started.md), [Models and accounts](ide/models-and-accounts.md), and [Sessions and workspaces](ide/sessions-and-workspaces.md).

## Mobile: Decide Where The Agent Runs

In connected-host mode, the phone is the interface and the computer is the workspace. Repositories, provider tools, and desktop provider credentials stay on that computer. The phone uses only the capabilities advertised by the approved host.

The native Goose applications add a different possibility: an agent loop running inside the phone app. A locally configured model connection belongs to that phone. It is not inherited from desktop pairing. Native local tools also differ between Android and iPhone.

Choose the mode offered by the application you installed. A local phone chat is not the same session as a desktop chat with the same title.

**What the result means:** pairing approves a device relationship. Connecting makes a host reachable. Opening a session selects work. A provider response is a further event. A reachable host may still have a provider waiting for sign-in or an IDE that has not attached to the shared runtime.

Read [Mobile setup](mobile/getting-started.md) and [On-device agents](mobile/on-device-agents.md).

## Usage Meter: Read The Source Alongside The Number

A subscription card identifies an account, a collection method, a quota window, and an observation time. Cloud Costs identifies a billing account, period, currency, and cost source. They answer different questions.

Create an account card through the offered login flow. Use separate cloud-account controls for cloud billing. Where automatic collection is available, read its schedule and consent settings; a phone reconnect is not a provider refresh.

The phone companion receives display snapshots from its approved desktop source. It does not receive provider credentials or permission to control coding agents.

**What the result means:** a current reading is a provider observation with a known source and time. A missing reading is unknown, not zero. A cloud consumption chart is not necessarily a final invoice.

Read [Usage Meter setup](usage-meter/getting-started.md), [Cloud Costs](usage-meter/cloud-costs.md), and [Phone companions](usage-meter/phone-companions.md).

## The Components Behind The Apps

Some applications share connection infrastructure. That does not make the infrastructure a sixth consumer product.

| Component | Responsibility | Not its responsibility |
|---|---|---|
| Host daemon or shared runtime | Paired connections, host capabilities, and routing to local app integrations | Choosing a model account or replacing the IDE's agent loop |
| Hosted relay | Carry encrypted traffic between connected endpoints | Approving a phone, running tools, or deciding what an agent may do |
| Provider worker or bridge | Integrate the selected provider surface | Represent every surface of that provider brand |
| Installer helper | Carry out the selected application's installation work | Grant provider entitlement or silently choose an account |
| Local model proxy | Connect an agent loop to its configured model route | Become the brain or authorize unrelated credential sharing |

The current native Windows daemon producer supplies a binary bundle. The consuming applications own installation and service integration. Users should follow their application's setup, not assemble a competing daemon installation from developer files.

## Accounts And Approval Are Different Relationships

Your AxiOwl website account, a model-provider login, a cloud billing profile, a phone pairing, and an SSH identity each serve a separate purpose. One is not evidence that the others are configured.

Use dedicated controls for each relationship. A Usage Meter approval grants reading access, not terminal access. A desktop provider login does not automatically sign in a local phone agent. A workspace name is not a filesystem permission.

## Plan A Useful Workflow

Start with a real project and a clear owner for the work. Use the IDE or provider application for the main conversation. Bring in another agent through Messaging when a focused question benefits from another specialist. Use Mobile to stay involved without moving the desktop workspace. Consult Usage Meter before assigning work that needs a long allowance window.

These products can complement one another, but none requires you to adopt the entire family. Install the pieces that solve your current problem.

## Find Your Platform

[Products and platforms](platforms.md) lists thirteen product/platform targets. A target is a product boundary, not a claim that every feature or provider route is identical on all devices. [Downloads](https://axiowl.com/downloads/) remains the place to choose the actual offered artifact and distribution method.

For source locations and implementation responsibilities, see the [Architecture and source guide](developer.md).

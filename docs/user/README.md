# AxiOwl User Guide

AxiOwl is a local-first communication and normalization layer for AI work sessions. It helps you address unlike tools in a consistent way while using the delivery method that each provider surface actually supports.

You can use AxiOwl to send a focused request from one AI session to another, collect the response, and retain evidence about who replied and which request the reply belongs to. Current main also supports A2A endpoints and inter-node communication for workflows that extend beyond one local provider window.

## The Everyday Workflow

1. Install the AxiOwl core and only the provider integrations you intend to use.
2. Let AxiOwl discover sessions that those providers already know about.
3. Select a target by its human-readable name or stable provider/session identity.
4. Send a message, CLI request, MCP request, or A2A task.
5. Keep the acceptance receipt as the start of the audit trail.
6. Confirm the provider reply or completed A2A task for end-to-end proof.

## Why Use It

AxiOwl is useful when work spans more than one AI surface. One session can remain responsible for a project while another investigates a narrow issue, reviews code, tests a different provider, or works from another node. The response returns through a normalized path instead of depending on manual copy-and-paste between unrelated tools.

That can reduce duplicated explanation and token use. The coordinator can send only the task and required context, while the specialist returns only the relevant result. AxiOwl provides the addressing, transport, correlation, and identity evidence around that exchange.

## Installation

The Windows MSI installs the core runtime for the current user and offers provider-specific features. A feature may install MCP configuration, an extension, a validated patch, a helper, or a service. A provider checkbox is not merely a label; it owns a specific installation contract.

Discovery should preselect only provider surfaces detected on the machine. Unchecked features should not patch, close, restart, configure, or remove that provider's files. The optional A2A service is separate and is not selected by default.

Read [Installer Behavior](../installer/README.md) before making provider selections.

## Sending A Local Message

The common CLI form is:

```powershell
axiowl send --to "Target chat name" --body "Message text"
```

Providers can send or reply through the `axiowl_send_message` MCP tool. The MCP path is especially important for replies because it can carry provider-owned sender/session identity and correlation metadata.

## A2A And Other Nodes

AxiOwl can expose selected desktop agents through A2A and call external Agent Card endpoints. It can also route to another AxiOwl node through direct HTTPS A2A, relay, or A2A over SSH. These are explicit network features with authentication and trust requirements; they are not silent fallbacks for a broken local provider.

Start with [A2A](../a2a/README.md) and [Inter-Node Communication](../inter-node/README.md).

## Reading Results

`accepted_by_axiowl` means the request entered AxiOwl's delivery pipeline. It is not proof that the target completed the work. A provider reply with correct metadata or a completed A2A task is the normal end-to-end proof.

Use [Receipts, Delivery, And Completion Proof](../concepts/receipts-vs-proof.md) when interpreting a test or support log.

## What Supported Means

Support belongs to a specific surface. A brand can have one supported surface and another target or experimental surface. The [Provider Support Matrix](../reference/provider-support-matrix.md) records current claims, while each [Provider Page](../providers/README.md) explains its delivery and installation method.

## Product Boundaries

- Windows is the primary complete product platform.
- Linux support is narrower and must be evaluated by package and provider surface.
- macOS is currently unsupported.
- XMPP implementation exists on a feature branch and is not part of current main.
- A2A streaming routes are declared but not implemented.
- A receipt never substitutes for a correlated provider reply or completed task.

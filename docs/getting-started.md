---
sidebar_position: 2
slug: /getting-started
---

# Getting Started

AxiOwl connects AI provider sessions, daemon-hosted agents, paired mobile clients, and standards-based A2A agents. Start with one local provider, complete one message round trip, and add connected features when you need them.

## 1. Choose The Experience

| Goal | Install or configure |
|---|---|
| Coordinate provider sessions on one computer | Core AxiOwl plus the selected provider integrations |
| Open desktop agents from Android or iPhone | An AxiOwl daemon on the host, then pair the mobile app |
| Expose or call standards-based agents | A2A Server, A2A Client, or an external Agent Card |
| Reach an operator-managed AxiOwl node | Direct A2A, A2A-over-SSH, or SSH Command Dispatch |

## 2. Install On Windows

The MSI discovers supported provider products and recommends matching integrations. Review the choices before continuing.

Core installation provides the local runtime, CLI, MCP server, mailbox, registry, discovery, logs, and AxiOwl-owned lifecycle. Provider selections can add a plugin, skill, MCP entry, bridge extension, metadata integration, or isolated worker depending on that provider.

Connected features are separate:

- **A2A Server** exposes selected agent endpoints.
- **A2A Client** installs the interactive user broker for provider-backed A2A work.
- **SSH Command Dispatch** enables configured command-line node routes.
- **AxiOwl Node daemon** is the recommended mobile host runtime and uses the installed Node environment.
- **AxiOwl native C++ daemon** is the native Windows daemon alternative.
- **No mobile daemon** keeps the installation focused on local provider, A2A, and SSH features.

## 3. Discover A Provider Session

Open a current provider session, then run discovery from AxiOwl. A registry entry keeps the friendly name together with the provider, surface, and exact provider-owned session identity.

Good project roles include Builder, Reviewer, Researcher, and Coordinator. The role is for people; the provider session ID remains the delivery address.

## 4. Send A First Message

Choose a current registry target and send a short request that asks for a reply through AxiOwl MCP. The request returns an AxiOwl receipt, and the provider response returns with sender and correlation information.

The basic loop is:

```text
discover -> resolve target -> send -> receipt -> provider reply
```

## 5. Read Status Correctly

| State | Meaning |
|---|---|
| Discovered | A provider or agent target was found and recorded |
| Accepted | AxiOwl accepted the operation |
| Delivered | The selected integration accepted the handoff |
| Replied | The provider session returned a correlated response |
| Task completed | An A2A task returned its terminal result and artifacts |
| Timeline completed | A daemon-hosted provider turn reached a terminal event |

Keep the run, message, receipt, task, host, and agent identifiers with important work so concurrent handoffs remain easy to distinguish.

## 6. Pair A Phone

When a daemon runtime is installed:

1. Open the **Mobile App** area on the host.
2. Ask the daemon to create a fresh pairing offer.
3. Scan the QR code or import the pairing link on Android or iPhone.
4. Approve the pending device on the host.
5. Open the paired host in the mobile app.
6. Choose a project, workspace, provider, and agent.
7. Send a turn and follow the live timeline.

The phone controls the agent through the daemon. Provider credentials, provider processes, project files, and the authoritative session remain on the host.

## 7. Continue From Here

- [Use Cases](use-cases.md)
- [How AxiOwl Works](how-it-works.md)
- [Providers](providers.md)
- [AxiOwl Mobile](mobile/README.md)
- [A2A And Connected Systems](a2a.md)
- [Installer](installer.md)

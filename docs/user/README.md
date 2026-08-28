# AxiOwl User Guide

AxiOwl gives local provider sessions, connected hosts, paired phones, and A2A agents a shared coordination layer.

## Local Workflow

1. Install the provider features you use.
2. Discover provider sessions.
3. Choose the exact provider and session target.
4. Send a message.
5. Follow the receipt and correlated provider reply.

## Mobile Workflow

1. Install the recommended Node daemon or native C++ daemon on the host.
2. Open **Mobile App** in the desktop interface.
3. Generate a pairing QR code or link.
4. Scan or import it on Android or iPhone.
5. Approve the pending phone on the host.
6. Open the paired host in the app.
7. Choose a project, provider, workspace, and agent.
8. Send a turn and follow the live timeline.

## Connected Targets

| Target | Route |
|---|---|
| Provider session on this computer | Local provider package |
| Agent on a paired AxiOwl host | Encrypted relay or direct daemon connection |
| External standards-based agent | A2A |
| Operator-managed AxiOwl node | Direct A2A or A2A-over-SSH |

## Account And Provider Boundaries

Website login, license entitlement, mobile pairing, relay connection, daemon host identity, and provider authentication are separate. Pairing a phone does not copy provider credentials from the computer.

## Reading A Mobile Result

The host daemon publishes the authoritative agent timeline. User text, assistant output, reasoning, tool calls, permissions, usage, errors, and completion arrive as ordered events for the selected agent.

See [Mobile And Connected Hosts](../mobile/README.md), [Follow A Message Through AxiOwl](../getting-started/how-to-read-status.md), and [Receipts, Delivery, And Completion](../concepts/receipts-vs-proof.md).

---
sidebar_position: 4
---

# Work Securely Across Devices

AxiOwl can connect approved devices so work can move between locations while provider access remains local to the destination machine.

For example, a laptop can ask a workstation to deliver a task to a provider session that already has the right repository, account, and local context. The provider credentials stay with the provider on that workstation.

## The Experience

```text
approved source device
  -> protected message
  -> secure routing service
  -> approved destination device
  -> local authorization
  -> destination provider session
  -> protected result
```

## Why This Is Different From Remote Desktop

Remote desktop gives one device visual control over another. AxiOwl sends a structured action to an approved endpoint and receives a structured result. The destination continues to own its local provider integration and authorization decision.

This is useful when:

- the destination machine has a large repository or specialized environment;
- a long-running provider session already has valuable context;
- a team wants a narrow message path instead of a full interactive desktop;
- a self-hosted or cloud XMPP server is the preferred routing point.

## Security By Layers

Protected device workflows combine several responsibilities:

- verified connection security;
- a distinct identity for each approved device;
- endpoint protection for message content;
- signed action details;
- receiver-owned permission checks;
- replay protection;
- a protected result path.

These layers let the routing service move the message while the destination endpoint remains responsible for local provider access.

Read [Trust And Encryption](../how-it-works/trust-and-encryption.md) and [Secure XMPP Transport](../xmpp/README.md) for more detail.

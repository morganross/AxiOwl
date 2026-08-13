---
sidebar_position: 2
---

# Encryption And Privacy

AxiOwl's secure-device path protects message content at the sending endpoint for the intended receiving endpoint. The routing service moves the protected envelope; the destination endpoint opens it and decides whether the requested local action is allowed.

## Content Journey

```text
source endpoint
  -> protect content for an approved destination
  -> route the protected envelope
  -> verify and open it at the destination
  -> authorize the action locally
  -> deliver the final message to the selected provider
```

The selected provider sees the final provider message because it performs the requested work. Endpoint protection is designed to protect the network journey, not to hide the request from its intended local processor.

## Separate Protection Layers

- **TLS** protects and authenticates the server connection.
- **Per-device transport identity** identifies the approved resource on that connection.
- **Endpoint encryption** protects message content between devices.
- **Signed action data** binds the operation and relevant identities.
- **Receiver authorization** controls the local provider handoff.
- **Replay protection** keeps one accepted action from becoming repeated new work.

Together, these layers create a secure coordination path with clear responsibility at every stage.

## Exact Online Delivery

Protected actions target one approved destination resource. Exact online delivery keeps the route purposeful and allows the sender to know which device is expected to receive the work.

## Privacy And Metadata

Content protection and metadata privacy are different concerns. A routing service can observe information needed to operate the route, such as connection timing, routing identifiers, destination availability, and envelope size.

Local endpoints and the selected provider see the information required to process the action. AxiOwl logs focus on correlation and status, and sensitive operational data belongs in protected local or service storage.

Read [What Each Boundary Owns](trust-boundaries.md) for the wider privacy model.

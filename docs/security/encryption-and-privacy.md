---
sidebar_position: 2
---

# Encryption And Privacy

The hosted relay connects a paired mobile app to its AxiOwl daemon without requiring the relay to understand provider prompts or agent timelines.

## Relay Content Path

```text
mobile app
  -> encrypt daemon-protocol frame
  -> relay routes opaque frame
  -> host daemon decrypts frame
  -> daemon works with the selected provider agent
  -> encrypted timeline event returns to the phone
```

The host daemon and mobile app see the content required for the user experience. The relay sees routing and operational metadata needed to connect them.

## Separate Protection Layers

- **Pairing** establishes which mobile identity the host trusts.
- **Transport security** protects the network connection to the relay or direct endpoint.
- **End-to-end relay encryption** protects daemon-protocol content across the hosted relay.
- **Host user context** keeps provider processes and credentials on the computer.
- **Provider permissions** remain part of the provider session controlled by the daemon.

## Direct Connections

Direct mode bypasses the hosted relay. The operator chooses the reachable daemon address and configures the route's network protection and authentication. Private networks, VPNs, and Tailscale are common choices.

## Visible Metadata

Connection infrastructure can observe metadata such as connection timing, route identifiers, availability, and encrypted frame size. The daemon stores host, agent, project, timeline, and pairing state needed for the product. The mobile app stores paired host profiles and connection methods.

## Provider Visibility

The provider on the host sees the turns delivered to its session and produces the resulting timeline. Encryption protects the route to the host; it is not intended to hide the request from the provider selected to perform the work.

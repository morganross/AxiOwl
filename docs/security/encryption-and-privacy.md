---
sidebar_position: 2
---

# Encryption And Privacy

AxiOwl's secure XMPP path is designed so message content is protected by the sending endpoint for the intended receiving endpoint. The routing server should handle the encrypted envelope and the metadata required to deliver it, not plaintext provider instructions.

## Content Path

```text
source endpoint
  -> protect message for an approved destination device
  -> route encrypted envelope through XMPP
  -> destination endpoint verifies and decrypts
  -> destination authorizes the requested action
  -> local provider receives the final provider-visible message
```

The provider necessarily sees the message delivered to it. Endpoint-to-endpoint encryption protects the network route; it does not hide a message from the local provider selected to process it.

## Separate Protections

- **TLS** protects the connection to the server and authenticates the server endpoint.
- **Per-device transport authentication** controls which resource may connect.
- **End-to-end message encryption** protects content between approved devices.
- **Signed action data** binds the requested operation and identities.
- **Receiver authorization** decides whether provider invocation is permitted.
- **Replay state** prevents a captured valid request from being used again.

None of these protections should be treated as a substitute for another.

## No Silent Plaintext Downgrade

When the protected runtime, trusted route, current device state, or server identity is unavailable, the protected action path fails. It does not send the same action as plaintext, switch to an alternate transport, or ask the server to synthesize an authorized request.

## Offline Behavior

The selected secure action path does not promise an offline message body queue, message archive, dead-letter body store, or sibling-device copy. If the exact destination resource is offline, the operation should fail before acceptance rather than storing sensitive content for later delivery.

## Metadata That Remains Visible

Even with content protection, a routing service can normally observe some combination of:

- connection times and duration;
- server and account routing identifiers;
- exact destination resource availability;
- message size and timing;
- success or failure at the transport boundary;
- public device/key-bundle publication state.

Local endpoints and providers can see more because they must process the message. Logs can also expose paths, session IDs, error details, and correlation IDs. Encryption is not a promise of zero metadata.

## Current Product Claim

The codebase contains the endpoint encryption, trust, authorization, and receipt boundaries described here. The public product has not yet published a current complete protected journey as demonstrated support. This page describes the implemented security model and the bar for that claim, not a declaration that every installed artifact already meets it.

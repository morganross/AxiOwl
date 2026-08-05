---
sidebar_position: 2
---

# Encryption And Privacy

Encryption is one layer of AxiOwl's security model. The goal is to protect message content and device-to-device trust without pretending that routing, provider state, or local computer state are private by default.

## The four protections to keep separate

### Transport protection

Authenticated transport protects a connection between an AxiOwl endpoint and the server or service it is using. It helps prevent an attacker from impersonating the endpoint or changing traffic in transit.

### Message protection

Message protection is about the content itself. The intended design is that only approved endpoints with the appropriate device keys can read protected content. A routing service may need enough information to deliver an encrypted envelope, but it should not be treated as the authority that creates or approves the action inside that envelope.

### Authorization

Encryption answers who can read content. Authorization answers whether a particular device is allowed to request a particular action. A message can be encrypted and still be rejected because the sender, target, device membership, policy, or request state is wrong.

### Replay protection

An old valid message should not become a new command merely because someone sends it again. AxiOwl records the state needed to recognize completed, rejected, or already-consumed requests and fails closed when the request cannot be safely classified.

## What the server may still learn

Encryption does not hide all metadata. Depending on the deployment and provider surface, a server or local service may see routing information such as connection state, endpoint identifiers, message size, timing, or delivery outcome. Public documentation does not promise zero metadata. It promises a deliberately limited authority boundary and explains the remaining exposure.

## What remains local

Provider login state, provider auth tokens, local chat history, and local operating-system credentials remain under the control of the provider or operating system. AxiOwl does not need to publish those secrets to route a message. Users should still protect the computer on which AxiOwl and the provider run.

## Practical privacy expectations

- Use a device you control and keep the operating system protected.
- Treat provider chat history and local logs as sensitive.
- Review which provider features are selected during installation.
- Do not paste credentials or private keys into a message or issue.
- Treat a display name as a label, not proof of identity.
- Check the sender identity and delivery evidence before acting on a sensitive reply.

## What this page deliberately omits

The public site does not publish private keys, credentials, internal hostnames, deployment identifiers, or exact cryptographic wire schemas. Those details belong in controlled engineering and deployment records, not in a public product overview.

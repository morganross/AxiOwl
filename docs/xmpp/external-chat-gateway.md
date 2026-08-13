---
sidebar_position: 4
---

# External Chat And Provider Authority

Earlier AxiOwl designs described an ordinary XMPP chat gateway that could turn plaintext chat into provider work. That is not the current secure action contract.

## Current Rule

Ordinary XMPP chat and protected AxiOwl actions are different message classes. A normal chat client does not gain provider authority merely by sending text to an AxiOwl address.

An actionable remote request must arrive through the selected protected endpoint path and pass:

- approved-device identity;
- endpoint encryption and sender binding;
- signed action validation;
- current permission and policy checks;
- replay rejection;
- exact local target resolution.

Only then can it cross the provider boundary.

## Why This Matters

Without this separation, anyone who could reach an XMPP account might be able to trigger local provider work, and the routing server could synthesize or modify actionable messages. The current model keeps the server an untrusted router for action content and keeps provider authorization at the receiving endpoint.

## Compatibility

A deployment may allow ordinary human chat for its own purpose, but that chat is non-actionable unless it independently enters the protected authorization path. There is no plaintext duplicate or silent downgrade for an AxiOwl action.

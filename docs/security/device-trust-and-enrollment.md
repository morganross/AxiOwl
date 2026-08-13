---
sidebar_position: 3
---

# Device Trust And Enrollment

Device trust answers a narrow question: **which device keys belong to this customer-controlled trust domain right now?** It is separate from website login, license entitlement, XMPP password issuance, and provider authentication.

## First Device

The first eligible desktop creates a new trust domain and signs the initial trust record with keys held by that endpoint. The service stores and projects the signed result, but service acceptance is not a substitute for endpoint signature verification.

## Later Devices

A later device:

1. creates its own local signing and messaging identity;
2. sends a signed enrollment request for the existing account pool;
3. waits for a currently trusted coordinator to inspect and approve it;
4. receives a signed admission bound to that exact request, device, endpoint, and trust domain;
5. verifies the admission before committing membership locally;
6. obtains its own transport credential rather than copying another device's private credential.

Out-of-band confirmation can use a direct scan or a full fingerprint comparison on both devices. The server relays evidence; it does not become the coordinator.

## Revocation And Replacement

Revocation removes the device from active membership and causes transport and public routing/key state to be retracted through their owning services. A revoked device must not regain authority merely because it still has old local files or a previously valid transport credential.

Replacement or ownership transfer works only while a trusted coordinator can sign the required change.

## Total Trust Loss

If all trusted coordinator devices and keys are lost, AxiOwl does not let licensing, support, the XMPP server, or a backup reopen the old trust domain. The safe outcome is a new trust domain with new keys, credentials, grants, and membership.

This is less convenient than a universal recovery key, but it prevents central infrastructure from silently becoming the customer's device authority.

## Device Limit

The current trust model enforces a bounded active-device set. The limit protects routing, public key-bundle state, and administrative clarity. It is not a licensing seat count.

## Service Boundary

The device-trust service stores signed trust evidence and produces bounded projections. Endpoints and the shared verifier remain responsible for the cryptographic meaning. The account/pool service decides which pool is current; the XMPP provisioner issues transport credentials only after an authorized decision; the Activation service handles optional licensing only.

See [Accounts, Licensing, Pools, And Device Trust](../concepts/accounts-licensing-and-device-trust.md).

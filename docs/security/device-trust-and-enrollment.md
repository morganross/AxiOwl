---
sidebar_position: 3
---

# Device Trust And Enrollment

AxiOwl treats a device as a security principal, not just as a browser window or a chat title. A device must be associated with an approved account or trust domain before it can request protected work.

## The public lifecycle

1. **Initial activation** establishes the first trusted authority for the installation.
2. **Enrollment** creates a new device identity and presents it to an already trusted device or coordinator.
3. **Admission** requires an explicit approval decision. The new device does not become trusted merely because it can reach the server.
4. **Binding** connects the admitted device to its authenticated transport and provider-facing session identity.
5. **Use** is limited by the current membership, policy, and authorization state.
6. **Revocation** removes a device from the active set and blocks its future requests.

The exact local storage and wire representation are intentionally kept out of this public page. The security property is the important part: possession of a network connection or a copied display name is not enough to join the trusted set.

## Human confirmation matters

Enrollment is an ownership decision. A customer should be able to recognize the device being admitted and compare a human-readable confirmation value before accepting it. Discovery hints, QR codes, deep links, or DNS records may help locate a service, but location information is not authority by itself.

## Removal and loss

Revocation should fail closed. A removed device must not continue to receive protected traffic, submit actions, or appear active merely because an old cache still contains its name.

If every trusted authority for a trust domain is lost, the safe recovery direction is to create a new trust domain rather than silently reconstructing the old authority from a server backup or support channel. This protects against a backup becoming an invisible master key.

## Why this is separate from licensing

Licensing answers whether a product may run. Device trust answers which installation may act. Activation can provide an initial bootstrap, but it should not become a permanent substitute for customer-owned device approval or action authorization.

## User-facing warning signs

Stop and investigate when:

- a new device becomes active without a visible approval step;
- a revoked device still appears sendable;
- a copied or stale chat name can authorize an action;
- a server backup is described as able to recreate customer trust;
- a device changes identity after reinstall without an explicit customer decision.

---
sidebar_position: 1
slug: /xmpp
---

# Secure XMPP For Approved Devices

XMPP gives AxiOwl a standards-based path for protected coordination between approved devices.

The source device protects a signed action for one destination. The XMPP service routes the protected envelope. The destination verifies trust and permission, gives the request to its local provider integration, and returns a protected result.

## The User Journey

```text
approve a device
  -> select its secure address
  -> send protected work
  -> authorize at the destination
  -> use the local provider
  -> return a protected result
```

## What The XMPP Role Includes

- secure WebSocket client connections;
- distinct per-device transport identity;
- endpoint content protection;
- signed device and action information;
- exact-resource routing;
- receiver-owned authorization;
- replay protection;
- protected receipts and results;
- Windows, Linux, and cloud server roles.

## Endpoint-Owned Authority

The server authenticates the connection and routes the protected envelope. The destination endpoint owns the decision to invoke a local provider. This keeps provider access close to the machine and user profile that already own the provider session.

## Purposeful Online Delivery

Protected actions target one exact approved resource. This creates a direct relationship between the device the user selected and the device expected to authorize the work.

## Separate From A2A

A2A is the standards-based agent protocol for Agent Cards, tasks, results, and artifacts. Secure XMPP is the approved-device transport for protected actions and results. AxiOwl offers both so users can choose the model that fits the destination.

## Read Next

- [Work Securely Across Devices](../use-cases/secure-work-across-devices.md)
- [Trust And Encryption](../how-it-works/trust-and-encryption.md)
- [Session Routing And Delivery](session-routing-and-delivery.md)
- [Deployment, Credentials, And Security](deployment-credentials-and-security.md)
- [Device Trust And Enrollment](../security/device-trust-and-enrollment.md)

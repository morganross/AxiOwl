---
sidebar_position: 7
---

# Trust And Encryption

Secure remote coordination requires more than encrypting a connection. AxiOwl combines endpoint content protection with device identity, local authorization, and replay protection.

## Five Separate Questions

1. **Which server did this endpoint connect to?**
2. **Which approved device is on the connection?**
3. **Can the intended endpoint read the protected content?**
4. **Is this device allowed to request this action now?**
5. **Has this exact action already been used?**

Each question has its own answer. That separation keeps transport access from becoming provider authority.

## Device Enrollment

The first trusted device establishes the authorization domain. A later device creates its own keys and asks a currently trusted coordinator for admission. The customer confirms the relationship before the device joins the trusted set.

Each approved device keeps its own identity. Revocation can therefore remove one device without treating every installation as one shared password.

## Protected Action Delivery

The source protects a signed action for the intended destination. The server routes the protected envelope. The destination verifies trust, authorization, freshness, and replay state before it gives one request to the local provider integration.

The result returns through the protected endpoint session with correlation to the original action.

## The Provider Boundary Remains Local

The selected provider sees the final message because it must process it. Provider authentication remains on the destination machine, and the network routing service does not become a provider credential holder.

Continue with [Security And Trust](../security/README.md) for the full public security model.

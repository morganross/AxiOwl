---
sidebar_position: 7
---

# Pairing, Trust, And Encryption

Secure mobile control starts with a host identity, a mobile client identity, local approval, and an encrypted connection to the daemon.

## Five Separate Questions

1. **Which AxiOwl host generated the pairing offer?**
2. **Which mobile installation is requesting access?**
3. **Did the desktop user approve that device?**
4. **Is the client connected through an encrypted relay or secured direct route?**
5. **Which host-owned agent and timeline is the client controlling?**

Each question has its own answer. That separation keeps the relay from becoming a provider account and keeps provider credentials on the host.

## Device Enrollment

The host daemon creates a fresh, time-limited pairing offer. The phone uses that offer to connect and present its stable client identity. The Windows or desktop user reviews the pending device and approves it locally.

Each approved phone keeps its own identity. The daemon can trust multiple mobile devices and remove one without changing the others.

## Encrypted Session Delivery

After pairing, the phone and daemon establish an encrypted session through the relay. The relay carries opaque frames; the daemon opens the agent protocol, provider session, and timeline on the host.

Turns, tool events, permission prompts, and provider results return through that same session.

## The Provider Boundary Remains Local

The selected provider sees the final message because it must process it. Provider authentication remains on the host machine, and the relay does not become a provider credential holder.

Continue with [Mobile Connection Security](../mobile/security-and-privacy.md) and [Security And Trust](../security/README.md).

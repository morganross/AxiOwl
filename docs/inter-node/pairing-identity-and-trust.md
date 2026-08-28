---
sidebar_position: 3
---

# Pairing, Identity, And Trust

## Mobile Host Identity

Every daemon has an immutable host identity. The mobile app can assign it a friendly label and store several routes without changing the host that owns the agent sessions.

## Mobile Client Identity

Every mobile installation presents a stable client identity during pairing. The host stores approved clients individually and can manage multiple phones.

## Pairing Offer

The daemon-generated offer contains the host and relay information the phone needs to begin the encrypted connection. It is tied to a bounded approval window.

The desktop user reviews and approves the pending mobile device before it becomes trusted.

## A2A Node Identity

A2A uses a separate node and Agent Card model. The node endpoint, authentication policy, and task identity describe the standards-based agent boundary.

## Provider Identity

The host daemon maps an agent to its provider runtime and provider session. Neither a mobile host label nor an A2A agent title replaces the provider's own session identity.

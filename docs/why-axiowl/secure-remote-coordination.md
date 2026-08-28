---
sidebar_position: 7
---

# Why Mobile Agent Control Matters

Desktop AI agents are valuable because they can stay close to repositories, terminals, provider credentials, and long-running project context. AxiOwl lets the user take the agent experience with them without moving that host environment onto the phone.

## The AxiOwl Model

```text
paired phone
  -> encrypted relay or direct route
  -> AxiOwl daemon on the computer
  -> existing provider agent and project
  -> live timeline back to the phone
```

## Practical Benefits

### The Repository Stays On The Host

The phone controls an agent that works in the host's real project and workspace. Large repositories and local tools do not need to move to mobile storage.

### Provider Credentials Stay On The Host

Provider authentication remains with the provider runtime on the computer. Pairing does not copy account tokens to the phone or relay.

### The Relay Sees Encrypted Frames

The hosted relay connects networks without needing plaintext provider prompts or timelines.

### Pairing Is Human-Approved

The daemon creates a fresh pairing offer, the phone presents its client identity, and the desktop user approves the pending device.

### Several Devices Can Be Managed

Each mobile installation has its own identity. A host can trust multiple phones and remove one independently.

### The Timeline Is The Product

The mobile app receives user text, assistant output, tools, permissions, usage, and completion as one ordered agent timeline. Reconnection returns to the same host and session.

Read [Mobile And Connected Hosts](../mobile/README.md), [Pairing And Device Trust](../security/device-trust-and-enrollment.md), and [Encryption And Privacy](../security/encryption-and-privacy.md).

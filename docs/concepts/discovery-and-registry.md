---
sidebar_position: 5
---

# Discovery And Registry

Discovery finds provider sessions. The registry stores them.

## Discovery

Discovery answers:

```text
What provider sessions appear to exist on this machine right now?
```

Discovery can look at provider app state, session files, local databases, bridge registries, or CLI session lists depending on the provider surface.

## Registry

The registry is AxiOwl's local address book and one of its main normalization tools. It stores:

- display name;
- aliases;
- provider;
- provider session id;
- node id;
- sendable state;
- source;
- last seen time;
- last verified time;
- last error.

## Discovery Is Not Delivery Proof

Finding a chat does not prove the chat can receive and reply.

Discovery is the map. Provider response is the road test.

## Registry As Normalization

Providers store sessions differently. The registry gives AxiOwl a common way to describe them:

```text
display name + provider + surface + provider session id + sendable state + evidence
```

That normalized row lets AxiOwl treat different provider sessions as addressable targets while still preserving provider-specific details.

## Stale Rows

Stale rows happen when a provider changes paths, renames sessions, deletes sessions, or reuses old workspace state.

AxiOwl should not let stale rows become stronger than fresh provider-owned session ids.

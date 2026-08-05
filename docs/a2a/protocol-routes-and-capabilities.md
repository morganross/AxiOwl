---
sidebar_position: 5
---

# Protocol Routes And Capabilities

AxiOwl keeps one route manifest in code so Agent Cards, handlers, tests, and documentation can reason about the same protocol surface.

## Implemented Capability Groups

| Capability | Current state |
|---|---|
| Root Agent Card | Implemented |
| Scoped registry-agent cards | Implemented |
| Provider-factory cards | Implemented |
| HTTP+JSON send | Implemented |
| JSON-RPC send | Implemented |
| Task get and list | Implemented |
| Task cancellation | Implemented |
| Extended Agent Card | Implemented |
| Push notification configuration | Implemented |
| Long-lived streaming send | Declared, not implemented |
| Task subscription streaming | Declared, not implemented |

## Protocol Versions

The primary public model is A2A 1.0. Selected JSON-RPC aliases for A2A 0.3 are retained for compatibility. Requests with unsupported or malformed version declarations are rejected rather than silently interpreted as another protocol.

## Content Model

Current provider delivery is text-oriented. Request parsing validates the message and extracts supported text parts. Rich binary artifacts and arbitrary provider-specific payloads are not silently converted into text.

## Scope Families

Routes require narrow capabilities such as:

```text
agent.read
agent.send
agent.create
task.read
task.cancel
task.push
```

The machine API maps its authenticated API scopes into the A2A scopes required by the requested operation.

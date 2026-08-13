---
sidebar_position: 5
---

# Protocol And Transport Support Matrix

AxiOwl uses explicit protocols for different coordination jobs.

| Boundary | Product role | Identity and security model | Best fit |
|---|---|---|---|
| MCP | Provider sessions call AxiOwl tools and return replies | Provider configuration plus provider-owned session metadata | Local provider coordination |
| A2A HTTP and JSON | Expose or call standards-based agents | Agent Card, endpoint authentication, scoped task identity, and correlation | External agent services |
| A2A JSON-RPC | Message and task interoperability | Same A2A endpoint and task boundaries | A2A clients using JSON-RPC conventions |
| A2A over SSH | Carry A2A between configured nodes | SSH host/user/key policy plus A2A request semantics | Operator-managed inter-node links |
| Secure XMPP over WebSocket | Protected actions and results between approved devices | Verified TLS, device transport identity, endpoint encryption, signed authorization, and replay protection | Device-to-device coordination |
| Windows self-host XMPP | Customer-controlled routing service | Provisioned resources and endpoint-owned action authority | Windows-hosted secure device network |
| Linux self-host XMPP | Customer-controlled routing service | Common approved-device routing contract | Linux-hosted secure device network |
| Cloud XMPP | Hosted routing service | Same endpoint-owned trust model with managed infrastructure | Hosted secure device network |

## Choosing A Route

- Use a **local provider package** for a session on the same machine.
- Use **A2A** for a standards-based agent endpoint.
- Use **A2A over SSH** for an explicitly managed node connection.
- Use **secure XMPP** for approved-device actions with endpoint content protection.

Each request selects one route, making both the security model and the resulting receipts easy to understand.

Read [Choosing A Transport](../how-it-works/choosing-a-transport.md) for examples.

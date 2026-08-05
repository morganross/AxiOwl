# Protocol And Transport Support Matrix

| Boundary | Status | Role | Authentication | Important limitation |
|---|---|---|---|---|
| MCP | supported | Provider tools call AxiOwl and return sender identity and replies | Provider-specific MCP configuration and metadata | A connected tool does not prove correct provider-session metadata. |
| A2A 1.0 HTTP+JSON | implemented | Inbound server and outbound client | Bearer/client registry inbound; bearer or OAuth client credentials outbound | Long-lived streaming is not implemented. |
| A2A 1.0 JSON-RPC | implemented | Inbound server, outbound client, inter-node transport | Same A2A and node credential boundaries | Independent interoperability remains a release gate. |
| A2A 0.3 JSON-RPC aliases | compatibility | Selected legacy method and card compatibility | Same configured boundary | Not every historical A2A behavior is promised. |
| A2A direct HTTPS | implemented | Axi-to-Axi node delivery | Durable node access token | Requires HTTPS Agent Card preflight. |
| Hosted A2A relay | implemented | Route between nodes through a configured relay | Relay token and target-node identity | Relay acceptance is not destination-provider proof. |
| A2A over SSH | implemented | JSON-RPC over SSH standard input/output | SSH host key/user/key policy | Remote node must provide the A2A relay-session command. |
| Legacy API/SSH | migration only | Compatibility fallback | Existing API token or SSH credentials | Used explicitly or only when duplicate-safe. |
| XMPP RFC 7395 | feature branch | Axi-to-Axi and ordinary XMPP chat gateway | SCRAM-SHA-256 over verified WSS | Not merged into current main; no E2EE or offline queue. |

## A2A Capability Detail

Current A2A code implements Agent Cards, scoped agents, provider factories, send, task get/list/cancel, extended cards, and push notification configuration. Streaming send and task subscription routes are declared but marked unimplemented.

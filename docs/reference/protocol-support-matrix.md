# Protocol And Transport Support Matrix

| Boundary | Source status | Product role | Security boundary | Current limitation |
|---|---|---|---|---|
| MCP | Implemented and packaged | Provider tools identify the current session, list targets, send, create, rename, report status, and return replies where supported | Provider-specific configuration plus provider-owned session metadata | Tool availability alone does not prove correct session identity |
| A2A HTTP+JSON | Implemented | Inbound agent server and outbound external-agent client | Scoped client authentication, endpoint policy, task correlation | Long-lived streaming is not implemented |
| A2A JSON-RPC | Implemented | Agent Cards, message send, task operations, external endpoints, and inter-node use | Same A2A client and task boundaries | Selected compatibility aliases do not imply every historical behavior |
| A2A over SSH | Implemented | A2A request/response carried over an authenticated SSH session | SSH host/user/key policy plus A2A request semantics | Remote host must expose the relay-session command |
| Proprietary hosted relay server | Retired from the common runtime | Historical compatibility only | Not a current public transport | New node registration uses direct A2A or A2A-over-SSH |
| Secure XMPP over WebSocket | Implemented in current `main`; packaged by role | Protected remote actions and receipts between approved endpoints | Verified TLS, per-device transport authentication, endpoint E2EE, signed action authorization, replay rejection | A complete current encrypted client-to-provider journey is not yet claimed |
| XMPP self-host server | Windows and Linux implementations exist | Optional customer-controlled server | Provisioned accounts, exact-resource routing, public key-bundle state, no server provider authority | Current cross-platform parity evidence is incomplete |
| Cloud XMPP server | Deployed service evidence exists | Hosted routing and private credential provisioning | Same endpoint-owned trust and action boundary | Deployment health does not prove client admission or provider effect |
| Proprietary root `/v1/*` remote API | Removed from the common runtime | Historical compatibility surface | Not a current product transport | Standards A2A remains separate and preserved |
| Legacy provider-owned remote behavior | Preserved where a provider still owns it | Provider-specific compatibility | Provider boundary, not a generic network fallback | Must not be confused with common A2A or secure XMPP |

## A2A And XMPP Are Separate

A2A is not tunneled through XMPP, and XMPP does not fall back to A2A, SSH, or the removed proprietary API. A target selects one transport. A failure remains attributed to that transport so the system does not create duplicate sends or hide a security downgrade.

## XMPP Source Versus Product Proof

Current source includes protected stanza handling, endpoint encryption/decryption, device trust verification, receiver-owned authorization, durable replay state, one-shot provider handoff, and protected receipts. Those source boundaries are meaningful. The public site still withholds an end-to-end E2EE support claim until a current admitted client, live route, provider effect, and protected receipt are demonstrated together.

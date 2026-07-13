---
sidebar_position: 3
---

# Calling External A2A Endpoints

AxiOwl can treat an external A2A service as another registry target. This is the client side of the A2A implementation.

## Flow

```text
explicit Agent Card URL
  -> fetch over HTTP or HTTPS
  -> parse and validate the card
  -> select a supported protocol interface
  -> preserve non-secret card metadata
  -> import provider=a2a registry record
  -> send through provider_a2a
  -> persist the returned external task state
```

AxiOwl does not broadly scan the local network for A2A services. Discovery starts from an explicit URL, configured URL list, retained registry information, or bounded localhost candidates.

## Supported Bindings

Outbound delivery selects a supported Agent Card interface and currently handles:

- A2A 1.0 HTTP+JSON;
- A2A 1.0 JSON-RPC;
- compatible 0.3 JSON-RPC metadata where represented by the imported card.

For HTTP+JSON migration compatibility, a `404` or `405` from the expected send route can trigger one alternate root-route attempt. A successful provider response is recorded separately from transport errors and task-log persistence errors.

## Authentication

Supported outbound credential forms include:

- an explicitly provisioned bearer-token environment reference;
- OAuth 2.0 client credentials using the target's token endpoint and target-bound client environment references.

OIDC metadata can be retained, but AxiOwl does not perform an interactive OIDC browser login inside the non-interactive send path. Unknown security schemes fail loudly.

Secrets are not stored in registry aliases or Agent Card audit records.

## Lightweight Access

Once imported, an external A2A service uses the normal AxiOwl vocabulary. Users and agents address its registry name instead of rebuilding protocol, URL, auth, and task handling for every workflow.

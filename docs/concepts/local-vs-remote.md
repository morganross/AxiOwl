# Local, Remote, And External Endpoints

## Local Provider

A local target belongs to a provider product on the same machine. AxiOwl resolves the registry record and invokes that provider's package. No network transport should appear merely because local delivery failed.

## External A2A Agent

An external A2A target is described by an explicit Agent Card. AxiOwl acts as an A2A client and retains task state separately from local provider receipts.

## AxiOwl Remote Node

An AxiOwl node target uses explicit node identity and a selected A2A transport. The destination node then performs local provider delivery with its own registry and provider package.

## Secure XMPP Endpoint

An XMPP target belongs to an approved endpoint/resource. The source protects the action for that destination, the server routes it, and the destination verifies and authorizes it before local provider handoff.

## No Cross-Transport Guessing

A2A and XMPP are separate. XMPP does not carry A2A, and neither silently falls back to SSH or the removed proprietary common API. A failed path remains visible so the system does not hide a downgrade or create a duplicate provider call.

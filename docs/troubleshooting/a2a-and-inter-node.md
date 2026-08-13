---
sidebar_position: 6
---

# Troubleshooting A2A And Inter-Node Delivery

Diagnose the selected route in order. Do not switch transports merely to produce a success: an ambiguous failure may have occurred after the destination accepted the request.

## 1. Identify The Route

Record whether the target is:

- a local Agent Card exposed by the A2A server;
- a desktop-provider endpoint requiring the interactive user broker;
- an imported external Agent Card;
- another AxiOwl node over direct A2A HTTPS;
- another AxiOwl node over A2A-over-SSH;
- an exact approved XMPP device resource.

Record the target's canonical ID, selected transport, run ID, message or task ID, and endpoint without copying credentials.

## 2. Keep A2A And XMPP Separate

A2A and XMPP have different evidence chains.

For A2A, follow Agent Card discovery, client authentication, task acceptance, task state, destination delivery, and reply correlation.

For XMPP, follow endpoint selection, TLS/hostname verification, transport authentication, exact-resource routing, endpoint decryption, signed action authorization, replay decision, provider handoff, and protected receipt.

A working A2A route does not prove XMPP works. A working XMPP connection does not prove an action was authorized or a provider was called.

## 3. Check Windows Process Ownership

The optional `AxiOwlApi` service runs as LocalSystem. Interactive provider sessions belong to the signed-in user. The current MSI packages the service and `axiowl-user-broker.exe` as separate A2A Server and A2A Client features.

If a public Agent Card works but a provider-backed route does not, check:

1. whether A2A Client was installed;
2. whether an eligible interactive user session exists;
3. whether the broker is running in that session;
4. whether the service-to-user channel authenticated the intended user;
5. whether the destination registry row is sendable.

Do not copy provider credentials into the LocalSystem account to bypass this boundary.

## 4. Verify The Agent Card

Confirm that the card can be fetched, its advertised URL is the URL actually used, the requested operation is advertised, and authentication requirements match the client configuration. A successful import records discovery metadata; it does not prove task acceptance.

## 5. Follow The A2A Task

Record:

1. local request acceptance;
2. HTTP or JSON-RPC result;
3. remote task ID;
4. task state transitions;
5. destination provider handoff result;
6. returned message or artifacts;
7. push retry or terminal result when push is configured.

A pending task is not a failed send, and an accepted task is not a provider answer.

## 6. Verify Authentication Without Printing Secrets

Confirm only the credential source and scheme:

- A2A bearer or OAuth client credential;
- AxiOwl node access policy;
- SSH host/user/key reference;
- XMPP per-device transport credential;
- signed XMPP admission and local action-key state.

Never paste tokens, private keys, password verifiers, or protected device state into a support report.

## 7. Check Transport Selection

A2A node records use direct `a2a` or `a2a-ssh`. Confirm that the registry row names the same route the operator selected for that node.

For XMPP, verify the exact WSS endpoint and full resource. Do not substitute A2A, SSH, or a provider-owned remote feature after a protected-route failure.

## 8. Check Replies And Receipts

For provider MCP replies, confirm the reply carries the expected sender session, run, and receipt identity. For protected XMPP results, distinguish routing acceptance, endpoint acceptance, authorization, provider effect, and protected receipt. For A2A push, distinguish task completion from callback delivery.

## Evidence To Collect

- AxiOwl version and artifact provenance;
- process owner and relevant service/process state;
- route type and selected transport;
- redacted Agent Card or endpoint description;
- target agent, node, or exact XMPP resource identity;
- run, message, receipt, and task IDs;
- protocol status and task or receipt state;
- provider delivery log after the route reached the destination;
- the first concrete error at the failed boundary.

---
sidebar_position: 6
---

# Troubleshooting A2A And Inter-Node Delivery

Diagnose A2A by following the route in order. Do not jump from an acceptance receipt to a provider-patch theory, and do not use another transport to make a failing transport appear healthy.

## 1. Identify The Route

Record whether the target is:

- a public agent exposed by the local A2A server;
- a protected desktop-provider agent requiring interactive user access;
- an external Agent Card endpoint;
- another AxiOwl node over direct HTTPS;
- another node through relay;
- another node through A2A over SSH;
- an XMPP target on the feature branch.

The same target name can be misleading when registry state is stale. Record the agent id, node id, endpoint URL, transport, run id, and task id.

## 2. Check Process Ownership

The optional Windows `AxiOwlApi` service runs as LocalSystem. Desktop provider sessions belong to the interactive user. A public Agent Card may work while a protected provider-backed route returns `503` because the user broker is unavailable.

Current main compiles a user-broker executable, but the MSI build and WiX packaging do not yet install and start it. Treat that `503` as a known packaging/runtime gap, not as proof that the Agent Card or provider is missing.

## 3. Verify The Agent Card

Confirm that the card can be fetched, its URL is the URL actually used, the requested skill or capability is advertised, and authentication requirements match the client configuration. An imported card is discovery metadata; successful import does not prove the endpoint accepts tasks.

## 4. Follow The Task Lifecycle

Record:

1. local AxiOwl acceptance;
2. HTTP or JSON-RPC request result;
3. remote task id;
4. task state transitions;
5. returned message or artifacts;
6. cancellation, timeout, retry, or dead-letter outcome.

A pending task is not a failed send, and an accepted send is not a completed task.

## 5. Check Authentication Without Printing Secrets

Confirm that the selected route has the required bearer token, OAuth client credentials, node pairing record, relay credential, SSH host/user/key, or service policy. Log whether a credential source was found and which scheme was selected, but never print the secret.

## 6. Check Transport Selection

The logs should show which transport was selected and why. Verify that direct HTTPS failure did not silently become relay, SSH, or legacy delivery. Guarded fallback must be visible. Diagnose the selected transport before testing another one.

## 7. Check Replies And Push Delivery

For MCP-correlated replies, confirm the reply carries the expected run and receipt identifiers. For A2A push notifications, inspect retry count, next attempt, terminal failure, and dead-letter records. A successful task with a failed push callback is different from a failed task.

## 8. Separate Main From Branch-Only XMPP

Current main does not contain the XMPP implementation. XMPP logs and binaries belong to `feature/xmpp-remote-transport`. Confirm branch and artifact provenance before diagnosing XMPP. Do not infer XMPP support from an A2A or relay success.

## Evidence To Collect

- AxiOwl version and source commit;
- process owner and service state;
- route type and selected transport;
- redacted Agent Card;
- target agent/node identity;
- run, receipt, message, and task ids;
- HTTP/JSON-RPC status and task state;
- retry/dead-letter entries;
- broker availability and any `503` response;
- relevant provider delivery log after the network route reached the destination.

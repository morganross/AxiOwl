---
title: "A2A client and server contracts"
slug: /messaging/technical/a2a
description: "Agent Cards, external task lifecycles and deliberately exposed service endpoints."
---

# A2A client and server contracts

A2A connects agent-service endpoints. MCP exposes tools inside an agent host. Neither is a replacement name for the other.

## Client operations

The client imports or registers an actual Agent Card, reviews its endpoint/capabilities/authentication and submits only the requested service operation. The endpoint can have its own task identifier, status events, artifacts or completion lifecycle.

An accepted A2A task is not proof of completed work. Keep its identifiers separate from a provider's native conversation ID and a Messaging Send operation reference.

Service URLs and authentication belong to the configured endpoint. A self-described card is not sufficient authority to execute tools or trust every redirect/host advertised by it.

## Server exposure

Windows has separately selected A2A service/client components. New installer source defaults those selections off and preserves existing choices. A common local service port is 37661, but actual binding/TLS/public-origin configuration must be inspected.

Enabling a service, publishing a card, exposing an agent and granting authentication are separate actions. Loopback, a public bind address and a reverse-proxied endpoint have different risk profiles.

Applicable server configuration can include TLS/certificate/client-authentication and public-origin choices. A readable public-status projection is not the secret configuration file. Do not publish service tokens in diagnostics.

## Provider-backed endpoints

An A2A call can ultimately cross into a provider environment. The provider-owning user, native surface, exact conversation and tool policy remain relevant. A service process or web account does not automatically possess that provider login.

External endpoint operation semantics must not create an automatic messaging exchange in an ordinary native Send-only workflow.

## Data and operations

A2A can disclose the authored task, service/card metadata and selected artifacts to the remote service. Paired Relay encryption does not automatically apply to an unrelated A2A HTTP endpoint.

Record selected endpoint, authenticated scope, task/operation ID and actual outcome. Do not disable TLS/authentication to obtain a successful connection status.

Feature presence in Windows is not a blanket parity promise for Mac/Linux. Use the installed consumer's advertised controls and release requirements.

See [network connections](network-connections.md), [security](security-model.md), [protocols](protocols-and-ipc.md) and [compatibility](compatibility.md).


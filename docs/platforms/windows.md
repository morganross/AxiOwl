---
sidebar_position: 2
---

# Windows

Windows x64 is the primary packaged AxiOwl desktop experience.

## What You Can Install

- the AxiOwl runtime and MCP server;
- mailbox, tray, discovery, registry, and diagnostics;
- eleven isolated provider packages;
- an optional A2A server;
- an optional interactive A2A client and user broker;
- an optional per-user secure XMPP client;
- an optional native self-hosted XMPP server and administration tool.

The MSI presents those capabilities as separate features, allowing each installation to match the providers and network roles the user wants.

## Designed For Interactive Provider Work

Provider sessions normally belong to the signed-in Windows user. AxiOwl keeps that user context available to interactive provider integrations while machine services stay within their own service identity.

## Secure Device Roles

The per-user XMPP client keeps device identity and protected state under the interactive user. The optional server runs as a separate machine role. This separation supports both everyday desktop use and a customer-controlled self-hosted deployment.

## Best Starting Point

Windows offers the broadest provider package selection and the complete installer experience. Follow [Install And First Run](../getting-started/install-first-run.md), then choose a provider from [Provider Surfaces](../providers/README.md).

---
sidebar_position: 8
---

# Trust Boundaries

AxiOwl is local software that coordinates provider sessions. Its security depends on keeping the boundaries visible: the user's computer, the provider application, the AxiOwl runtime, any remote server, and the customer who approves devices are different authorities.

## What AxiOwl may read

When a selected feature needs it, AxiOwl may read:

- provider session and installation metadata needed for discovery;
- provider configuration needed to address a session;
- AxiOwl registry, runtime, and diagnostic state;
- installation and activation status;
- release provenance needed to describe the installed product.

Discovery should read the smallest amount of provider state needed to find a usable session. A chat title or workspace folder is not a substitute for provider-owned session identity.

## What AxiOwl may write

The core runtime may write its own program files, registry entries, runtime handoff data, logs, and status records. A selected provider feature may also write an AxiOwl-owned MCP entry, bridge extension, integration configuration, or patch required for that surface.

The exact files differ by provider and operating system. The installer pages describe the feature boundary. Users should be able to see which feature caused a change and which files belong to AxiOwl.

## Provider patches

Some editor integrations use private provider behavior because the provider does not expose a stable public API for the required handoff. These patches are inherently more fragile than a documented MCP configuration. They must be selected deliberately, scoped to the provider feature, and reported clearly if the provider version is incompatible.

Patching one provider must not become permission to rewrite another provider, user chats, unrelated extensions, or unrelated workspace files.

## What AxiOwl should not touch

AxiOwl should not silently modify:

- provider login credentials, access tokens, or private keys;
- unrelated provider extensions or settings;
- user chat history or workspace content;
- unchecked provider features;
- remote infrastructure that the user did not explicitly select;
- another provider's data as collateral cleanup.

## Local and remote boundaries

Local provider support should remain local unless a remote feature is explicitly selected. A remote service should not be used to hide a local delivery failure. Remote deployments add their own access, logging, backup, availability, and credential-management responsibilities.

## Licensing is not device authority

License activation establishes product entitlement. It does not by itself authorize a device to perform every protected action. Device admission, revocation, and action authorization are separate security decisions.

## Metadata is not content secrecy

Routing may require provider, surface, session, target, request, and receipt metadata. The content protection model and the metadata model are documented separately because encryption does not make all routing information invisible. See [Metadata And Identity](metadata-and-identity.md).

## Public documentation boundary

This public site intentionally omits credentials, private keys, internal host details, deployment identifiers, and exact cryptographic wire formats. That omission is not a claim that those details do not exist; it is a separation between user-facing security expectations and controlled engineering records.

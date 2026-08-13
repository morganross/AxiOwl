# Security, Privacy, And Trust Boundaries

## Local User

The ordinary runtime operates as the interactive user. It may read the provider installation and session metadata required for selected discovery and delivery, plus AxiOwl registry, runtime, mailbox, and log state. It does not gain a general right to inspect unrelated workspaces, credentials, or conversations.

## Windows Installer

The MSI has machine authority for installed components and delegates selected user-scoped work to the actual target user. Each checkbox owns its process, patch, extension, configuration, and cleanup scope. An unchecked provider should not be modified because discovery found it.

## Provider

The provider owns its account, authentication, session state, and final execution behavior. AxiOwl may install a plugin, MCP entry, extension, or narrow patch for a selected integration, but it does not copy provider credentials or become the provider account.

## Machine Service And User Broker

Machine-facing A2A and server features run outside the interactive provider session. Work requiring user-owned provider state crosses the packaged user-broker boundary. The service authenticates and scopes the request; the broker does not let LocalSystem silently impersonate an arbitrary user.

## A2A

An Agent Card describes an endpoint. It does not establish trust by itself. Inbound clients need configured authentication and scopes. Outbound credentials are bound to the selected external endpoint and are not stored as public registry aliases.

## Secure XMPP

The server authenticates a device transport and routes an encrypted envelope to an exact resource. Endpoints own encryption/decryption, device trust, action signatures, authorization, replay state, provider handoff, and protected receipts. A routing success is not provider authorization.

## Account, Pool, Trust, Provisioning, And Licensing

These powers remain separate:

- website account proves a user session;
- pool state identifies the account's current device group;
- device trust records admitted keys and lifecycle;
- provisioning issues a per-device transport credential after an authorized decision;
- licensing enables optional product behavior;
- provider authentication authorizes the provider account.

A shared public gateway can route these services without merging their authority.

## Updates

Build signing, immutable publication, channel promotion, client verification, and local application are separate. Provider packages can update independently of the core. No update stage authorizes an unselected provider integration or a wider security scope.

## Information AxiOwl May Store

Depending on selected features, AxiOwl may store registry records, provider session identifiers, task and receipt correlation, selected provider-package state, patch journals, public Agent Card data, device-trust projections, and bounded logs. Credentials and private key material belong in platform-protected or service-secret storage, not public documentation or ordinary registry aliases.

# Security, Privacy, And Trust Boundaries

AxiOwl connects software that was not designed around one shared trust model. Its security goal is explicit authority: each component should read, write, patch, or transmit only what its selected feature and current operation require.

Plain English: AxiOwl can access local provider state and, when enabled, remote agent endpoints. Users should know which boundary an operation crossed and which credentials made it possible. These public pages explain the model without publishing private keys, credentials, internal host details, or exact wire-level cryptographic parameters.

## Local user boundary

The ordinary runtime operates in the interactive user's context. It may read provider session metadata, provider configuration, AxiOwl registry state, and provider installation paths required for discovery and delivery. It may write AxiOwl-owned runtime files and selected provider integration entries.

Provider session data is used to address work. It is not a general license to inspect unrelated workspace content, credentials, or conversations.

## Installer boundary

The MSI has machine-level authority for components that require it and launches selected per-user configuration work in the actual interactive user context. Each provider feature owns its configuration, extension, patch, cleanup, app shutdown, and restart behavior.

Unchecked features should not modify or remove their provider. Uninstall should remove AxiOwl-owned state for installed features while preserving unrelated provider settings, chats, extensions, and authentication.

## Provider patch and extension boundary

Some surfaces expose no stable public API for required delivery or identity behavior. Their integration may use an extension or a validated patch to provider-owned files. These are higher-risk operations because provider updates can change private implementation details.

Patch-sensitive operations should discover the provider version, validate the expected boundary, make the smallest selected change, and fail loudly when the match is ambiguous. A provider patch is not proof that the provider path works.

## A2A service boundary

The optional AxiOwl API service is separate from interactive user provider sessions. Public Agent Cards and network A2A operations can be served there, while protected operations that need user-owned provider state use the user-broker boundary. A service endpoint is a separate trust domain; importing an Agent Card describes capabilities but does not make that endpoint trusted.

Bearer tokens and OAuth client credentials belong to the remote endpoint boundary. They should be scoped, protected, and never copied into public logs or method reports.

## Network and node boundary

Inter-node communication can use direct HTTPS A2A, relay, or A2A over SSH. Each path needs explicit node identity, authenticated peer or endpoint configuration, bounded timeouts, and transport-specific logs. A guarded fallback must not silently reduce the trust guarantees of the selected route.

## XMPP boundary

The public XMPP documentation describes a separate transport boundary and its security responsibilities. It adds account credentials, certificate validation, authenticated routing, and gateway authorization. Those credentials and policies remain separate from local provider credentials. A branch implementation or design document does not by itself mean that XMPP is released support on the current main product.

## Data AxiOwl may read

When a selected feature needs it, AxiOwl may read:

- provider install and version information;
- provider session indexes, databases, or process metadata needed for discovery;
- selected provider MCP or configuration files;
- AxiOwl registry, runtime, logs, manifests, and activation state;
- configured Agent Cards and remote-node records.

Discovery should read the smallest amount of provider state needed to find a usable session. A chat title or workspace folder is not a substitute for provider-owned identity.

## Data AxiOwl may write

AxiOwl may write its installed binaries, manifests, registry, runtime, logs, and configuration; selected MCP entries; selected bridge extensions or validated provider patches; and explicit remote-node or Agent Card records. A remote feature may also create task or correlation state needed to explain a remote handoff.

It should not broadly rewrite unrelated extensions, settings, workspace files, provider chats, or authentication tokens.

## Metadata and privacy

Messages may carry sender and target names, provider and session identifiers, run or task identifiers, receipt identifiers, and reply-routing instructions. Network transports also reveal endpoint information needed for routing. Logs should record enough evidence to diagnose a route without dumping unrelated conversation content or secret values.

Encryption protects content but does not make all routing metadata invisible. See [Metadata And Identity](metadata-and-identity.md) and [Encryption And Privacy](encryption-and-privacy.md).

## License activation

License activation is an explicit operation against the configured activation service. Activation state can be reported locally. License diagnostics should not conceal installation, transport, or provider failures, and credentials should never be copied into public logs.

Licensing is not device authority. Device admission, revocation, and action authorization are separate decisions.

## Public security rules

1. Select features explicitly and keep ownership granular.
2. Validate before modifying provider-owned files.
3. Separate local user authority from service authority.
4. Authenticate every network boundary.
5. Redact secrets while preserving correlation evidence.
6. Report the exact success boundary reached.
7. Fail loudly when identity, ownership, or authorization is ambiguous.

See [A2A Operations And Security](../a2a/operations-and-security.md), [Node Pairing And Trust](../inter-node/pairing-identity-and-trust.md), and [XMPP Deployment And Security](../xmpp/deployment-credentials-and-security.md).

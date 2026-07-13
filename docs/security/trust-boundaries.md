# Security, Privacy, And Trust Boundaries

AxiOwl connects software that was not designed around one shared trust model. Its security goal is therefore explicit authority: each component should read, write, patch, or transmit only what its selected feature and current operation require.

Plain English: AxiOwl has meaningful access to local provider state and, when enabled, remote agent endpoints. Users need to know which boundary an operation crossed and which credentials made it possible.

## Local User Boundary

The ordinary runtime operates in the interactive user's context. It may read provider session metadata, provider configuration, AxiOwl registry state, and provider installation paths required for discovery and delivery. It may write AxiOwl-owned runtime files and selected provider integration entries.

Provider session data is used to address work. It should not be treated as a general license to inspect unrelated workspace content, credentials, or conversations.

## Installer Boundary

The MSI has machine-level authority for components that require it and launches selected per-user configuration work in the actual interactive user context. Each provider feature owns its config, extension, patch, cleanup, app shutdown, and restart behavior.

Unchecked features should not modify or remove their provider. Uninstall should remove AxiOwl-owned state for installed features while preserving unrelated provider settings, chats, extensions, and authentication.

## Provider Patch And Extension Boundary

Some surfaces expose no stable public API for required delivery or identity behavior. Their integration may use an extension or a validated patch to provider-owned files. These are higher-risk operations because provider updates can change the private implementation.

Patch-sensitive operations need discovery, multiple structural checks, pre-change validation, backup or rollback, post-change validation, and loud failure. A partial or ambiguous match is not permission to modify the file.

## A2A Service Boundary

The optional `AxiOwlApi` Windows service runs as LocalSystem. That service boundary is intentionally separate from the interactive user's provider sessions. Public Agent Cards and network A2A operations can be served there, but protected operations that need user-owned provider state require the user broker path.

Current packaging does not yet include and start the compiled user-broker executable. Protected service routes that require it can return `503`. This is a known release boundary, not an authentication workaround.

## Network And Node Boundary

Inter-node communication can use direct HTTPS A2A, relay, or A2A over SSH. Every path needs explicit node identity, authenticated peer or endpoint configuration, bounded timeouts, and transport-specific logs. A legacy fallback is guarded and should not silently reduce the trust guarantees of the selected route.

External A2A endpoints are separate trust domains. Importing an Agent Card describes capabilities; it does not make that endpoint trusted. Bearer tokens and OAuth client credentials must be scoped and protected as secrets.

## XMPP Boundary

The XMPP transport exists on `feature/xmpp-remote-transport`, not current main. Its trust model adds XMPP account credentials, TLS certificate validation, SCRAM authentication, stanza routing, and gateway authorization. Those secrets and policies should remain separate from local provider credentials. Branch implementation does not equal released support.

## Data AxiOwl Reads And Writes

AxiOwl may read:

- provider install and version information;
- provider session indexes, databases, or process metadata needed for discovery;
- selected provider MCP/config files;
- AxiOwl registry, runtime, logs, manifests, and license state;
- configured Agent Cards and remote-node records.

AxiOwl may write:

- its installed binaries, manifests, registry, runtime, logs, and configuration;
- selected MCP server entries;
- selected bridge extensions or validated provider patches;
- A2A task, correlation, retry, and dead-letter state;
- explicit remote-node, Agent Card, or credential references.

It should not broadly rewrite unrelated extensions, settings, workspace files, provider chats, or authentication tokens.

## Metadata And Privacy

Messages may carry sender and target names, provider/session ids, run ids, message or receipt ids, task ids, and reply-routing instructions. Network transports also reveal the endpoint identities needed for routing. Logs should record enough evidence to diagnose a route without dumping unrelated conversation content or secret values.

## License Activation

License activation is an explicit operation against the configured activation service. Activation state can be reported locally. License diagnostics should not conceal installation, transport, or provider failures, and credentials should never be copied into method reports or public logs.

## Security Rules

1. Select features explicitly and keep ownership granular.
2. Validate before and after modifying provider-owned files.
3. Separate local user authority from service authority.
4. Authenticate every network boundary.
5. Redact secrets while preserving correlation evidence.
6. Report the exact success boundary reached.
7. Fail loudly when identity, ownership, or validation is ambiguous.

See [A2A Operations And Security](../a2a/operations-and-security.md), [Node Pairing And Trust](../inter-node/pairing-identity-and-trust.md), and [XMPP Deployment And Security](../xmpp/deployment-credentials-and-security.md).

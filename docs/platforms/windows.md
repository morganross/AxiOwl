# Windows

Windows x64 is the primary packaged AxiOwl desktop.

## Product Components

The current source and MSI model include:

- the local `axiowl` runtime and MCP server;
- mailbox, tray, discovery, registry, and diagnostics;
- eleven isolated provider packages;
- an optional machine A2A server;
- an optional interactive A2A client/user broker;
- an optional per-user secure XMPP client;
- an optional native self-hosted XMPP server and administration tool.

Provider state normally belongs to the interactive user. Machine services do not gain permission to impersonate that user; work that needs user-owned provider state crosses a deliberate broker boundary.

## Distribution Reality

Signed MSI evidence and successful internal Uninstall then Uninstall-install evidence exist. The repository release ledger continues to move independently of older signed artifacts, so a release manifest, MSI signature, and publication record should be evaluated together.

Windows being the primary platform does not mean every provider operation has current proof. Provider-specific support remains defined in the [Provider Support Matrix](../reference/provider-support-matrix.md).

## Security Boundaries

- provider credentials remain owned by the provider;
- selected provider features control patches, extensions, MCP config, and process shutdown;
- per-user XMPP identity material is separate from LocalSystem server state;
- license entitlement is not device or message authority;
- protected network actions must be verified and authorized before provider invocation.

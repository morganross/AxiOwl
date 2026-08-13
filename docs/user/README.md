# AxiOwl User Guide

AxiOwl gives AI sessions a shared address book and communication layer. You choose a target; AxiOwl resolves the exact surface and uses that provider's integration.

## Normal Workflow

1. Install only the provider and network features you intend to use.
2. Discover provider sessions.
3. Inspect the provider, surface, and session identity of the target.
4. Send a message.
5. Read the receipt as a handoff status, not a provider answer.
6. Confirm the provider transcript or receive a correlated MCP reply.

## Local And Remote Targets

Local targets use provider packages on the same machine. External A2A targets use an imported Agent Card. AxiOwl remote nodes use explicit A2A node transport. Secure XMPP targets use approved-device protected routing. AxiOwl does not silently switch among those paths after a failure.

## Account And License

Website account state, pool membership, device trust, XMPP transport credentials, provider login, and license entitlement are separate. Activating an optional licensed feature does not admit a device or sign in to a provider.

## Platform Expectations

- Windows x64 is the primary packaged desktop.
- Linux x86-64 is a packaged engineering preview.
- macOS is a native engineering preview, not "unsupported."
- iPhone and Android are native previews, not public production releases.

## Reading A Result

| Result | Meaning |
|---|---|
| Installed | Selected installer action completed |
| Discovered | A provider or session record was found |
| Accepted | AxiOwl accepted the request |
| Delivered | The provider edge reported delivery |
| Provider-visible | The provider transcript or title changed |
| Replied | The target returned an attributable response |
| Completed task | The protocol task contains a correlated terminal result |

See [How To Read Status And Logs](../getting-started/how-to-read-status.md) and [Receipts Versus Proof](../concepts/receipts-vs-proof.md).

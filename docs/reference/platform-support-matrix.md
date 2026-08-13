---
sidebar_position: 4
---

# Platform Support Matrix

AxiOwl uses native platform implementations around a shared coordination model.

| Platform or role | Experience | Main capabilities |
|---|---|---|
| Windows 11 x64 desktop | Primary | Full provider package family, mailbox, MCP, A2A client/server, secure XMPP client, optional native XMPP server, MSI |
| Windows 10 x64 desktop | Compatible Windows experience | Native runtime and MSI architecture |
| Linux x86-64 desktop | Preview | Native C++ client, provider packages, MCP, secure XMPP client, Debian packaging |
| Linux x86-64 self-host server | Extended | Prosody-based secure WebSocket XMPP routing and provisioning integration |
| ARM64 Linux cloud XMPP server | Extended | Hosted secure XMPP routing role using the common Linux server profile |
| Windows x64 self-host XMPP server | Extended | Native XMPP service and administration tool |
| macOS desktop | Native preview | Swift CLI and SwiftUI app, account state, registry, MCP, provider workflows, mailbox foundations |
| iPhone | Native preview | SwiftUI approved-device companion and A2A client foundations |
| Android | Native preview | Kotlin/Compose approved-device companion and A2A client foundations |

## Shared Product Concepts

Every platform follows the same high-level product language:

- providers and concrete surfaces;
- discoverable session targets;
- explicit local, A2A, or secure-device routes;
- distinct device identity;
- receipts and correlated results;
- provider authentication under provider ownership.

Explore the [Platform Guide](../platforms/README.md) for a narrative view of each experience.

# Platform Support Matrix

This matrix describes the strongest current evidence for each operating-system product. It does not infer support from a portable source file.

| Platform or role | Current status | What exists | What is not yet claimed |
|---|---|---|---|
| Windows 11 x64 desktop | Primary packaged platform | Native runtime, mailbox, tray, provider packages, MCP, A2A server/client broker, secure XMPP client, optional native XMPP server, signed MSI evidence | Current end-to-end proof for every provider and every selected network feature |
| Windows 10 x64 desktop | Source-compatible, revalidation required | Same native code and MSI architecture | Current clean-machine evidence equal to Windows 11 |
| Linux x86-64 desktop | Packaged engineering preview | Native C++ client/CLI, provider packages, MCP, secure XMPP client, Debian package and detached-signature evidence | Public repository release and customer-provisioned protected connection proof |
| Linux x86-64 self-host server | Implemented package role | Prosody/nginx profile, secure routing modules, provisioning boundary, install/uninstall scripts | Current public customer-host deployment proof |
| OCI ARM64 cloud XMPP server | Deployed service evidence | Common Linux server package on ARM64, secure WebSocket endpoint, private provisioning boundary, health evidence | A complete current client-to-provider protected journey |
| Windows x64 self-host XMPP server | Packaged optional role | Native server and administration executable, MSI feature, service lifecycle, routing and state implementation | Current parity demonstration across all secure client flows |
| macOS 14+ desktop | Native engineering preview | Swift CLI/GUI, account and license UI, registry/MCP, Codex and Claude CLI operations, provider setup, unsigned package evidence | Signed/notarized public release, complete provider parity, production network path |
| iOS 16+ | Native engineering preview | SwiftUI app, account sign-in, join-only onboarding, protected local custody design, A2A client, simulator build work | App Store/public release and complete protected XMPP runtime |
| Android | Native engineering preview | Kotlin/Compose app, account/pool onboarding, protected credential storage, native trust and OMEMO integration work, XMPP transport UI | Public release and production-ready protected connection/message journey |

## Support Interpretation

- **Primary packaged platform** means this is the normal desktop distribution path.
- **Packaged engineering preview** means a package exists but support evidence is narrower than the primary platform.
- **Native engineering preview** means substantial native source exists without a public production release.
- **Deployed service evidence** applies to the service role only; it does not prove client enrollment or provider delivery.

See the [platform pages](../platforms/README.md) for details and [Current Product Status](current-product-status.md) for the evidence vocabulary.

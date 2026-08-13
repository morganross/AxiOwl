# macOS

AxiOwl for macOS is a separate native Swift implementation. It follows the same registry, MCP, account, licensing, and provider-boundary concepts but does not reuse the Windows/Linux C++ application.

## Implemented Areas

- Swift CLI and SwiftUI application;
- account sign-in and Keychain-held account state;
- optional license entitlement import and status;
- provider discovery and checkbox defaults;
- MCP configuration and server operations;
- Codex CLI and Claude Code CLI discovery/create/send paths;
- mailbox/provider GUI;
- XMPP lifecycle and trust-consumer source;
- unsigned package and local GUI launch evidence.

## Preview Boundaries

Other CLI delivery paths, editor patching, A2A service behavior, XMPP server administration, and the complete protected network journey remain incomplete or preview-level. The package is not presented as a signed and notarized public release.

The public site therefore describes macOS as a native engineering preview, not as unsupported and not as production-equivalent to Windows.

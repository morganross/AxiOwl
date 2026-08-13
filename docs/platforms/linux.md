# Linux

Linux x86-64 now has a real compiled desktop target and Debian packaging. It is no longer accurately described as a parked reference tree.

## Desktop Package

The Debian package can carry:

- the native AxiOwl executable;
- provider package management and MCP configuration;
- Codex, Cursor, VS Code Copilot-backed, Claude, Copilot, OpenCode, and Antigravity integration assets;
- the secure XMPP client executable;
- the shared trust-verification library;
- per-user service templates and onboarding helpers.

Internal build, detached-signature, and install evidence exists. The protected XMPP client is intentionally not started without valid customer-authorized runtime and admission state. That is a fail-closed boundary, not a missing executable.

## Self-Hosted Server

The Linux server package uses the common XMPP server contract with Prosody and a secure WebSocket front end. It owns routing, exact-resource delivery, public key-bundle state, and provisioned-account enforcement. It does not become device authority or provider authority.

## Current Limit

Linux is an engineering preview rather than the primary public desktop release. Windows provider-package behavior should not be assumed to have Linux parity merely because both packages use the same provider name.

# Release And QA Execution Guide

The canonical gate is the [Release Validation Checklist](../reference/release-validation-checklist.md). This page explains how to execute it and retain evidence.

## A Release Is A Chain Of Proof

Source compilation proves that code can compile. Artifact provenance proves which source entered the package. Clean-machine installation proves the package can configure another computer. Provider and protocol tests prove the installed paths work. Uninstall and reinstall tests prove the result was not a stale-state accident.

## Evidence Folder

Create one run id for the release candidate and retain:

- source commit and branch;
- native test output;
- MSI build log, manifest, ProductCode, version, and hashes;
- clean VM install and uninstall logs;
- discovery output and selected checkbox state;
- provider send receipts and correlated replies;
- A2A task ids, states, and results;
- inter-node transport selection logs;
- known failures and status decisions;
- GitHub Actions run URLs.

Secrets, tokens, and private message bodies must be redacted.

## Build Sequence

```powershell
cmake --build apps\windows-desktop\build --config Release
ctest --test-dir apps\windows-desktop\build -C Release --output-on-failure
apps\windows-desktop\installer\build-windows-msi.ps1
```

Use the project's current configured build workflow when command details evolve. The required outcome is a fresh MSI with matching provenance, not merely an old release file next to a new log.

## Windows Installer Sequence

Test first install, selected-provider install, repair, uninstall, and reinstall on the development machine and a clean Windows 11 VM. Verify provider discovery before selection, selected-only app shutdown/restart, user-context config, AxiOwl-owned cleanup, and no stale payload substitution.

Test the optional A2A feature separately. Confirm service account, service startup, public Agent Card access, and the known broker-dependent protected-route behavior. Do not mark protected service-backed desktop delivery complete while the user broker is absent from the MSI.

## Provider Sequence

For every surface marked supported:

1. Create or select a current session.
2. Send a request containing the release run id.
3. Record the AxiOwl receipt.
4. Require a reply through AxiOwl MCP.
5. Verify sender provider and session identity.
6. Verify run and receipt correlation.
7. Repeat after reinstall.

Test CLI, editor, extension, and agents-window surfaces as separate providers. Record auth and quota blocks separately from implementation defects, but do not turn an untested path into a supported claim.

## A2A Sequence

Validate both AxiOwl roles:

- server: Agent Card, scoped-agent resolution, message send, task get/list/cancel, extended card, and authentication;
- client: external Agent Card import, HTTP+JSON and JSON-RPC calls, bearer or OAuth credentials, task polling, and result mapping;
- operations: push callback, retry, dead-letter, timeout, cancellation, and MCP reply correlation.

Verify that advertised streaming capability remains false until streaming is implemented and tested.

## Inter-Node Sequence

Use two clean nodes. Validate direct HTTPS A2A, relay, and A2A over SSH independently when each is claimed. Record selected transport, node identity, credential source, failure, fallback, task result, and reply. Disable one transport at a time to prove fallback policy rather than inferring it from a successful final result.

## XMPP Sequence

XMPP tests belong to `feature/xmpp-remote-transport` until merge. Build the branch artifact, run its unit/integration tests, validate TLS and SCRAM behavior, test session routing and the gateway, and then reconcile with current main. A passing branch test does not change the current-main protocol matrix.

## Documentation And Website

Run `npm run build` in the Docusaurus repository. Check internal links, source-of-truth matrix consistency, and GitHub Pages deployment. Historical method reports may support an engineering decision, but they must not be indexed as current capability claims without a current matrix entry.

## Release Decision

Publish only the capabilities that passed the current run. Keep partially implemented, auth-blocked, branch-only, or fragile paths labeled accurately. A release may ship with documented target or experimental paths; it may not present them as supported.

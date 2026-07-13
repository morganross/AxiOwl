# Release Validation Checklist

This is the source of truth for release and QA validation. It prevents AxiOwl from presenting code presence, a local receipt, or an old method report as proof that the current artifact works on another computer.

## 1. Establish Provenance

- Confirm the intended repository, workspace, and `main` branch.
- Record the exact source commit and product version.
- Review the working tree and include only intentional files.
- Remove or isolate stale release artifacts that could be installed by mistake.
- Compare product claims with the provider, installer, platform, and protocol matrices.

## 2. Build And Test Current Source

- Configure and build the Windows Release targets.
- Run the native test suite and installer safety checks.
- Build through `apps/windows-desktop/installer/build-windows-msi.ps1`.
- Confirm all runtime-referenced executables are staged and packaged.
- Record MSI version, ProductCode, payload hashes, and source commit.
- Verify the final release directory contains the intended flat artifacts, not stale subfolders.

Compilation alone does not satisfy this gate. The produced MSI must contain the binaries from the recorded source commit.

## 3. Clean Windows 11 Install

- Download or copy the exact candidate artifact to a clean VM.
- Verify provider discovery occurs before checkbox defaults are chosen.
- Verify only detected providers are preselected.
- Verify manually selected missing providers fail with a useful explanation.
- Verify unchecked providers are not patched, configured, closed, restarted, or removed.
- Verify selected provider apps are closed only when their install action requires it and are restarted intentionally.
- Verify per-user configuration is written for the interactive user, not the elevated installer account.
- Verify logs name every helper phase and its result.
- Verify installed binary and manifest hashes match provenance.

## 4. Core Runtime And Discovery

- Run `axiowl status` and record version, manifest, activation, service, and runtime state.
- Run provider/session discovery.
- Verify discovered registry rows retain provider-owned session ids.
- Verify stale paths are not promoted to sendable rows.
- Verify manual/protected rows survive discovery merges.
- Verify absent providers remain absent rather than becoming optimistic successes.

## 5. Provider Surface Validation

Test each supported surface independently, including separate agent-window, editor, extension, and CLI surfaces under the same brand.

For every supported send path:

1. Select or create a current session.
2. Send a message containing a unique release run id.
3. Record the AxiOwl acceptance receipt.
4. Confirm provider-visible receipt of the complete message.
5. Require a response through AxiOwl MCP.
6. Verify sender provider/session metadata.
7. Verify run and receipt correlation.

For create and rename, test and record those operations independently. Authentication or quota blocks are not code failures, but they also do not supply support proof.

## 6. A2A Server Validation

- Fetch the public Agent Card and validate advertised URLs and capabilities.
- Validate scoped-agent cards and authorization boundaries.
- Test HTTP+JSON and JSON-RPC message send.
- Test task get, list, cancel, and extended card behavior.
- Test push configuration, retries, terminal failure, and dead-letter records.
- Verify streaming routes continue to advertise `implemented=false` until implemented.

### Service/User Boundary

- Install the optional `AxiOwlApi` feature and verify the LocalSystem service lifecycle.
- Test public service routes separately from protected interactive-user provider routes.
- Verify broker-required routes fail loudly with `503` when no user broker is available.
- Do not mark protected service-backed desktop delivery complete until `axiowl-user-broker.exe` is packaged, launched, authenticated, and lifecycle-tested.

## 7. External A2A Client Validation

- Import an independent Agent Card.
- Test unauthenticated, bearer, and OAuth client-credential modes as claimed.
- Send and retrieve tasks through both supported A2A bindings.
- Verify task state, artifacts, timeout, cancellation, and error mapping.
- Confirm interoperability against an independent implementation, not only AxiOwl-to-AxiOwl.

## 8. Inter-Node Validation

Use two clean AxiOwl nodes and validate each claimed transport independently:

- direct HTTPS A2A;
- hosted relay;
- A2A over SSH;
- guarded legacy migration path.

For each path, record node identity, selected transport, redacted credential source, preflight result, task id, destination result, and reply correlation. Disable or break one route at a time to prove fallback policy and verify that logs disclose every fallback.

## 9. XMPP Branch Validation

XMPP is currently branch-only. Validation must occur from `feature/xmpp-remote-transport` with branch provenance and must cover WSS/TLS verification, SCRAM-SHA-256, session routing, result correlation, external chat gateway policy, Prosody integration, and branch-specific MSI behavior.

Passing branch tests does not change current-main documentation. Merge, reconcile, package, clean-machine test, and then update the protocol matrix.

## 10. Uninstall, Repair, And Reinstall

- Install a deliberate subset of provider features.
- Prove those provider paths.
- Run MSI repair and verify feature ownership remains granular.
- Uninstall and verify only AxiOwl-owned state for installed features is removed.
- Verify unrelated provider chats, extensions, settings, and credentials remain intact.
- Reinstall with a different feature selection.
- Repeat discovery and end-to-end provider tests.

The second install must not succeed only because the first install left a stale extension, patch, registry row, or config entry behind.

## 11. Platform Validation

- Run the complete Windows release sequence for Windows claims.
- Validate the narrow Linux package only for the surfaces and functions it actually ships.
- Keep parked Linux desktop code and macOS outside supported product claims.

## 12. Documentation And GitHub

- Build the Docusaurus website with `npm run build`.
- Verify internal links and generated navigation.
- Confirm provider pages agree with the provider support matrix.
- Confirm protocol pages agree with the protocol support matrix.
- Confirm installer pages agree with actual WiX and helper ownership.
- Push the intended commit and verify GitHub Actions and GitHub Pages deployment.
- Publish MSI assets only after their separate release validation passes.

## Release Decision

A capability may be called supported only when its current artifact passes the applicable clean-machine, identity, delivery, reply, uninstall, and protocol gates. Implemented but unvalidated work remains implemented, target, experimental, or branch-only. Historical success guides engineering; current evidence governs the release claim.

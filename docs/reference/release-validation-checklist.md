# Release Evidence Checklist

This checklist keeps public release claims tied to an exact artifact and observed boundary. It does not turn source presence, an old success report, or a local acceptance receipt into proof of a current release.

## 1. Identify The Artifact

- Record the repository, `main` revision, release identity, platform, architecture, and artifact digest.
- Distinguish an allocated release identity from a successfully produced artifact.
- Distinguish a signed artifact from an immutable published release.
- Distinguish publication from internal or stable channel promotion.
- Ignore stale files next to the current release unless their provenance is explicitly selected.

## 2. Confirm Package Contents

For Windows, reconcile the current MSI with its build record, signing proof, signed-component manifest, provider-package inventory, and WiX feature map.

For Linux, reconcile the Debian package with its native executable, shared libraries, provider packages, service/user units, and detached signature when one is claimed.

For macOS, iOS, and Android, state whether the artifact is a local engineering build, signed development artifact, notarized/package-distributed artifact, or public store release. Do not collapse those stages.

## 3. Preserve Feature Ownership

On Windows, confirm that discovery chooses recommended defaults before the user reaches the final selection and that the package keeps these features independent:

- each provider surface;
- A2A Server;
- A2A Client/user broker;
- XMPP Client;
- XMPP Server;
- core runtime, CLI, mailbox, PATH, and discovery support.

Unchecked providers should not be patched, configured, closed, restarted, or removed merely because they were discovered.

## 4. Lifecycle Evidence

AxiOwl's supported software lifecycle vocabulary is:

- **Uninstall**;
- **Uninstall-install**.

Do not document repair, in-place upgrade, downgrade, or rollback as separate product modes.

Evidence for an Uninstall-install should show that the prior AxiOwl-owned installation was removed and the selected new artifact installed, without relying on stale provider bridges or old binaries. Provider-owned conversations, accounts, and unrelated extensions remain outside AxiOwl ownership.

## 5. Runtime Identity

Record the installed binary or package identity, effective user or service account, selected features, and runtime status. Do not treat an MSI exit code or package-manager success as proof that provider messaging or secure remote delivery works.

## 6. Provider Operations

Treat every provider surface and operation independently.

For a send claim, retain:

1. exact provider and surface;
2. target provider session ID;
3. AxiOwl request and receipt IDs;
4. provider-visible delivery evidence;
5. correlated MCP reply when reply support is part of the claim;
6. sender metadata showing the correct session answered.

Create and rename need their own evidence. Authentication, quota, or provider-version blocks should remain visible instead of being converted into a generic implementation failure or success.

## 7. A2A Evidence

Separate:

- Agent Card discovery;
- client authentication;
- A2A task acceptance;
- interactive-user broker handoff;
- destination provider effect;
- task completion;
- push callback delivery.

Current Windows packages A2A Server and A2A Client separately. A public service route can work while an interactive provider route is unavailable, and neither result proves XMPP.

## 8. Secure XMPP Evidence

Secure XMPP is merged into current `main`. A current claim should state which roles participated:

- Windows x86-64 Client;
- Linux x86-64 Client;
- Windows x86-64 self-host Server;
- Linux x86-64 self-host Server;
- cloud ARM64 Linux XMPP Server.

Then distinguish:

1. endpoint selection and TLS/hostname verification;
2. per-device transport authentication;
3. exact-resource ciphertext routing;
4. endpoint decryption;
5. device trust and signed action authorization;
6. replay/dispatch decision;
7. provider invocation;
8. protected receipt return.

Server health is not proof of endpoint authorization or provider effect. Source-complete platform roles are not automatically an installed five-role journey.

## 9. Security And Privacy Claims

- Verify that license state, account membership, device trust, provider login, and transport credentials are described as separate authorities.
- Confirm that public documentation does not expose tokens, private keys, cloud identifiers, internal object names, private addresses, or message bodies.
- Describe endpoint encryption without claiming that routing metadata disappears.
- Preserve fail-closed behavior and no cross-transport fallback for protected actions.
- Treat logs and provider session metadata as sensitive operational data.

## 10. Publication And Update Evidence

- Record the exact immutable release and provider-package manifests.
- Derive component and provider counts from current evidence, not prose.
- Confirm the public bytes match the signed sizes and digests.
- Record release publication separately from channel promotion.
- Record the channel and monotonic sequence followed by clients.
- Treat update check, download, stage, and apply as separate states.
- Confirm opportunistic checks did not retry the provider operation or auto-apply a package.

## 11. Website Status

Before changing a public support label, reconcile:

- [Product Capabilities](current-product-status.md)
- [Provider Support Matrix](provider-support-matrix.md)
- [Platform Support Matrix](platform-support-matrix.md)
- [Protocol Support Matrix](protocol-support-matrix.md)
- [Installer Behavior Matrix](installer-behavior-matrix.md)

Historical plans remain useful context, but current source, package definitions, signed release evidence, and observed deployment state govern current wording.

## Decision Language

Use the narrowest accurate statement:

- implemented in source;
- packaged;
- signed;
- installed;
- deployed;
- demonstrated end to end;
- supported for an exact provider/platform/operation.

Do not substitute one label for another.

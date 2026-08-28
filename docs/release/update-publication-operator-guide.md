# Update Publication And Pull Updates

This is the public, operator-readable description of AxiOwl's update pipeline. It explains what the repository implements and how the trust chain is meant to work without publishing private storage names, cloud identities, signing credentials, or internal network details.

## The Short Version

AxiOwl does not treat "the build finished" as "users can update."

```text
source and release identity
  -> compile product and provider workers
  -> sign Windows executable components
  -> export component and provider-package evidence
  -> build the MSI
  -> verify package structure
  -> sign the MSI last
  -> publish immutable release objects
  -> verify the public bytes again
  -> sign a release description
  -> promote a signed channel pointer
  -> client checks, verifies, downloads, stages, and explicitly applies supported package types
```

Building, publishing, and promoting are separate operations. That separation lets operators inspect an immutable release before making a channel point to it.

## Current Implementation Status

| Area | Current repository status |
|---|---|
| Windows release orchestration | Implemented in `release/Invoke-AxiOwlWindowsRelease.ps1` and the MSI builder. |
| Inner Windows component signing | Implemented with signing proof output. |
| MSI generation and final MSI signing | Implemented. The MSI is signed after its contents are final. |
| Signed-component export | Implemented as a manifest plus immutable archive. |
| Provider package export | Implemented for the complete current provider-package inventory. |
| Immutable release publication | Implemented by `services/update/tools/publish_release.py`. |
| Public read-back verification | Implemented by `services/update/tools/verify_public_release.py`. |
| Signed channel promotion and hold | Implemented by the channel tools under `services/update/tools`. |
| Client release check | Implemented in the native update manager and CLI. |
| Provider package pull and apply | Implemented as explicit provider-package operations. |
| Opportunistic one-shot checks | Implemented around common Create/Send workflows. |
| Whole-product application | Explicit local action after verified download and staging. |

Release records in the repository prove that this machinery has produced and published artifacts. They do not make every older artifact in `release/` current, and they do not prove that every published release was promoted to every channel.

## Three Different Events

### 1. Build And Sign

The builder produces signed bytes and evidence describing those bytes. Nothing is public merely because this completed.

### 2. Publish An Immutable Release

Publication uploads content-addressed component and provider-package bytes, reads them back, verifies their size and digest, creates a purpose-bound release description, and signs that description through the release-signing authority.

Publication does not change a channel pointer.

### 3. Promote A Channel

Promotion creates a new signed pointer for a named channel and monotonically advances that channel's sequence. Clients follow the pointer only after verifying its signature, channel identity, state, sequence, and referenced release.

An `internal` release can therefore exist while `stable` still points to an older release or has no pointer. A missing stable pointer does not mean no release was built or published.

## Internal First, Stable Later

The intended lifecycle is:

1. publish a release for the internal channel;
2. promote the internal pointer;
3. inspect the retrieved public bytes and internal behavior;
4. deliberately prepare the stable-channel release metadata;
5. promote the stable pointer in a separate operation.

The channel name is part of the signed release payload. An internal release description cannot simply be relabeled after signing. When the same immutable component bytes are approved for stable, the publication tooling re-verifies those exact bytes, changes the channel-specific release metadata, and obtains a new signature. It does not overwrite the existing internal release or component objects.

## Artifacts And Their Jobs

| Artifact | Purpose |
|---|---|
| Windows MSI | User-facing Windows installation package. |
| Signing proof | Records the signed Windows components and signing operations. |
| Build record | Connects release identity, source, package inputs, and produced files. |
| Signed-component manifest | Lists each exported first-party component, ownership, location, size, and digest. |
| Signed-component archive | Carries the exact signed component bytes consumed by publication. |
| Provider package manifest | Names one provider package, its provider ID, package revision, worker, assets, ownership, and digests. |
| Provider package archive | Carries one immutable provider package revision. |
| Signed release envelope | Describes one immutable product release for one channel and binds all referenced bytes. |
| Signed channel pointer | Names the active release for one channel and advances a sequence. |
| Publication and verification receipts | Record what was uploaded, read back, verified, and promoted. |

Counts must come from the current manifests and provider inventory. They must not be copied from an older report. The number of unique signed executable files can differ from the number of packaged occurrences because one signed file can appear in more than one package location.

## Provider Packages

Provider packages are independently identifiable units within a product release. A package manifest includes at least:

- provider ID;
- package revision;
- owning component and worker identity;
- install strategy and owned assets;
- file sizes and cryptographic digests;
- compatibility and update behavior declared by that provider package.

The current inventory is generated from `providers/provider-package-inventory.json`. Publication requires one manifest/archive pair for every provider in that inventory; an omitted provider package is not silently ignored.

### Package Generations

In update code, a **generation** means an installed provider-package revision. It does not mean AI-generated content.

Provider application follows a revision model:

```text
download immutable package
  -> verify signed release and package metadata
  -> verify every package file
  -> stage a new revision directory
  -> apply through the provider package's owned installer strategy
  -> update the current-revision pointer only after success
```

Provider packages do not own another provider's files, config scope, process scope, or credentials.

## Windows Build And Signing Order

The production Windows builder follows this order:

1. establish a release identity and source revision;
2. compile the root Windows targets and the selected Node or native daemon payloads;
3. stage the exact files selected for release;
4. sign first-party PE files that require platform signing;
5. produce signing proof and provider-package exports;
6. generate the WiX source from current feature and payload ownership;
7. build the MSI and inspect its structure;
8. sign the final MSI;
9. export the signed component bytes and records used by publication.

Signing the MSI earlier would invalidate its signature when packaging changed. Publishing locally staged files without exporting and re-verifying the final signed bytes would weaken the source-to-user chain.

The primary repository interfaces are:

```powershell
release\Invoke-AxiOwlWindowsRelease.ps1
apps\windows-desktop\installer\build-windows-msi.ps1
```

The release coordinator also contains environment-specific controls for the authorized production builder. Its existence should not be interpreted as a portable, zero-configuration release command for an arbitrary computer.

## Immutable Publication

Immutable objects are written once. Publication rejects an attempt to replace an existing object with different bytes.

This gives the system a useful failure boundary:

- compilation can fail without changing publication;
- signing can fail without changing publication;
- upload or read-back verification can fail without changing a channel;
- release signing can fail without changing a channel;
- promotion is the final separate visibility decision.

Until promotion succeeds, clients following the existing pointer remain on its prior release.

## Signed Metadata

Release and channel metadata use purpose-bound signed envelopes. The verifier checks more than a generic signature:

- expected envelope purpose;
- product and channel identity;
- release version and source identity;
- object URL, size, and digest;
- provider package identity and complete inventory;
- channel state and monotonic sequence;
- signature authority and canonical payload representation.

This prevents a valid signature for one kind of record from being reused as another kind of authority. The public object host provides availability; trust comes from verified signatures and hashes.

The public documentation intentionally does not list production bucket names, cloud tenancy identifiers, key identifiers, private audit locations, or signing credentials.

## Channel Hold And Recovery

A channel pointer can be placed into a signed hold state. A hold is an explicit update decision, not deletion of immutable releases.

Rollback is handled by promoting a newly signed channel pointer to a previously verified immutable release, with a higher channel sequence. Existing release bytes are not rewritten and sequence numbers do not move backward.

If publication fails before promotion, correct the failed stage and rerun from a cleanly identified artifact set. Do not patch an already published immutable object in place.

## Client Pull Behavior

The native CLI exposes current update inspection and provider-package operations:

```text
axiowl update status
axiowl update check [--channel <channel>] [--endpoint <url>]
axiowl update provider status <provider-id>
axiowl update provider pull <provider-id> [--channel <channel>] [--endpoint <url>]
axiowl update provider apply <provider-id> --package-root <verified-directory>
```

A client check:

1. retrieves the selected signed channel pointer;
2. verifies the pointer before trusting its release URL;
3. retrieves and verifies the signed release envelope;
4. verifies referenced component or provider-package metadata and bytes;
5. publishes verified local state atomically.

Download and verification do not grant permission to invoke a provider package, overwrite another provider, or silently apply a whole-product update.

## Opportunistic Checks

Common Create/Send workflows can start a detached, one-shot update checker when the existing verified pointer is missing or older than the current four-hour freshness window.

Important behavior:

- the provider operation is not delayed by the checker;
- a failed provider operation keeps its original result;
- the provider operation is never retried by the update mechanism;
- a provider error can launch one forced check for an eligible provider package;
- a cross-process lock prevents duplicate concurrent check work;
- the checker rechecks freshness after acquiring the lock;
- verified state is written atomically and the checker exits;
- it never auto-applies a provider package or MSI.

The checker reuses the channel from the existing verified pointer. Only when no valid verified pointer exists does it use the configured first-run channel fallback.

This is opportunistic pull behavior, not polling, a heartbeat, or an always-running update service.

## GitHub And Local Releases

GitHub is useful for source history, documentation deployment, Actions, and public release assets. It is not the cryptographic authority merely because a file appears in a GitHub release.

The production pipeline can build and sign on an authorized Windows builder and publish through the update tooling without requiring GitHub to perform the signing operation. When GitHub automation participates, its identity, permissions, and produced artifacts still need to be connected to the same release evidence.

## Version Reality

AxiOwl records release identities under `release/windows-releases`, generated artifacts under `release`, and immutable run evidence under `release/runs`. These can legitimately show different ages:

- a release identity may be allocated before a successful build;
- a release folder can contain an older signed artifact;
- a published release can exist before channel promotion;
- an installed machine can remain on an older promoted version.

Public status should name which of those statements is being made. A bare version number is not enough.

## Troubleshooting By Stage

| Symptom | Boundary to inspect |
|---|---|
| No MSI produced | Compilation, staging, WiX authoring, or package structure. |
| MSI exists but no signing proof | Component or final MSI signing. |
| Archive and manifest disagree | Signed-component export contract. |
| Provider package rejected | Provider inventory, package identity, ownership, size, or digest. |
| Immutable upload rejected | Existing object differs or publication input is inconsistent. |
| Public verification fails | Retrieved bytes, envelope signature, purpose, channel, sequence, size, or digest. |
| Release exists but client sees nothing | Channel was not promoted, client follows another channel, or verified pointer is stale. |
| Create/Send failed and update also failed | Preserve the provider error; inspect the detached checker separately. |
| Package downloaded but not active | Staging or explicit provider apply did not complete; current pointer should remain on the prior revision. |

## Authoritative Repository Material

The current implementation is defined by:

- `release/Invoke-AxiOwlWindowsRelease.ps1`
- `apps/windows-desktop/installer/build-windows-msi.ps1`
- `providers/provider-package-inventory.json`
- `services/update/tools/publish_release.py`
- `services/update/tools/promote_channel.py`
- `services/update/tools/republish_release_channel.py`
- `services/update/tools/hold_channel.py`
- `services/update/tools/verify_public_release.py`
- `services/update/schemas/signed-component-export.schema.json`
- `services/update/schemas/provider-package.schema.json`
- `services/update/schemas/signed-envelope.schema.json`
- `services/update/schemas/channel-pointer.schema.json`
- `apps/windows-desktop/src/update_manager.cpp`
- `apps/windows-desktop/src/application_workflows.cpp`

Internal operator documents contain infrastructure-specific values and recovery details. This public guide intentionally describes the trust model and interfaces without reproducing those secrets or identifiers.

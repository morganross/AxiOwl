# Release Validation Checklist

This checklist is the source of truth for release and QA validation. It exists to prevent the most expensive failure mode: publishing a build that compiles but does not install, discover, send, or receive correctly on another machine.

## Release Philosophy

AxiOwl release validation must prove behavior, not intent. A clean build is necessary, but it is only the first gate. The release has to prove that the MSI contains the current binary, the installer selects the right features, the runtime can discover provider sessions, and supported providers can respond through AxiOwl MCP.

Plain English version: the release is not done when the MSI exists. The release is done when a clean machine can install it and providers can answer.

## Preflight

- Confirm repo, branch, and folder.
- Confirm branch is `main`.
- Confirm the working tree contains only intentional changes.
- Confirm provider support status in [Provider Support Matrix](provider-support-matrix.md).
- Confirm installer behavior in [Installer Behavior Matrix](installer-behavior-matrix.md).
- Confirm docs describe current behavior, not a stale plan.
- Remove stale local release artifacts that could be confused with the new build.
- Record the source commit that produced the artifact.

## Clean Build

- Build the native Windows app from current source.
- Run CMake tests.
- Run installer safety checks.
- Build MSI through `apps/windows-desktop/installer/build-windows-msi.ps1`.
- Verify generated MSI contains the current `axiowl.exe`, manifest, VSIX payloads, helper executables, and expected WiX custom actions.

## MSI Provenance

Verify:

- manifest source commit;
- package version;
- ProductCode rotation;
- payload hashes;
- installed `axiowl.exe` hash after install;
- release folder does not contain stale subfolder artifacts or old MSI confusion.

The purpose is simple: when a user says they installed the latest build, AxiOwl should be able to prove which source produced it.

## Clean VM Install

On a clean Windows 11 VM:

- download from GitHub or the intended release source;
- install through the MSI;
- verify checkbox defaults are based on discovered providers;
- verify missing providers are not preselected;
- verify unchecked providers are not patched, closed, restarted, or removed;
- verify selected provider apps are closed only when required;
- verify install logs are written;
- verify `axiowl status` can explain version, manifest, and activation state;
- verify no unexpected terminal/window spam beyond unavoidable Windows Installer UI.

## Provider Discovery

- Run AxiOwl discovery after install.
- Verify registry rows for discovered providers.
- Verify provider session ids are stable enough to address.
- Verify stale paths are not enrolled as sendable.
- Verify missing providers remain unchecked/unsupported instead of silently passing.
- Verify discovery logs explain provider absence or failure.

## Create Chat Tests

- Use one fresh/current target per supported provider surface.
- Avoid old stale chats for release proof.
- Record a unique run id for each test round.
- Create new chats where the provider supports create.
- Use existing current chats where create is not supported or unsafe.

## Send/Receive Tests

For each supported provider surface:

- send a message asking for a response over AxiOwl MCP;
- include the unique run id;
- confirm the target receives the message;
- confirm the provider replies through AxiOwl MCP;
- confirm the reply includes the expected run id;
- confirm sender identity maps to the provider/session that replied;
- confirm `accepted_by_axiowl` is not treated as delivery proof.

## CLI Tests

CLI providers must be tested separately from editor and agent surfaces.

For CLI providers:

- confirm CLI is installed;
- confirm CLI auth is available;
- discover or create a CLI session;
- send through AxiOwl;
- require reply through AxiOwl MCP;
- verify provider-owned sender metadata;
- reject environment-only identity as final support;
- keep auth-blocked providers as `target`, not `supported`.

## Uninstall/Reinstall Tests

- Install selected providers.
- Verify provider response paths.
- Uninstall.
- Verify AxiOwl-owned runtime/config cleanup.
- Verify unrelated provider data remains intact.
- Reinstall.
- Verify checkbox defaults again.
- Verify selected-only provider behavior.
- Retest supported providers.

Uninstall/reinstall tests matter because stale config can make a broken new installer look successful or make a working installer look broken.

## GitHub Upload

- Commit intentional source/docs/build changes.
- Push to `main` only when requested and validated.
- Upload MSI artifact only after release validation passes.
- Write a success-method report for any new provider/install method that passed end-to-end.
- Confirm GitHub Actions workflows pass.
- Confirm GitHub Pages docs build when docs changed.

## Release Decision

Publish only when:

- build passed;
- MSI provenance passed;
- clean VM install passed;
- provider response tests passed for supported providers;
- uninstall/reinstall passed;
- docs match actual status;
- known risks are documented;
- no target provider is presented as supported.

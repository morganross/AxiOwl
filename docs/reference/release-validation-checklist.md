# Release Validation Checklist

This checklist is the source of truth for release and QA validation.

## Preflight

- Confirm repo, branch, and folder:
  - Repo: current AxiOwl GitHub repository.
  - Branch: `main`
  - Folder: project root containing `apps/windows-desktop`
- Confirm working tree contents are intentional.
- Confirm provider support status in [Provider Support Matrix](provider-support-matrix.md).
- Confirm installer behavior in [Installer Behavior Matrix](installer-behavior-matrix.md).
- Remove stale release artifacts that could be mistaken for the new build.

## Clean Build

- Build native Windows app from the current source.
- Run CMake tests.
- Run installer safety checks.
- Build MSI through `apps/windows-desktop/installer/build-windows-msi.ps1`.
- Verify generated MSI contains the current `axiowl.exe`, manifest, VSIX payloads, helper executables, and expected WiX custom actions.

## MSI Provenance

- Verify manifest source commit.
- Verify package version.
- Verify ProductCode rotation.
- Verify payload hashes.
- Verify installed `axiowl.exe` hash matches the MSI manifest after install.

## VM Install

- Install on a clean Windows 11 VM.
- Confirm checkbox defaults are based on discovered providers.
- Confirm unchecked providers are not installed, patched, closed, restarted, or removed.
- Confirm selected provider apps are closed only when required for that selected provider action.
- Confirm logs are written.
- Confirm no unexpected terminal/window spam except unavoidable Windows Installer progress UI.

## Provider Discovery

- Run AxiOwl discovery after install.
- Verify registry rows for discovered providers.
- Verify stale paths are not enrolled as sendable.
- Verify missing providers remain unchecked/unsupported instead of silently passing.

## Create Chat Tests

- Create or target one fresh/current chat per supported provider surface.
- Avoid old stale chats for release proof.
- Record run id for each test round.

## Send/Receive Tests

- Send a message to each supported provider surface asking for a response over AxiOwl MCP.
- Confirm the reply includes the expected run id.
- Confirm sender identity maps to the provider/session that replied.
- Confirm `accepted_by_axiowl` is not treated as delivery proof.

## CLI Tests

- Test supported CLI providers separately from editor/agent surfaces.
- Confirm CLI provider replies include provider-owned MCP metadata.
- Do not count environment-injected session identity as final CLI support.
- Auth-blocked CLI providers remain `target`, not `supported`.

## Uninstall/Reinstall Tests

- Install.
- Verify selected providers.
- Uninstall.
- Verify AxiOwl-owned runtime/config cleanup.
- Reinstall.
- Verify selected-only provider behavior.
- Confirm robust reinstall does not depend on stale folders or old registry rows.

## GitHub Upload

- Commit intentional source/docs/build changes.
- Push to `main` only when requested and validated.
- Upload MSI artifact only after release validation passes.
- Write a success-method report for any new provider/install method that passed end-to-end.

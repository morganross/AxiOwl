---
sidebar_position: 2
---

# Clean VM Validation

Clean VM validation proves the installer can work outside the developer machine.

## Why It Matters

Developer machines accumulate state: old configs, cached provider sessions, installed tools, and environment variables. A build that works there may fail on a clean machine.

## Minimum VM Test

1. Start fresh Windows VM.
2. Install only intended provider apps/CLIs.
3. Download MSI from GitHub/release source.
4. Run installer.
5. Verify checkbox defaults.
6. Finish install.
7. Run `axiowl status`.
8. Run discovery.
9. Send provider test messages.
10. Save logs.

## What Clean VM Catches

- missing dependencies;
- wrong installer defaults;
- stale path assumptions;
- auth assumptions;
- build artifact mismatch;
- provider config path bugs;
- patch path bugs.

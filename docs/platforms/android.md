# Android

The Android client is a native Kotlin/Compose application with a native security bridge. It has moved well beyond the original transport-only prototype, but it is still an engineering preview.

## Implemented Direction

- website account and pool onboarding;
- join-only later-device admission;
- protected signing and storage custody;
- direct redemption of per-device XMPP transport credentials;
- secure WebSocket XMPP transport and connection state;
- sealed contact-directory consumption;
- native trust-verifier and OMEMO integration work;
- separate A2A client behavior.

## Current Limit

No public Android release is claimed. Production connection and message success remain unavailable until the exact native verifier, protected session runtime, and live server-identity binding are all present. The app does not silently fall back to manual credentials or plaintext messaging when those requirements are absent.

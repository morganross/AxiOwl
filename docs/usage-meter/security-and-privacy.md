---
title: Usage Meter Privacy And Account Control
---

# Usage Meter Privacy And Account Control

Usage Meter needs access to provider-reported readings. It keeps the account that supplies those readings separate from the dashboard, cloud bindings, and phone display.

## Local Collection

The desktop service presents its dashboard through a local loopback connection. Provider requests originate from the desktop using the selected account method.

Provider account profiles, observations, and logs use the application's user-specific state location. Account isolation separates managed environments; it should not be confused with a complete operating-system sandbox.

## Provider Credentials

Use the dedicated account login or key controls. Credentials stay in their intended provider or application-managed account store and are not fields in the quota snapshot returned to the dashboard.

Adding a label is not authentication. The app uses provider identity where the method supplies it and preserves the method's actual account limitations.

Removing an account removes its AxiOwl-managed binding or profile according to that platform's controls. It should not require deleting unrelated provider credentials or another account's data.

## Cloud Profiles

Cloud collection uses the profile and billing scope you select. The app reads existing credential configuration for that connection without changing the cloud CLI's default account or modifying cloud resources.

Discovery presents local metadata and readiness hints. It does not perform a billing query. Activation and manual refresh are explicit actions, and providers with billable query methods require deliberate consent.

Subscription sign-ins and cloud billing credentials remain separate.

## Encrypted Companion Connections

Usage Meter maintains its own desktop identity, device approvals, and revocation. Pairing grants access to the allowed usage snapshot through an encrypted connection.

The relay routes encrypted application traffic. It does not need the plaintext quota data or provider credentials to carry it. Routing metadata, timing, and connection availability remain visible to infrastructure involved in delivery.

The phone receives only the fields needed to display readings. It does not obtain a provider credential, terminal, or agent-control capability.

## Local Phone State

The Android companion protects its client identity and stored readings using platform-backed storage. The iPhone companion uses its own device-specific Keychain state for pairing.

A stored reading retains its original observation time. It should not be interpreted as a fresh provider response after a network interruption.

## Share Support Information Carefully

Share the product version, provider, collection method, visible status, and time of the reading. Keep tokens, cookies, device authorization codes, key files, raw provider responses, and private billing identifiers out of screenshots and public messages.

Cloud account names and subscription identities can also be personal information. Include only the fields needed to explain the issue.

## What The Meter Does Not Decide

Usage Meter does not change provider limits, purchase capacity, automatically move agent sessions, or treat an unknown reading as available quota. It gives you information for a decision that remains yours.

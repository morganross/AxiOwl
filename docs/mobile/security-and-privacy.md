---
sidebar_position: 5
title: Mobile Security And Privacy
---

# Mobile Security And Privacy

AxiOwl Mobile connects a specific phone to a specific host. Pairing, encrypted transport, and provider permissions serve different purposes: identify the device, protect the connection, and control what an agent may do.

## Approve The Intended Device

The host creates a fresh pairing offer. The phone presents its identity, and the desktop user approves or rejects the pending device.

Treat the pairing QR or link as private setup information. It is not a public invitation or something to include in a support screenshot. Review unexpected pending devices before accepting them.

Use the host's device controls to remove access when a phone is lost or no longer belongs in the setup.

## Encryption Between Endpoints

On the encrypted relay route, application content is protected between the paired phone and host. The relay forwards encrypted traffic and the routing information needed to deliver it.

This protects content from being read merely by operating the relay. The paired endpoints still see the content required for the session, and a model provider receives the context sent through its own runtime.

Encryption does not make a compromised phone or host safe. Keep those devices and their app access protected.

## What Stays On The Computer

Provider credentials, running tools, working directories, and repository files remain in the host environment. The phone receives the views and controls exposed by the host.

Pairing does not copy a provider token into the mobile app. It also does not grant access to every user account on the computer.

Terminal and file controls can still be powerful: they operate against the real host environment. Approve only devices that should have the capabilities offered by that host.

## Direct Network Routes

A direct endpoint has its own transport and authentication configuration. The operator owns its exposure, firewall, VPN, and endpoint protection.

Use a deliberate protected route. Do not assume a public network address has the same security properties as a configured encrypted relay session.

## Permissions Remain With The Provider

A tool approval returns to the provider session that requested it. The relay does not approve commands, and a mobile pairing does not purchase model access or bypass provider permissions.

Read the selected host, agent, and operation before deciding.

## Connection Metadata

Infrastructure can observe connection timing, availability, routing identifiers, and traffic sizes. The host and phone see the session information necessary to provide the product.

Keep logs and support attachments narrow. Redact pairing offers, credentials, private paths, personal identifiers, and unrelated conversation content.

## Separate Product Pairing

Usage Meter has its own companion identity and approval. A Usage Meter device receives usage snapshots; it does not gain Mobile's session, file, or terminal capabilities.

The [family security guide](../security.md) explains how these roles fit together.

---
sidebar_position: 3
---

# Pairing And Device Trust

Pairing answers a narrow question: **which mobile client identities may open a session with this AxiOwl host?**

It is separate from website login, license entitlement, relay operations, and provider authentication.

## Pairing Flow

1. The desktop asks the running daemon to open a pairing window.
2. The daemon creates a fresh challenge and pairing offer.
3. The desktop displays the daemon-generated QR code or pairing link.
4. The phone connects and presents its stable client identity.
5. The daemon lists the phone as pending.
6. The desktop user approves or rejects it.
7. An approved identity becomes part of the host's trusted-device list.

## Multiple Paired Devices

The daemon stores paired devices as individual records. More than one phone or tablet can be paired to the same host. Connection status and active connection count can be reported per device.

## Reconnection

Relay encryption can use fresh transport material for a new connection while the daemon continues to recognize the stable mobile client identity established during pairing. This lets a trusted phone reconnect without becoming a new device every time.

## Removal And Reset

The desktop can reject a pending device, remove a paired device, or reset paired-device state. Active connections for removed devices are closed, and the device must complete pairing again before opening another daemon session.

## Pairing Does Not Copy Provider Credentials

An approved phone gains access to the daemon protocol exposed by the host. Provider account tokens, project files, and provider processes remain on the host computer.

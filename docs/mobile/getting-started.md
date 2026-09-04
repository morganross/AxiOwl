---
sidebar_position: 2
---

# Install, Pair, And Connect

AxiOwl Mobile needs an AxiOwl host with a running daemon. Pairing gives one mobile installation an approved relationship with that host.

## Prepare The Host

On Windows, select one daemon runtime during AxiOwl installation:

| Choice | Use |
|---|---|
| AxiOwl Node daemon | Recommended broad connected-agent runtime using the installed Node environment |
| AxiOwl native C++ daemon | Native Windows service, transport, core, and provider process architecture |
| No mobile daemon | Local provider, mailbox, A2A, and SSH use without AxiOwl Mobile access |

Linux and macOS packages include an AxiOwl-branded daemon through their normal platform lifecycle.

Open the provider products you want to use and confirm that their provider runtimes can operate on the host.

## Install AxiOwl Mobile

Install the AxiOwl mobile application for Android or iPhone. The application creates and protects its own mobile client identity.

## Create A Pairing Offer

1. Open the **Mobile App** area in AxiOwl on the host.
2. Select **Pair a device**.
3. The desktop asks the running daemon for a fresh pairing offer.
4. The daemon opens a time-limited pairing window and returns the QR image and pairing link.

The offer identifies the daemon host and the relay route needed to begin the connection.

## Scan Or Import

On the phone:

1. Choose **Scan QR code**, or choose **Paste pairing link**.
2. Import the offer.
3. The app opens the offered relay connection.
4. The mobile client presents its stable identity to the daemon.

## Approve On The Host

The phone appears as a pending device in the desktop interface. Review the intended device and approve it locally.

The daemon stores approved mobile identities individually. A host can pair more than one phone or tablet.

## Open The Host

After approval, the mobile app stores the host profile and available connection route. Open that host to load its provider catalog, projects, workspaces, and agents.

## Add A Direct Route

A paired host can also receive a direct connection entry for a local network, VPN, Tailscale, or managed address. The app associates that route with the existing immutable host ID rather than creating a duplicate host.

## Remove A Device

Removing a paired client closes its active daemon sessions. The device must receive a new pairing offer and local approval before connecting again.

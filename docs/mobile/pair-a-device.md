---
sidebar_position: 2
---

# Pair A Mobile Device

Pairing gives an Android phone or iPhone an approved relationship with one AxiOwl host.

## Before You Begin

- Install AxiOwl on the computer.
- Choose the recommended Node daemon or the native C++ daemon during Windows setup.
- Start the daemon and open the AxiOwl desktop interface.
- Install the AxiOwl mobile app on the phone.

## Pair With A QR Code

1. Open the **Mobile App** tab on the computer.
2. Select **Pair a device**.
3. AxiOwl asks the running daemon for a fresh pairing offer and displays its QR code.
4. On the phone, choose **Scan QR code** and scan the display.
5. The phone connects through the offered route and presents its device identity.
6. Approve the pending device from the computer.
7. The host appears in the mobile app.

You can also copy the pairing link from the computer and use **Paste pairing link** on the phone.

## Time-Limited Approval

The pairing offer opens a bounded approval window. A new phone becomes trusted only when it presents the expected offer during that window and the desktop user approves it.

Closing the window or rejecting the request leaves the device unpaired.

## Multiple Phones And Tablets

The daemon stores a list of approved client identities rather than one shared mobile password. You can pair more than one device, see whether each is connected, and remove trust for an individual device.

## Pairing And Provider Accounts

Pairing authorizes the phone to connect to the AxiOwl daemon. It does not copy provider credentials to the phone. Codex, Claude Code, OpenCode, Cursor, and other provider runtimes continue to authenticate and run on the host computer.

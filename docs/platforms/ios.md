# iPhone

The iPhone app is a native SwiftUI client designed to join an existing AxiOwl account pool. It does not create the first trusted desktop authority.

## Product Shape

- account sign-in uses a normal browser-based account flow;
- a later-device request is approved by an already trusted device;
- raw XMPP credentials are redeemed directly by the phone and stored in protected local custody;
- manual JID/password entry and legacy pairing are not the normal product path;
- A2A remains a separate HTTPS protocol client;
- XMPP messaging is intended to use the same protected action meaning as desktop endpoints.

## Current Limit

The source and simulator-build work are real, but no App Store or public signed distribution is claimed. Protected messaging remains unavailable until the complete Apple-callable trust, encryption, routing, and authorization runtime is supplied and linked. The app fails closed instead of sending an unprotected substitute.

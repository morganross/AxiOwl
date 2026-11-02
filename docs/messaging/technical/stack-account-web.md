---
title: "Account authority and documentation web stack"
slug: /messaging/technical/stack-account-web
description: "WordPress account service and separately delivered Markdown documentation."
---

# Account authority and documentation web stack

Two web responsibilities must be distinguished: the account authority used by applications, and the documentation website used by readers.

## Account authority

The account authority is a PHP WordPress plugin using WordPress authentication, REST routes, nonce-protected browser approval and the WordPress database. The reviewed plugin README specifies WordPress 6.2/PHP 7.4 or newer and no separate Composer runtime dependency.

It stores account/device membership, public device identity, short-lived routing offers, token/code hashes and security-event records. It is not the provider's credential database or conversation archive.

The browser login flow uses the website's existing session and a PKCE-bound authorization code. The desktop does not ask the user to give it the WordPress password. TLS, correct proxy HTTPS handling and non-cacheable authenticated/token responses remain deployment responsibilities.

## Public documentation

The public docs are Markdown/MDX rendered with Docusaurus and React. The reviewed source uses Docusaurus 3.10.1 and a Node 20-or-newer development requirement. These are documentation-build dependencies, not desktop application prerequisites.

The production embedded profile leaves the surrounding navigation/theme/footer to the WordPress website shell. Docusaurus supplies the documentation routes and sidebar. A docs source commit is separate from a website deployment.

Website cookies, account sessions, analytics or hosting logs must be evaluated under the actual website configuration and Privacy Policy. They must not be described as desktop application telemetry without evidence.

## Security and operations

Protect account backups and salts as sensitive operational material. Preserve device/token-family state during upgrades. Plugin removal is not an automatic data-purge instruction.

The website shell, documentation build and account plugin can be upgraded on different schedules. A successfully published docs page does not establish that the corresponding application feature or backend migration is deployed.

See [account discovery](account-and-device-discovery.md), [network connections](network-connections.md) and [release status](source-and-release-status.md).


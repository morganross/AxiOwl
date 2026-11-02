# AxiOwl Documentation

User documentation for the AxiOwl product family, published at [axiowl.com/docs](https://axiowl.com/docs/).

## Product Guides

- [What is AxiOwl?](docs/what-is-axiowl.md)
- [Product guide and everyday setup](docs/product-guide.md)
- [AxiOwl Messaging](docs/messaging/README.md)
- [Axiom Messaging](docs/axiom.md)
- [AxiOwl IDE](docs/ide/README.md)
- [AxiOwl Mobile](docs/mobile/README.md)
- [AxiOwl Usage Meter](docs/usage-meter/README.md)

The guides cover setup, everyday workflows, providers, accounts, connections, privacy, and updates. Product-specific pages keep the distinction between agent control and usage-reading companions clear.

The Mobile category also covers [on-device agents versus connected desktop sessions](docs/mobile/on-device-agents.md). The product/platform map identifies thirteen targets separately from shared daemon, relay, proxy, and helper roles. Current source and installed outcomes are described at their actual scope rather than as universal feature parity.

## Messaging by audience

- New users: [Overview](docs/messaging/README.md), [who it is for](docs/messaging/who-its-for.md), [getting started](docs/getting-started.md).
- Everyday users: [Send workflow](docs/messaging/sending-messages.md), [components and updates](docs/messaging/components-and-updates.md), [help](docs/messaging/faq-troubleshooting.md).
- Integrators and evaluators: [MCP integration](docs/messaging/integrating-agents.md), [architecture](docs/messaging/architecture.md), [technology stack](docs/messaging/technology-stack.md).
- Administrators: [Administration](docs/messaging/administration.md), [privacy/security](docs/messaging/security-and-privacy.md), [remote access](docs/messaging/mobile-and-remote.md).

The Messaging set follows the explicit-Send contract: authored body, native identity, exact destination, separate admission/delivery, and no automatic messaging exchange. Historical observations do not establish current universal compatibility.

The [Messaging technical handbook](docs/messaging/technical/README.md) adds stack-specific references, provider contracts, data/credential lifecycle, network ingress/egress and defaults, account discovery, security boundaries, installation/update behavior and operations. Its [feature coverage map](docs/messaging/technical/feature-reference.md) provides the complete reading index, and [source/release status](docs/messaging/technical/source-and-release-status.md) separates source-only work from installed behavior.

## Shared References

- [Workflows and benefits](docs/use-cases.md)
- [How the products work together](docs/how-it-works.md)
- [Products and platforms](docs/platforms.md)
- [Security and privacy](docs/security.md)
- [Help and everyday questions](docs/troubleshooting.md)
- [Architecture and source guide](docs/developer.md)
- [Releases and updates](docs/release/update-publication-operator-guide.md)

## Source And Publication

Markdown lives in `docs/`. `sidebars.js` organizes substantial guides by product without changing their established public URLs.

This Docusaurus application has an embedded production profile for the WordPress-owned website shell. WordPress supplies the global navigation, theme, and footer; Docusaurus supplies the documentation routes, content, and sidebar under `/docs/`.

GitHub is the source history. Website publication is a separate operation; this repository no longer deploys automatically through GitHub Pages. Do not build the documentation on the local Windows workstation.

## Editorial Scope

Use current product code and product contracts to describe actual account, session, connection, and data ownership. Explain features in plain English with useful steps and clear product boundaries.

Keep secrets, private infrastructure identifiers, deployment credentials, and detailed cryptographic implementation recipes out of public documentation. Product release and capability claims belong to their exact platform and distribution, not every application with the AxiOwl name.

# AxiOwl Documentation

User documentation for the AxiOwl product family, published at [axiowl.com/docs](https://axiowl.com/docs/).

## Product Guides

- [What is AxiOwl?](docs/what-is-axiowl.md)
- [AxiOwl Messaging](docs/getting-started.md)
- [Axiom Messaging](docs/axiom.md)
- [AxiOwl IDE](docs/ide/README.md)
- [AxiOwl Mobile](docs/mobile/README.md)
- [AxiOwl Usage Meter](docs/usage-meter/README.md)

The guides cover setup, everyday workflows, providers, accounts, connections, privacy, and updates. Product-specific pages keep the distinction between agent control and usage-reading companions clear.

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

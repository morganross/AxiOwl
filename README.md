<div align="center">
  <img src="https://github.com/morganross/AxiOwl/blob/main/owl_head_transparent.png" width="156" alt="AxiOwl owl mascot" />

  <h1>AxiOwl</h1>

  <p>
    <strong>Bring your AI tools together.</strong>
  </p>

  <p>
    Coordinate provider sessions, A2A agents, AxiOwl hosts, and paired mobile clients through one clear messaging and normalization layer.
  </p>
</div>

---

## What Is AxiOwl?

AxiOwl helps people and AI agents find the right session, send focused work through the correct provider integration, follow the handoff, and receive a correlated result.

It works as both:

- a **normalization layer** for providers, surfaces, sessions, targets, receipts, and replies;
- a **communication layer** for local provider packages, MCP, A2A agents, configured nodes, and paired mobile clients.

Documentation site: [morganross.github.io/AxiOwl](https://morganross.github.io/AxiOwl/)

## What You Can Build

- cross-provider project teams;
- builder and reviewer workflows;
- reusable specialist sessions;
- external A2A agent integrations;
- AxiOwl-to-AxiOwl task handoffs;
- mobile access to agent sessions running on paired AxiOwl hosts;
- observable workflows with receipts and correlated replies.

## How It Fits Together

```mermaid
flowchart LR
  human["Human or coordinator"] --> registry["AxiOwl registry"]
  registry --> route["Selected provider or protocol route"]
  route --> agent["Provider session or agent"]
  agent --> result["Reply, result, or artifact"]
  result --> human
```

AxiOwl normalizes the boundary while each provider keeps its own authentication, model access, session storage, and delivery behavior.

## Start Here

- [Explore use cases](https://morganross.github.io/AxiOwl/docs/use-cases)
- [See how AxiOwl works](https://morganross.github.io/AxiOwl/docs/how-it-works)
- [Install and send a first message](https://morganross.github.io/AxiOwl/docs/getting-started/install-first-run)
- [Browse provider surfaces](https://morganross.github.io/AxiOwl/docs/providers)
- [Pair a mobile device](https://morganross.github.io/AxiOwl/docs/mobile/pair-a-device)
- [Understand security and trust](https://morganross.github.io/AxiOwl/docs/security)

## Product Reference

- [Product Capabilities](https://morganross.github.io/AxiOwl/docs/reference/current-product-status)
- [Provider Support Matrix](https://morganross.github.io/AxiOwl/docs/reference/provider-support-matrix)
- [Platform Support Matrix](https://morganross.github.io/AxiOwl/docs/reference/platform-support-matrix)
- [Protocol Support Matrix](https://morganross.github.io/AxiOwl/docs/reference/protocol-support-matrix)
- [Architecture Overview](https://morganross.github.io/AxiOwl/docs/reference/architecture-overview)

## Security

AxiOwl pairs each mobile client to a host daemon with its own identity. Relay traffic is encrypted between the phone and host, while provider credentials and provider processes remain on the computer that owns the agent session.

Sensitive security reports should be shared privately with the maintainer rather than placed in a public issue.

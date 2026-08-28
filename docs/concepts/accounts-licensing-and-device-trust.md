# Accounts, Licensing, Hosts, And Paired Devices

Several AxiOwl services may appear behind one product, but they retain separate authority.

## The Short Version

| Boundary | What it answers | What it does not replace |
|---|---|---|
| Website account | Who signed in to AxiOwl.com? | Provider access or daemon pairing |
| License entitlement | Is an optional paid feature enabled? | Host identity, mobile pairing, or provider access |
| AxiOwl host | Which daemon owns these projects, agents, and timelines? | Provider authentication |
| Paired mobile identity | Which phone may open a daemon session? | Provider credentials or relay operator authority |
| Relay connection | Which paired phone and host are exchanging encrypted frames? | Provider authentication or account ownership |
| Provider account | May the provider runtime accept work from this host user? | AxiOwl website or mobile identity |

## Host And Mobile Identity

The host daemon owns a persistent host identity. A fresh pairing offer opens a bounded approval window. Each phone presents its own stable client identity, waits for desktop approval, and is stored as one independently managed trusted device.

The daemon can approve multiple phones. Removing one paired client does not change the identities of the other paired devices.

## Provider Authority Stays On The Host

The phone controls an agent through the daemon. Provider sign-in, repository access, model configuration, and provider processes remain on the computer.

## Licensing Is Separate

Activation remains purpose-separated licensing infrastructure. Ordinary host identity, mobile pairing, relay encryption, A2A, and provider authority do not come from an activation token.

See [Pair A Mobile Device](../mobile/pair-a-device.md) and [Trust Boundaries](../security/trust-boundaries.md).

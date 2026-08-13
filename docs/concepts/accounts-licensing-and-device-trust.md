# Accounts, Licensing, Pools, And Device Trust

Several AxiOwl services may appear behind one product or website, but they do not share one authority.

## The Short Version

| Boundary | What it answers | What it cannot authorize |
|---|---|---|
| Website account | Who signed in to AxiOwl.com? | Provider access, device trust, or message execution by itself |
| License entitlement | Is an optional paid feature enabled for this machine/account state? | Account identity, pool membership, XMPP credentials, or provider actions |
| Current pool | Which device group belongs to this account generation? | A device action without a valid trusted-device decision |
| Device trust | Which devices and keys are admitted, revoked, or replaced? | Provider execution without receiver authorization |
| XMPP provisioning | Which transport identity and credential may connect? | Device trust or action authority by itself |
| Provider account | May the provider accept work from this local user? | AxiOwl account or device trust |

## Why The Split Exists

A license database should not be able to manufacture a trusted device. An XMPP server should not decide that a message may invoke a provider. A provider login should not become an AxiOwl account credential. Separating these powers limits what any one service can do if it is misconfigured or compromised.

The public gateway may route different URLs to different services. A shared hostname is an operational convenience, not shared authority.

## First And Later Devices

The first eligible desktop establishes a new trust domain through a signed genesis process. Later devices submit a signed enrollment request and require approval from a currently trusted coordinator. The admitted device receives its own keys and transport credential; it does not copy another device's private identity.

If all trusted authority is lost, the old domain is not silently recovered by licensing, support, the server, or backups. The user creates a new trust domain and new credentials.

## Licensing Is Optional Feature State

The current Activation service is purpose-separated licensing infrastructure for an optional licensed message-body feature. Ordinary account, pool, device, XMPP, A2A, and provider authority do not come from an activation token.

See [Device Trust And Enrollment](../security/device-trust-and-enrollment.md) and [Trust Boundaries](../security/trust-boundaries.md).

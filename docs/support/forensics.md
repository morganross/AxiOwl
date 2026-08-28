# AxiOwl Support And Forensics

Support should identify the exact product route and then follow its boundaries in order.

## Route Types

| Route | Main evidence |
|---|---|
| Local provider | Registry target, provider worker result, transcript change, MCP reply |
| Mobile relay | Daemon health, pairing state, host/client IDs, relay connection, agent timeline |
| Mobile direct | Daemon health, direct endpoint policy, client authentication, agent timeline |
| External A2A | Agent Card, authentication, task ID, task state, result/artifacts |
| A2A-over-SSH | SSH identity, A2A request, task result |

## Installation Evidence

Record the exact MSI, selected provider features, A2A/SSH choices, and daemon runtime choice. The Windows installer can select the Node daemon, native C++ daemon, or no mobile daemon.

## Pairing Evidence

Capture only public-safe state:

- whether the daemon created a pairing offer;
- whether the offer was still within its approval window;
- whether the phone appeared as pending;
- whether the desktop approved or rejected it;
- whether the client is now listed as trusted and connected.

Do not attach the pairing link, private identity material, or complete device state to a public issue.

## Agent Evidence

Record host ID, project, workspace, agent ID, provider, underlying provider session ID, turn ID, and terminal timeline state. Preserve ordering and correlation while redacting private prompts and repository paths.

## Relay Evidence

Distinguish service reachability, host control connection, client data connection, encrypted session establishment, and daemon protocol readiness. The relay can be healthy while a particular host or phone is offline.

## A2A Evidence

Distinguish Agent Card discovery, client authentication, task acceptance, interactive-user broker handoff, provider effect, task completion, artifacts, and callback delivery.

## Support Bundle Principles

- include the first concrete error;
- include exact component versions;
- retain correlation identifiers;
- omit tokens, keys, pairing links, provider credentials, and unnecessary message bodies;
- state which boundary completed and which boundary did not.

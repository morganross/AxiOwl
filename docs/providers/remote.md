# AxiOwl Remote Nodes

Remote nodes let one AxiOwl installation address provider sessions owned by another installation.

## Capabilities

| Operation | Status |
|---|---|
| Node enrollment and verification | implemented |
| Remote discovery | implemented |
| Send | implemented |
| Create | unsupported |
| Rename | implemented through explicit remote contract |

## Transports

Current `main` supports direct HTTPS A2A, hosted A2A relay, A2A-over-SSH, and explicit legacy API/SSH migration modes. See [Inter-node Communication](../inter-node/README.md).

## Installer

Remote enrollment, deployment, and discovery features remain in the MSI and are unchecked by default. Remote routing is not used as a fallback to hide a broken local provider.

## Linux Boundary

The packaged Linux remote target is intentionally narrow and supports Codex CLI. It is not a general Linux equivalent of every Windows provider integration.

## Risks

- a pairing code is not a durable access token;
- direct A2A requires HTTPS and Agent Card preflight;
- fallback is blocked after ambiguous failures to prevent duplicate delivery;
- relay acceptance is not destination-provider proof.

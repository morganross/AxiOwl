# Security, Privacy, And Trust Boundaries

## Mobile App

The mobile app stores paired host profiles, connection methods, and its own client identity. It presents agent state and sends user controls to the selected daemon.

## AxiOwl Daemon

The daemon owns host identity, paired devices, projects, workspaces, agents, provider processes, authoritative timelines, and reconnect state.

## Hosted Relay

The relay joins phone and host connections and forwards encrypted frames. It does not own provider accounts, projects, agent history, or decrypted timeline content.

## Direct Network Route

The operator owns reachability, TLS or private-network protection, optional daemon authentication, firewall policy, and address lifecycle for direct connections.

## Provider

The provider owns its account, authentication, model access, session state, and execution behavior. The daemon launches or attaches to provider runtimes under the host user's context.

## Windows Service Host

The Windows service manages daemon lifecycle across interactive user sessions. Provider runtimes run in the user session rather than inheriting LocalSystem as provider authority.

## A2A

A2A remains a separate standards-based agent and task boundary. A paired mobile connection is not an A2A credential, and an Agent Card is not a daemon pairing offer.

## Installer And Updates

The installer owns selected AxiOwl files, services, provider integrations, and daemon runtime choice. Signed updates preserve those ownership boundaries.

## Licensing

Licensing enables optional product capability. It does not become host identity, mobile pairing, relay encryption, or provider authentication.

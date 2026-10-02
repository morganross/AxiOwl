---
sidebar_position: 3
title: Hosts And Connections
---

# Hosts And Connections

A host is a computer running the AxiOwl connection runtime and the provider agents you want to use. A saved host profile keeps that computer's identity and connection methods together.

## Name The Computer, Preserve Its Identity

Give a host a label that helps you recognize it. The underlying host ID remains the address for its projects and agents.

A renamed computer is not automatically a new host. Conversely, a newly installed host with a new identity should not inherit trust merely because it uses an old display name.

## Encrypted Relay

The relay carries encrypted application traffic between the paired devices. The host establishes outbound connections, making it possible to reach it across networks without configuring ordinary inbound port forwarding for that route.

The relay provides routing and availability. It does not run your provider agents, own the repository, or approve a tool request.

Your phone and host can change networks while retaining their paired identities. The app follows connection state and reconnects using the saved relationship.

## Direct Connections

A direct connection reaches the host runtime through an address you or an operator provide. This is useful on a local network, VPN, or another deliberately configured route.

Protect that endpoint with the authentication and network controls supported by the deployment. A private address, VPN membership, or host label does not replace product authorization.

Direct and relay routes have distinct connection arrangements. Do not assume the encryption properties of one automatically describe every configuration of the other.

## Several Routes, One Host

A host profile can contain multiple connection methods and a preferred method. Review the selected route when moving between networks. The routes point to one host identity and its existing agents.

The software's connection state tells you whether it is opening, reconnecting, unavailable, or ready for host operations. A connected host can still have a provider waiting for sign-in or permission.

## Several Computers

Keep projects and sessions attached to the computer that owns them. A path on a laptop is not necessarily present on a workstation, even if both have a folder with the same name.

Switching hosts changes the available provider processes, working directories, and account environment. It does not transfer those assets between computers.

## Reconnect To Work

After reconnecting, the client reconciles the agent timeline with the host. Review the latest state before sending another instruction, especially if a turn was already in progress when the connection changed.

A lost phone connection is different from a canceled provider task. The host can continue running the task while the phone is away.

## Other AxiOwl Connections

A2A connects agent endpoints and tasks. Messaging relay connections address agents enrolled on other computers. Usage Meter companions receive usage readings. These can reuse connection infrastructure while retaining separate permissions and product state.

Use the setup flow for the product you are connecting.

---
sidebar_position: 5
---

# Protocol And Transport Support Matrix

| Boundary | Product role | Identity and security model | Best fit |
|---|---|---|---|
| Local provider package | Provider-specific discovery and delivery | Provider-owned session identity and local user authentication | Same-computer provider coordination |
| MCP | Provider sessions call AxiOwl tools and return replies | Provider configuration plus provider-owned sender metadata | Agent-to-agent local coordination |
| Daemon client protocol | Projects, providers, agents, timelines, turns, permissions, and reconnect | Host ID, client ID, agent ID, ordered timeline state | Mobile and desktop clients of an AxiOwl host |
| Encrypted relay | Carries daemon client frames across networks | Paired host/client identity, end-to-end encrypted application frames, relay route IDs | Mobile access without inbound port forwarding |
| Direct daemon connection | Connects a client to a reachable daemon endpoint | Operator-selected network security and optional daemon authentication | LAN, VPN, Tailscale, or managed networks |
| A2A HTTP/JSON | Exposes or calls standards-based agents | Agent Card, endpoint authentication, task identity, and correlation | External agent services |
| A2A-over-SSH | Carries A2A between configured nodes | SSH host/user/key policy plus A2A semantics | Operator-managed node links |
| SSH command dispatch | Runs explicit AxiOwl CLI commands on configured nodes | SSH identity and command policy | Administrative or scripted remote operations |

## Choosing A Route

- Use a **local provider package** for a provider session on the same computer.
- Use the **daemon client protocol** for a paired phone or connected desktop client.
- Use the **encrypted relay** when the phone and host are on different networks.
- Use a **direct daemon connection** on a controlled network route.
- Use **A2A** for a standards-based external agent.
- Use **A2A-over-SSH** for an explicitly managed AxiOwl node.

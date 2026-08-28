---
sidebar_position: 6
---

# Troubleshooting Connected AxiOwl Routes

## 1. Identify The Route

Record whether the target is:

- a local provider session;
- a paired host over the encrypted relay;
- a paired host over a direct daemon connection;
- an external A2A Agent Card;
- another AxiOwl node over direct A2A;
- another AxiOwl node over A2A-over-SSH.

## 2. Mobile Host Checks

Follow the mobile path in order:

1. selected daemon runtime is installed;
2. service host and daemon are running;
3. daemon reports its host identity;
4. pairing window is open when adding a phone;
5. phone appears as pending and receives local approval;
6. relay or direct route connects;
7. host publishes providers, projects, workspaces, and agents;
8. selected agent timeline opens;
9. the turn reaches the provider runtime;
10. terminal events return to the phone.

## 3. Relay Versus Direct

For relay connections, record host ID, client ID, relay route, and connection status without exposing key material. For direct connections, confirm address, port, TLS/private-network policy, and daemon authentication.

## 4. A2A Checks

Follow Agent Card discovery, client authentication, task acceptance, task state, destination provider delivery, result/artifacts, and optional push callback.

## 5. Windows User Boundary

The `AxiOwlApi` service is machine-scoped. The A2A user broker and daemon provider runtimes need the intended interactive user session to reach user-owned provider state.

## Evidence To Collect

- AxiOwl version and artifact identity;
- selected daemon runtime;
- service and process state;
- route type;
- redacted host and client IDs;
- project, workspace, agent, provider, and provider-session identity;
- timeline state or A2A task state;
- first concrete error at the boundary that stopped progressing.

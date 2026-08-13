---
sidebar_position: 2
---

# Product Capabilities

AxiOwl combines provider coordination, standards-based agent communication, approved-device messaging, and platform-specific applications in one product family.

## Capability Experiences

| Experience | Meaning |
|---|---|
| Core | A primary AxiOwl workflow with dedicated product ownership |
| Extended | An optional capability that adds network, server, or advanced coordination features |
| Preview | A native product experience intended for exploration and continued expansion |

## Capabilities At A Glance

| Capability | Experience | What it enables |
|---|---|---|
| Windows provider coordination | Core | Discover and coordinate supported editor, agent, and CLI sessions through isolated provider packages |
| AxiOwl mailbox and local registry | Core | Keep a shared address book, receive messages, and follow replies |
| MCP integration | Core | Let provider sessions use AxiOwl tools and return provider-owned identity metadata |
| External A2A agents | Extended | Read Agent Cards, send messages, follow tasks, and collect results or artifacts |
| A2A desktop endpoints | Extended | Present selected registered sessions as standards-based agent endpoints |
| A2A between nodes | Extended | Coordinate explicit AxiOwl nodes directly or over operator-managed SSH |
| Secure approved-device messaging | Extended | Protect remote actions, authorize them at the receiver, and return protected results |
| Windows self-host XMPP server | Extended | Run the approved-device routing role on a Windows host |
| Linux self-host or cloud XMPP server | Extended | Run the same routing model on Linux infrastructure |
| Linux x86-64 client | Preview | Use the native C++ coordination and secure-device runtime on Linux |
| macOS desktop | Preview | Explore the native Swift desktop experience |
| iPhone and Android clients | Preview | Extend approved-device workflows to native mobile experiences |
| Signed pull updates | Extended | Discover and verify core or provider-package releases through signed metadata |

## Provider Family

The Windows product includes dedicated packages for Codex agents, Codex CLI, Codex Remote, VS Code Copilot-backed sessions, Cursor agents, Cursor Agent CLI, Antigravity agents, Antigravity CLI, Claude Code CLI, Copilot CLI, and OpenCode CLI.

Each package keeps discovery, metadata, delivery, and installation ownership specific to that provider surface.

## Platform Family

Windows is the primary packaged desktop and server environment. Linux provides native client and server roles. macOS, iPhone, and Android extend the product through native platform implementations.

Explore the [Platform Guide](../platforms/README.md) and [Provider Support Matrix](provider-support-matrix.md) for details.

## The Product Direction

AxiOwl is growing toward one consistent coordination experience across local sessions, standards-based agents, and approved devices. The common layer handles identity, routing, receipts, and trust while each platform and provider retains the implementation best suited to it.

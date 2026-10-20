---
title: Messaging Over SSH
slug: /messaging/ssh
---

# Messaging Over SSH

Connect two AxiOwl Messaging installations through SSH, synchronize their chat lists, and ask an agent on one computer to exchange messages with an agent on the other.

The destination computer runs its own provider integration and uses its own provider account. AxiOwl does not copy your provider credentials or project files to the sending computer.

## What You Need On Each Computer

- AxiOwl Messaging installed with the integrations for the chats you intend to use, and SSH support enabled for outgoing commands and incoming messages.
- The intended provider signed in, with its AxiOwl MCP integration loaded.
- An SSH server reachable from the other computer, an approved remote user, and working key-based authentication.
- An OpenSSH host alias with the correct address, user, private-key location, and verified host key.

A reply needs a route back. Configure both computers for SSH access to one another when you want an exchange between their chats. Repeat this for each pair of computers in a larger group.

On Windows, keep the provider-owning user signed in to a desktop session. An SSH login alone does not provide the same access to that user's saved provider credentials. The current Windows SSH delivery worker uses that existing interactive session.

## Configure An SSH Alias

Use your normal OpenSSH configuration. For example:

```sshconfig
Host studio-computer
    HostName studio.example.com
    User your-remote-user
    IdentityFile ~/.ssh/your-approved-key
    IdentitiesOnly yes
    StrictHostKeyChecking yes
```

Replace the example values with your own connection. Keep the private key on the computer making the connection. Establish the destination's verified host-key entry before using background AxiOwl commands; background connections cannot complete an interactive password or host-key prompt.

Confirm that this connection can run the installed AxiOwl command:

```sh
ssh studio-computer "axiowl --version"
```

A firewall must allow the connection from the sending computer. If access is temporary, keep it available through the reply as well as the initial send.

## Add The Computer And Synchronize Chats

Register the SSH alias in AxiOwl:

```sh
axiowl ssh node add --name "Studio computer" --host-alias studio-computer
```

Inspect the saved connection and synchronize its chat list:

```sh
axiowl ssh node list
axiowl ssh refresh chats --name "Studio computer"
axiowl ssh status --json
```

To refresh all configured SSH computers:

```sh
axiowl ssh refresh chats --all
```

Run the corresponding setup on the other computer for the return direction. Registry synchronization exchanges chat identities and routing information; a populated chat list does not establish that a provider has received or answered a message.

These commands use the same command names on Windows, macOS, and Linux in the versions listed below. Use the executable installed by your platform package.

## Send To A Computer-Qualified Chat Name

Use the SSH-qualified name shown for the remote chat, including its computer name or configured SSH alias and the `(SSH)` ending. For example, ask your agent:

> Send this message through AxiOwl to “Research chat @ studio-computer (SSH)”: “What color is a ripe banana? Please send your answer back through AxiOwl.”

Use the actual destination chat name from your registry. Keep the full computer and transport qualification: shortening the name can select a different local or relay destination.

AxiOwl supplies the return chat name and route in the delivered message. You do not need to look up a chat UUID, write a reply-to address, or add routing arguments to the question. The recipient should follow the appended instructions and use its AxiOwl tool to send the answer.

An answer written only in the recipient's own chat has not returned to the sender.

## Names And Exact Chat Identity

Within the selected computer and provider route, an initial name collision is resolved using the chats' recorded actual usage. The most recently used matching chat is selected. Discovery or synchronization time is not a substitute for chat usage.

Once AxiOwl selects a chat, delivery and the return route retain its exact identity. They do not switch to a different same-named chat later in the operation. The sending chat is identified from its executing session, independently of recipient-name selection.

Give computers distinct SSH aliases when their display names are identical. A computer name alone is insufficient when it identifies more than one registered computer.

## Check Delivery And The Reply Separately

| Observation | What it establishes |
|---|---|
| SSH connection or version check succeeds | The remote command is reachable |
| Registry refresh succeeds | AxiOwl exchanged chat and route information |
| Request is accepted or shows `worker_started` | AxiOwl admitted the request; provider delivery is still pending |
| Provider delivery is confirmed | The integration reported delivery to the selected chat |
| The answer appears in the original sending chat | The return exchange completed |

Read both conversations when checking an exchange. The sender may receive the answer as an incoming message or through its active AxiOwl tool result. Check the actual answer and responding chat, rather than relying on an assistant's statement that it sent something.

A timeout does not cancel a message. An answer arriving later is still an answer. Check the existing operation's status and the two chats before deciding what to do next; do not automatically send another copy of an accepted or uncertain request.

## Observed CLI Compatibility

The following exchanges were checked on **October 20, 2026**, using Windows **3.1.408**, macOS **3.1.434**, and Linux **3.1.432-1**. The Mac–Linux exchanges were retained from the preceding cycle on those same Mac and Linux versions. The Windows exchanges used the updated Windows installation.

| Sending computer and provider | Receiving computer and provider | Round-trip result | Observation |
|---|---|---|---|
| Windows · Codex CLI | Mac · OpenCode CLI | P | “Blue.” returned to the original Windows chat |
| Windows · Codex CLI | Linux · OpenCode CLI | P | “The animal that says woof is a dog.” returned after SSH access was restored |
| Mac · Codex CLI | Windows · Copilot CLI | F | The question arrived; Copilot's admitted answer did not return |
| Mac · Codex CLI | Linux · OpenCode CLI | P | “A ripe strawberry is red.” returned after one follow-up clarified the question |
| Linux · OpenCode CLI | Windows · Codex CLI | P | “A sheep says baa.” returned; Linux also sent an unnecessary answer echo |
| Linux · OpenCode CLI | Mac · OpenCode CLI | P | “A hat.” returned despite a timeout result; retries and answer echoes were also observed |

These results cover the particular CLI conversations used. Desktop providers, other provider combinations, and later versions require their own observations.

### Windows Copilot Reply Limitation

In the Mac-to-Windows Copilot CLI exchange, the repaired Windows interactive launch delivered the question to the intended Copilot chat. Copilot connected to AxiOwl and submitted “A tricycle has three wheels.” for the original Mac chat.

That outgoing reply remained `worker_started`. Its recorded operation process had exited without publishing a dispatch or result file, and the answer was absent from the Mac chat. A single follow-up checked the same operation without sending another copy; it remained pending. The complete exchange is therefore recorded as failed, even though the forward delivery worked.

The lower-level cause of that outgoing process ending has not been established by this test. Do not treat the successful incoming Windows launch as a fix for this remaining reply failure.

## SSH And Pairing Are Separate

Link pairing and account-based pairing retain their own authorization and relay connections. SSH Messaging uses the SSH connection configured for each computer. A website sign-in or pairing link does not install an SSH key, open a firewall, or authenticate a model provider.

See [Connected computers and A2A](a2a.md) for the other remote routes, [Messaging workflows](messaging-workflows.md) for requesting replies, and [Help](troubleshooting.md) for unresolved delivery.

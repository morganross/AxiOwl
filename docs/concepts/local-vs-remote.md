# Local, Mobile, Node, And External Endpoints

## Local Provider

A local target belongs to a provider product on the same machine. AxiOwl resolves the registry record and invokes that provider's package.

## Paired AxiOwl Host

A mobile host is a computer running the AxiOwl daemon. The phone pairs to the host, connects through the encrypted relay or a direct route, and works with provider agents owned by that daemon.

## External A2A Agent

An external A2A target is described by an explicit Agent Card. AxiOwl acts as an A2A client and retains task state separately from local provider receipts and mobile timelines.

## AxiOwl A2A Node

An AxiOwl node target uses explicit node identity and a selected A2A transport. The destination node performs local provider delivery with its own registry and provider package.

## Explicit Routes

Local provider delivery, mobile daemon connections, A2A, and A2A-over-SSH have different message and identity models. AxiOwl keeps the selected route visible so the user knows which system owns the target and result.

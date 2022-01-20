---
description: Make transactions
---

# Make transactions

EthSigner provides transaction signing and access to your keystore by implementing the following
JSON-RPC methods:

* [`eea_sendTransaction`](../../Reference/API-Methods.md#eea_sendtransaction)
* [`eth_accounts`](../../Reference/API-Methods.md#eth_accounts)
* [`eth_sendTransaction`](../../Reference/API-Methods.md#eth_sendtransaction)

The sender specified in [`eea_sendTransaction`](../../Reference/API-Methods.md#eea_sendtransaction)
and [`eth_sendTransaction`](../../Reference/API-Methods.md#eth_sendtransaction)
requires a signing key. Signing keys can be [stored externally or locally](../../Concepts/Overview.md).

!!! note
    If using EthSigner with [GoQuorum](https://consensys.net/docs/goquorum/) for public transactions
    (that is, using [`eth_sendTransaction`](../../Reference/API-Methods.md#eth_sendtransaction)),
    the nonce must be specified.

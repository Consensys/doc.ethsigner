---
description: Signing transactions with multiple keys.
---

# Store Multiple Key Files

Each account that signs transactions requires a key. EthSigner supports [multiple keys](../Tutorials/Multifile.md) that can be stored in:

* A V3 keystore file stored on a file system accessible by the host.
* [Hashicorp Vault](../HowTo/Store-Keys/Use-Hashicorp.md).
* [Azure Key Vault](../HowTo/Store-Keys/Use-Azure.md).

Each key requires a separate [TOML file](../Reference/Multikey-Parameters.md) which defines the parameters to access the key. The TOML files must
be placed in a single directory specified using the [`multikey-signer`](../Reference/CLI/CLI-Syntax.md#multikey-options) subcommand.

!!! note
    Files can be added or removed from the directory without needing to restart EthSigner.

The TOML file name must use the format `[<prefix>]<accountAddress>.toml`. 
No two TOML files can have the same key address in the file name, even if the prefix differs.

The `0x` portion of the account address must be removed. 
For example, `78e6e236592597c09d5c137c2af40aecd42d12a2.toml`

!!! tip
    Use the [`export-address`](https://besu.hyperledger.org/en/latest/Reference/CLI/CLI-Subcommands/#export-address)
    Hyperledger Besu subcommand to obtain the account address of the node.

---
description: Use a Single Signer
---

# Use multiple signing keys

Each account that signs transactions requires a key. EthSigner supports
[multiple keys](../Tutorials/Multifile.md) stored in:

* A [V3 keystore file](../Tutorials/Multifile.md##create-password-and-key-files)
  stored on a file system accessible by the host.
* [Hashicorp Vault](../HowTo/Store-Keys/Use-Hashicorp.md).
* [Azure Key Vault](../HowTo/Store-Keys/Use-Azure.md).

Each key requires a separate [TOML file](../Reference/Multikey-Parameters.md) that defines
the parameters to access the key. Put the TOML files in a single directory specified using the [`multikey-signer --directory`](../Reference/CLI/CLI-Syntax.md#multikey-options) subcommand.

!!! tip
    You can add or remove files from the directory without needing to
    restart EthSigner.

The TOML file name must use the format `[<prefix>]<accountAddress>.toml`. The
prefix can be anything you want. No two TOML files can have the same key address
in the file name, even if the prefix differs.

Remove the `0x` portion of the account address.
For example, `78e6e236592597c09d5c137c2af40aecd42d12a2.toml`

!!! tip
    To obtain the account address of the node, use the [`export-address`](https://besu.hyperledger.org/en/latest/Reference/CLI/CLI-Subcommands/#export-address)
    Hyperledger Besu subcommand.

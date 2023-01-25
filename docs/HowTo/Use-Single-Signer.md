---
description: Use a single signer
sidebar_position: 2
---

# Use a single signing key

The key used to [sign transactions](Make-Transactions.md) can be stored externally using [HashiCorp Vault](Store-Keys/Use-Hashicorp.md) or [Azure Key Vault](Store-Keys/Use-Azure.md), or in a [V3 keystore file](../Tutorials/Start-EthSigner.md#create-password-and-key-files).

To [start EthSigner with a single signing key](../Tutorials/Start-EthSigner.md), use the subcommands:

- [`file-based-signer`](../Reference/CLI/CLI-Subcommands.md#file-options)
- [`hashicorp-signer`](../Reference/CLI/CLI-Subcommands.md#hashicorp-options)
- [`azure-signer`](../Reference/CLI/CLI-Subcommands.md#azure-options)

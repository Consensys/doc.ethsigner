---
title: Create external signers
sidebar_position: 9
---

# Creating an external signer for EthSigner

EthSigner supports the addition of more external signers in same way as HashiCorp Vault.

To create an external signer:

1. Clone the [EthSigner repository](https://github.com/ConsenSys/ethsigner).

2. Create a Gradle module for the new signer in the `ethsigner/signer` directory.

3. To ensure the module for the new signer is built, add the module to the `settings.gradle` file.

4. In the new module, create a concrete child class of `SignerSubCommand`.

   The new `SignerSubCommand` must include the parameters (tagged with PicoCLI annotations) to initialize your signer.

5. Update the `createSigner()` function to be the entry point to create and return your signer. Your signer is exposed only as a `TransactionSigner`.

   :::note

   The new signing class is responsible for fulfilling the `TransactionSigner` interface. To fulfill the `TransactionSigner` interface, the class must be able to create a signature for a block of bytes and provide the address associated with the key pair in the signer. ::: 6. In `EthSignerApp.java`, register the new `SignerSubCommand` with the `cmdLineParser` as for existing signers.

   :::

6. Update the EthSigner::app module dependency list to include the module created in step 2.

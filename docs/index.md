title: EthSigner Transaction Signer
description: EthSigner is an open-source private transaction manager developed under the Apache 2.0 license and written in Java. 
<!--- END of page meta data -->

# EthSigner Transaction Signer

## What is EthSigner?

EthSigner is an open-source, client-agnostic, Ethereum transaction signer developed under the Apache 2.0 license and written in Java. EthSigner separates private key management from transaction validation by signing transactions using a private key that can be secured in a variety of cloud providers, or encrypted on a local disk. 

## How does it work?

EthSigner acts as a proxy service by forwarding requests to the Ethereum client. When EthSigner receives a transaction it generates a signature using the stored private key, and forwards the signed transaction to the Ethereum client.

!!! note
    EthSigner currently supports a single private key only. That is, only one private key's location can be specified when starting EthSigner.

EthSigner can sign transactions with a key stored in:

* A V3 keystore file stored on a file system accessible by the host.
* [Hashicorp Vault](HowTo/Store-Keys/Use-Hashicorp.md) 
* [Azure Key Vault](HowTo/Store-Keys/Use-Azure.md). 

The transaction process when using EthSigner is:

![EthSigner Transaction](images/EthSigner_Transaction.png)

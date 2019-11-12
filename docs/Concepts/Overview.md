description: EthSigner overview
<!--- END of page meta data -->

# Overview

EthSigner acts as a proxy service by forwarding requests to the Ethereum client. When EthSigner receives a transaction it generates a signature using the stored private key, and forwards the signed transaction to the Ethereum client.

EthSigner can sign transactions with a key stored in:

* A V3 keystore file stored on a file system accessible by the host.
* [Hashicorp Vault](../HowTo/Store-Keys/Use-Hashicorp.md) 
* [Azure Key Vault](../HowTo/Store-Keys/Use-Azure.md). 

!!! note
    EthSigner supports using [multiple private keys](Multiple-Key-Files.md) with file-based signing (using V3 keystore files).
    
The transaction process when using EthSigner is:

![EthSigner Transaction](../images/EthSigner_Transaction.png)
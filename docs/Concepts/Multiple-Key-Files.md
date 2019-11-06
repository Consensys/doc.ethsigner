description: Signing transactions with multiple keys.
<!--- END of page meta data -->

# Store Multiple Key Files

EthSigner supports file-based signing using multiple V3 keystore files. Each account that signs transactions on the network requires a key file. 

The key file must follow the appropriate naming convention, and have an accompanying password file. [Create the required files in a directory](../Tutorials/Multifile.md) and use the [multifile-based-signer](../Reference/CLI/CLI-Syntax.md#multifile-options) sub-command to specify the directory location. 

!!! note
    EthSigner does not support using multiple key signers with Hashicorp Vault or Azure Key Vault.

The key file name must contain the public key address and follow the `[<prefix>]<accountAddress>.key` format. The password file must have an identical name and end with the `.password` extension. No two key files can have the same key address in the file name, even if the prefix differs.

In the example the account address is prefixed with the date.

!!! example
    `10-10-2019_78e6e236592597c09d5c137c2af40aecd42d12a2.key`
    
    `10-10-2019_78e6e236592597c09d5c137c2af40aecd42d12a2.password`
    
!!! tip
    Use the [`export-address`](https://besu.hyperledger.org/en/latest/Reference/CLI/CLI-Subcommands/#export-address) Hyperledger Besu command to obtain the public key address of the node. 
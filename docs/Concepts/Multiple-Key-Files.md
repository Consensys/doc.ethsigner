description: Signing transactions with multiple keys.
<!--- END of page meta data -->

# Store Multiple Key Files

EthSigner supports file-based signing using one of multiple keys stored in a directory. A key file must be created for each account that signs transactions on the network. Use [`eth_accounts`](../Make-Transactions.md##eth_accounts) to return the list of account addresses that can sign transactions. The key must be a V3 Keystore key file and follow the appropriate naming convention. Each key file must have an accompanying password file.

!!! note
    EthSigner does not support using multiple key signers with Hashicorp Vault or Azure Key Vault.

The key file filename must contain the public key address and be formatted as `[prefix]<accountAddress>.key`. The password file must have an identical name and end with the `.password` extension. No two key files can have the same key address in the name, even if the prefix differs.

!!! example
    `238724a0b6af3c5c3c3c2838b44445ebe5944010.key`<br>
    `238724a0b6af3c5c3c3c2838b44445ebe5944010.password`

    `10-10-2019_78e6e236592597c09d5c137c2af40aecd42d12a2.key`<br>
    `10-10-2019_78e6e236592597c09d5c137c2af40aecd42d12a2.password`
    
!!! tip
    Use the [`export-address`](https://besu.hyperledger.org/en/latest/Reference/CLI/CLI-Subcommands/#export-address) Hyperledger Besu command to obtain the public key address of the node. 
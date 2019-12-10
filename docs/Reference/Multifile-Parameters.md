---
description: TOML file parameters for multi signers.
---

# Multifile Parameters

The TOML file defines the parameters to access a signing key. Each key requires a TOML file when using multisigners.

Keys can be stored in a V3 keystore file, Hashicorp Vault, or Azure Key Vault. 

## File-based Signing 

The 

!!! example
    ```
    [metadata]
    createdAt = 1994-11-05T08:15:30-05:00
    description = "Example of File based configuration"

    [signing]
    type = "file-based-signer"
    key-file = "/Users/me/project/78e6e236592597c09d5c137c2af40aecd42d12a2.key"
    password-file = "/Users/me/project/78e6e236592597c09d5c137c2af40aecd42d12a2.password"
    ```

## Hashicorp Vault Signing

!!! example
    ```
    [metadata]
    createdAt = 2019-07-01T12:11:30Z
    description = "Example of valid Hashicorp based configuration"
   
    [signing]
    type = "hashicorp-based-signer"
    signing-key-path = "/secret/data/ethsignerKey"
    host = "localhost"
    port = 9001
    auth-file = "/Users/me/project/hashicorp_auth"
    timeout = 500
    ```
   
## Azure Key Vault Signing

!!! example
    ```
    [metadata]
    createdAt = 2011-11-01T12:15:30Z
    description = "Example of Azure Key Vault based configuration"
  
    [signing]
    type = "azure-based-signer"
    key-vault-name = "AzureKeyVault"
    key-name = "ethsignerKey"
    key-version = "7c01fe58d68148bba5824ce418241092"
    client-id = "47efee5c-8079-4b48-31bb4f2e9a22"
    client-secret = "TW_3Uc/HLPdpLp5*om@MGcd1T29MuP*5"
    ```

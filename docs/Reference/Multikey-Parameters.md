---
description: TOML file parameters for multi signers.
---

# Multikey parameters

The optional `[metadata]` section in the TOML files contains data that is not required by EthSigner. The `[signing]` section contains the parameters required for the signing type.

:::caution

All parameters in the `[signing]` section are mandatory.

:::

## File-based signing

```
[metadata]
createdAt = 1994-11-05T08:15:30-05:00
description = "Example of a File based configuration"

[signing]
type = "file-based-signer"
key-file = "/Users/me/project/78e6e236592597c09d5c137c2af40aecd42d12a2.key"
password-file = "/Users/me/project/78e6e236592597c09d5c137c2af40aecd42d12a2.password"
```

:::note

EthSigner supports absolute paths or relative paths when specifying `key-file` and `password-file`. Relative paths are relative to the directory specified in the [`multikey-signer --directory`](../Reference/CLI/CLI-Syntax.md#multikey-options) subcommand.

:::

| Key | Description |
| --- | --- |
| **type** | Type of key signing. Use `file-based-signer` |
| **key-file** | V3 keystore file containing the [key with which transactions are signed](../Tutorials/Multifile.md#create-password-and-key-files) |
| **password-file** | File containing the password for the [key with which transactions are signed](../Tutorials/Multifile.md#create-password-and-key-files). |

## HashiCorp Vault signing

```
[metadata]
createdAt = 2019-07-01T12:11:30Z
description = "Example of a valid HashiCorp based configuration"

[signing]
type = "hashicorp-signer"
keyPath = "/v1/secret/data/ethsignerKey"
keyName = "value"
token = "root_token"
serverHost = "localhost"
serverPort = 8200
timeout = 5000
tlsEnabled = true
tlsTrustStoreType = "ALLOWLIST"
tlsTrustStorePath = "/Users/me/project/knownHashicorpServers"
```

:::note

The value of `keyPath` is dependent on how HashiCorp Vault secret engine is configured. It's usually in the format of `/v1/<secret-engine-name>/data/<secret-path>`. For example, in HashiCorp Vault `dev` mode, a default secret engine with name `secret` is created. Creating a path `EthSignerKeys` in `secret` would result in the `keyPath` value to be `/v1/secret/data/EthSignerKeys`.

:::

| Key | Description |
| --- | --- |
| **type** | Type of key signing. Use `hashicorp-signer` |
| **keyPath** | Path to secret in the HashiCorp Vault containing the private key for signing transactions. |
| **keyName** | Name of the key that maps to the private key in the secret. Defaults to `value`. |
| **token** | HashiCorp Vault authentication token that is required to access the secret defined by the `keyPath`. |
| **serverHost** | Host of the HashiCorp Vault server. |
| **serverPort** | Port of the HashiCorp Vault server. Defaults to `8200`. |
| **timeout** | Timeout in milliseconds for requests to the HashiCorp Vault server. Defaults to `10000`. |
| **tlsEnable** | Enable/Disable TLS communication with HashiCorp Vault server. Defaults to `true`. |
| **tlsTrustStoreType** | The type of Truststore that stores HashiCorp Vault server TLS certificate. Valid values are `ALLOWLIST`, `JKS`, `PKCS12` and `PEM`. Can be omitted if HashiCorp server's CA is already trusted. |
| **tlsTrustStorePath** | Path to the Truststore file. Required when `tlsTrustStoreType` is specified. See example of [how to create an ALLOWLIST Truststore file](../HowTo/Configure-TLS.md#create-the-known-servers-file). |
| **tlsTrustStorePassword** | Password to decrypt truststore file. Only required for `JKS` and `PKCS12` truststore types. |

## Azure Key Vault signing

```
[metadata]
createdAt = 2011-11-01T12:15:30Z
description = "Example of an Azure Key Vault based configuration"

[signing]
type = "azure-signer"
key-vault-name = "AzureKeyVault"
key-name = "ethsignerKey"
key-version = "7c01fe58d68148bba5824ce418241092"
client-id = "47efee5c-8079-4b48-31bb4f2e9a22"
client-secret = "TW_3Uc/HLPdpLp5*om@MGcd1T29MuP*5"
tenant-id = "34255fb0-379b-4a1a-bd47-d211ab86df81"
```

| Key | Description |
| --- | --- |
| **type** | Type of key signing. Use `azure-signer` |
| **key-vault-name** | Name of the vault to access. Sub-domain of `vault.azure.net` |
| **key-name** | Name of key to be used |
| **key-version** | Version of the specified key |
| **client-id** | ID used to authenticate with Azure Key Vault |
| **client-secret** | Secret used to access the vault |
| **tenant-id** | The tenant ID used to authenticate with Azure Key Vault. |

---
title: Subcommands
description: EthSigner command line interface subcommands
sidebar_position: 2
---

# Subcommands

EthSigner signs transaction with a key stored in an encrypted file or an external vault. The EthSigner subcommands are used to specify the keys used to sign transactions:

- `ethsigner [Options] file-based-signer [File Options]`
- `ethsigner [Options] hashicorp-signer [Hashicorp Options]`
- `ethsigner [Options] azure-signer [Azure Options]`
- `ethsigner [Options] multikey-signer [Multikey Options]`

The [`file-based-signer`](#file-based-signer), [`hashicorp-signer`](#hashicorp-signer), and [`azure-signer`](#azure-signer) subcommands are used for [single keys only](../../Tutorials/Start-EthSigner.md), and the [`multikey-signer`](#multikey-options) subcommand is used for [one or more keys](../../Tutorials/Multifile.md).

:::caution

Only one [signing key subcommand](#specifying-subcommand-options) can be used.

:::

## Specifying subcommand options

The subcommand to use must be specified on the command line, but the subcommand options can be specified:

- On the command line
- As [environment variables](#environment-variables)
- In a TOML configuration file.

For example, you can set the options for the `azure-signer` subcommand in environment variables or a configuration file, but the subcommand must be specified in the command line

:::info

```bash
ethsigner --config-file=./config.toml azure-signer
```

:::

If you specify an option in more than one place, the order of priority is command line, environment variable, configuration file.

## Environment variables

For each subcommand option, the equivalent environment variable is:

- Upper-case
- `_` replaces `-`
- Has an `ETHSIGNER_` + `<SIGNING_OPTION>_` prefix. For example set `azure-signer --client-id` using the `ETHSIGNER_AZURE_SIGNER_CLIENT_ID` environment variable.

:::note

Only subcommand options can be set in environment variables. The actual subcommand must be specified in the command line.

:::

## View help

To view the command line help for the subcommands:

- [`ethsigner help file-based-signer`](#file-options)
- [`ethsigner help hashicorp-signer`](#hashicorp-options)
- [`ethsigner help azure-signer`](#azure-options)
- [`ethsigner help multikey-signer`](#multikey-options)

## Options

### `file-based-signer`

#### `key-file`

File containing [key with which transactions are signed](../../Tutorials/Start-EthSigner.md#create-password-and-key-files).

<!--tabs-->

# Syntax

```bash
-k, --key-file=<keyFile>
```

# Example

```bash
--key-file=/Users/me/my_node/transactionKey
```

# Environment variable

```bash
ETHSIGNER_FILE_BASED_SIGNER_KEY_FILE=/Users/me/my_node/transactionKey
```

# Configuration file

```bash
file-based-signer.key-file="/Users/me/my_node/transactionKey"
```

<!--/tabs-->

#### `password-file`

File containing password for the [key with which transactions are signed](../../Tutorials/Start-EthSigner.md#create-password-and-key-files).

<!--tabs-->

# Syntax

```bash
-p, --password-file=<passwordFile>
```

# Example

```bash
--password-file=/Users/me/my_node/password
```

# Environment variable

```bash
ETHSIGNER_FILE_BASED_SIGNER_PASSWORD_FILE=/Users/me/my_node/password
```

# Configuration file

```bash
file-based-signer.password-file="/Users/me/my_node/password"
```

<!--/tabs-->

### `hashicorp-signer`

#### `auth-file`

File containing authentication data for HashiCorp Vault. The authentication data is the [root token displayed by the HashiCorp Vault server](../../HowTo/Store-Keys/Use-Hashicorp.md#storing-private-key-in-hashcorp-vault).

<!--tabs-->

# Syntax

```bash
--auth-file=<authFile>
```

# Example

```bash
--auth-file=/Users/me/my_node/auth_file
```

# Environment variable

```bash
ETHSIGNER_HASHICORP_SIGNER_AUTH_FILE=/Users/me/my_node/auth_file
```

# Configuration file

```bash
hashicorp-signer.auth-file="/Users/me/my_node/auth_file"
```

<!--/tabs-->

#### `host`

Host of the HashiCorp Vault server. Default is `localhost`.

<!--tabs-->

# Syntax

```bash
--host=<serverHost>
```

# Example

```bash
--host="10.0.0.3"
```

# Environment variable

```bash
ETHSIGNER_HASHICORP_SIGNER_HOST=10.0.0.3
```

# Configuration file

```bash
hashicorp-signer.host="10.0.0.3"
```

<!--/tabs-->

#### `port`

Port of the HashiCorp Vault server. Default is 8200.

<!--tabs-->

# Syntax

```bash
--port=<serverPort>
```

# Example

```bash
--port=23000
```

# Environment variable

```bash
ETHSIGNER_HASHICORP_SIGNER_PORT=23000
```

# Configuration file

```bash
hashicorp-signer.port=23000
```

<!--/tabs-->

#### `signing-key-path`

Path to secret in the HashiCorp Vault containing the private key for signing transactions. Default is ` /secret/data/ethsignerSigningKey`.

<!--tabs-->

# Syntax

```bash
--signing-key-path=<signingKeyPath>
```

# Example

```bash
--signing-key-path=/my_secret/ethsignerSigningKey
```

# Environment variable

```bash
ETHSIGNER_HASHICORP_SIGNER_SIGNING_KEY_PATH=/my_secret/ethsignerSigningKey
```

# Configuration file

```bash
hashicorp-signer.signing-key-path="/my_secret/ethsignerSigningKey"
```

<!--/tabs-->

#### `timeout`

Timeout in milliseconds for requests to the HashiCorp Vault server. Default is 10000.

<!--tabs-->

# Syntax

```bash
--timeout=<timeout>
```

# Example

```bash
--timeout=5000
```

# Environment variable

```bash
ETHSIGNER_HASHICORP_SIGNER_TIMEOUT=5000
```

# Configuration file

```bash
hashicorp-signer.timeout=5000
```

<!--/tabs-->

#### `tls-enabled`

Connect to HashiCorp Vault server using TLS. Default is `true`.

<!--tabs-->

# Syntax

```bash
--tls-enabled[=<true|false>]
```

# Example

```bash
--tls-enabled=false
```

# Environment variable

```bash
ETHSIGNER_HASHICORP_SIGNER_TLS_ENABLED=false
```

# Configuration file

```bash
hashicorp-signer.tls-enabled=false
```

<!--/tabs-->

#### `tls-known-server-file`

File containing the hostname, port, and SHA256 certificate fingerprint of the HashiCorp Vault server.

<!--tabs-->

# Syntax

```bash
--tls-known-server-file=<hashicorpServerFile>
```

# Example

```bash
--tls-known-server-file=/Users/me/my_node/knownHashicorpServers
```

# Environment variable

```bash
ETHSIGNER_HASHICORP_SIGNER_TLS_KNOWN_SERVER_FILE=/Users/me/my_node/knownHashicorpServers
```

# Configuration file

```bash
hashicorp-signer.tls-known-server-file="/Users/me/my_node/knownHashicorpServers"
```

<!--/tabs-->

### `azure-signer`

#### `client-id`

ID used to authenticate with Azure Key Vault.

<!--tabs-->

# Syntax

```bash
--client-id=<clientID>
```

# Example

```bash
--client-id="MyClientID"
```

# Environment variable

```bash
ETHSIGNER_AZURE_SIGNER_CLIENT_ID=MyClientID
```

# Configuration file

```bash
azure-signer.client-id="MyClientID"
```

<!--/tabs-->

#### `client-secret-path`

Path to file containing secret used to access the vault.

<!--tabs-->

# Syntax

```bash
--client-secret-path=<clientSecretPath>
```

# Example

```bash
--client-secret-path=/Path/MySecret
```

# Environment variable

```bash
ETHSIGNER_AZURE_SIGNER_CLIENT_SECRET_PATH="/Path/MySecret"
```

# Configuration file

```bash
azure-signer.client-secret-path=/Path/MySecret
```

<!--/tabs-->

#### `key-name`

Name of key to be used.

<!--tabs-->

# Syntax

```bash
--key-name=<keyName>
```

# Example

```bash
--key-name="MyKey"
```

# Environment variable

```bash
ETHSIGNER_AZURE_SIGNER_KEY_NAME=MyKey
```

# Configuration file

```bash
azure-signer.key-name="MyKey"
```

<!--/tabs-->

#### `key-version`

Version of the specified key to use.

<!--tabs-->

# Syntax

```bash
--key-version=<keyVersion>
```

# Example

```bash
--key-version="7c01fe58d68148bba5824ce418241092"
```

# Environment variable

```bash
ETHSIGNER_AZURE_SIGNER_KEY_VERSION=7c01fe58d68148bba5824ce418241092
```

# Configuration file

```bash
azure-signer.key-version="7c01fe58d68148bba5824ce418241092"
```

<!--/tabs-->

#### `keyvault-name`, `key-vault-name`

Name of the vault to access. Sub-domain of `vault.azure.net`.

<!--tabs-->

# Syntax

```bash
--keyvault-name=<keyVaultName>
```

# Example

```bash
--keyvault-name="MyKeyVault"
```

# Environment variable

```bash
ETHSIGNER_AZURE_SIGNER_KEY_VAULT_NAME=MyKeyVault
```

# Configuration file

```bash
azure-signer.keyvault-name="MyKeyVault"
```

<!--/tabs-->

#### `tenant-id`

The tenant ID of the Azure Portal instance being used.

<!--tabs-->

# Syntax

```bash
--tenant-id=<STRING>
```

# Example

```bash
--tenant-id=34255fb0-379b-4a1a-bd47-d211ab86df81
```

# Environment variable

```bash
ETHSIGNER_AZURE_SIGNER_TENANT_ID=34255fb0-379b-4a1a-bd47-d211ab86df81
```

# Configuration file

```bash
azure-signer.tenant-id="34255fb0-379b-4a1a-bd47-d211ab86df81"
```

<!--/tabs-->

### `multikey-signer`

#### `directory`

Path to the directory containing the [TOML files](../Multikey-Parameters.md) required to access keys.

<!--tabs-->

# Syntax

```bash
--directory=<directoryPath>
```

# Example

```bash
--directory=/Users/me/keys
```

# Environment variable

```bash
ETHSIGNER_MULTIKEY_SIGNER_DIRECTORY=/Users/me/keys
```

# Configuration file

```bash
multikey-signer.directory="/Users/me/keys"
```

<!--/tabs-->

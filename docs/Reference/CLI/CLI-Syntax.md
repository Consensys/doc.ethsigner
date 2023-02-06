---
title: Options
description: EthSigner command line interface reference
sidebar_position: 1
---

# EthSigner command line

This reference describes the syntax of the EthSigner Command Line Interface (CLI) options.

## Specifying options

EthSigner options can be specified:

- On the command line
- As an [environment variable](#environment-variables)
- In a [TOML configuration file].

If you specify an option in more than one place, the order of priority is command line, environment variable, configuration file.

### Environment variables

For each command line option, the equivalent environment variable is:

- Upper-case
- `_` replaces `-`
- Has an `ETHSIGNER_` prefix

For example, set `--data-path` using the `ETHSIGNER_DATA_PATH` environment variable.

You can include [subcommand] options as environment variables as well, for example set `multikey-signer --directory` using the `ETHSIGNER_MULTIKEY_SIGNER_DIRECTORY` environment variable.

## Options

### config-file

The path to the [TOML configuration file](../../HowTo/Use-Configuration-File.md). The default is `none`.

<!--tabs-->

# Syntax

```bash
--config-file=<FILE>
```

# Example

```bash
--config-file=/home/me/me_node/config.toml
```

# Environment variable

```bash
ETHSIGNER_CONFIG_FILE=/home/me/me_node/config.toml
```

<!--/tabs-->

### `chain-id`

[Chain ID](https://besu.hyperledger.org/en/stable/Concepts/NetworkID-And-ChainID/) of the network to receive the signed transactions.

<!--tabs-->

# Syntax

```bash
--chain-id=<chainId>
```

# Example

```bash
--chain-id=2017
```

# Environment variable

```bash
ETHSIGNER_CHAIN_ID=2017
```

# Configuration file

```bash
chain-id=2017
```

<!--/tabs-->

### `data-path`

Directory in which to store temporary files.

<!--tabs-->

# Syntax

```bash
--data-path=<PATH>
```

# Example

```bash
--data-path=/Users/me/my_node/data
```

# Environment variable

```bash
ETHSIGNER_DATA_PATH=/Users/me/my_node/data
```

# Configuration file

```bash
data-path="/Users/me/my_node/data"
```

<!--/tabs-->

### `downstream-http-host`

Host to which received requests are forwarded. Default is `localhost`.

<!--tabs-->

# Syntax

```bash
--downstream-http-host=<downstreamHttpHost>
```

# Example

```bash
--downstream-http-host=192.168.05.14
```

# Environment variable

```bash
ETHSIGNER_DOWNSTREAM_HTTP_HOST=192.168.05.14
```

# Configuration file

```bash
downstream-http-host="192.168.05.14"
```

<!--/tabs-->

### `downstream-http-path`

Path to which received requests are forwarded. Default is `/`.

Might be required if [connecting to a cloud-based Ethereum client] such as [Infura].

<!--tabs-->

# Syntax

```bash
--downstream-http-path=<downstreamHttpPath>
```

# Example

```bash
--downstream-http-path=/v3/d0e63ca5bb1e4eef2284422efbc51a56
```

# Environment variable

```bash
ETHSIGNER_DOWNSTREAM_HTTP_PATH=/v3/d0e63ca5bb1e4eef2284422efbc51a56
```

# Configuration file

```bash
downstream-http-path="/v3/d0e63ca5bb1e4eef2284422efbc51a56"
```

<!--/tabs-->

### `downstream-http-port`

Port to which received requests are forwarded.

<!--tabs-->

# Syntax

```bash
--downstream-http-port=<downstreamHttpPort>
```

# Example

```bash
--downstream-http-port=6174
```

# Environment variable

```bash
ETHSIGNER_DOWNSTREAM_HTTP_PORT=6174
```

# Configuration file

```bash
downstream-http-port=6174
```

<!--/tabs-->

### `downstream-http-request-timeout`

Timeout period (in milliseconds) for downstream requests. Default is 5000.

<!--tabs-->

# Syntax

```bash
--downstream-http-request-timeout=<downstreamHttpRequestTimeout>
```

# Example

```bash
--downstream-http-request-timeout=3000
```

# Environment variable

```bash
ETHSIGNER_DOWNSTREAM_HTTP_REQUEST_TIMEOUT=3000
```

# Configuration file

```bash
downstream-http-request-timeout=3000
```

<!--/tabs-->

### `downstream-http-tls-enabled`

Enable or disable [TLS for server connections](../../Concepts/TLS.md). Defaults to `false`.

<!--tabs-->

# Syntax

```bash
--downstream-http-tls-enabled[=<true|false>]
```

# Example

```bash
--downstream-http-tls-enabled
```

# Environment variable

```bash
ETHSIGNER_DOWNSTREAM_HTTP_TLS_ENABLED
```

# Configuration file

```bash
downstream-http-tls-enabled
```

<!--/tabs-->

### `downstream-http-tls-ca-auth-enabled`

Allow connections to servers with trusted CAs.

Defaults to `true`.

<!--tabs-->

# Syntax

```bash
--downstream-http-tls-ca-auth-enabled[=<true|false>]
```

# Example

```bash
--downstream-http-tls-ca-auth-enabled=false
```

# Environment variable

```bash
ETHSIGNER_DOWNSTREAM_HTTP_TLS_CA_AUTH_ENABLED=false
```

# Configuration file

```bash
downstream-http-tls-ca-auth-enabled=false
```

<!--/tabs-->

### `downstream-http-tls-keystore-file`

Keystore file (in PKCS #12 format) that contains the private key and certificate presented to the server during authentication.

<!--tabs-->

# Syntax

```bash
--downstream-http-tls-keystore-file=<keystoreFile>
```

# Example

```bash
--downstream-http-tls-keystore-file=/Users/me/my_node/keystore.pfx
```

# Environment variable

```bash
ETHSIGNER_DOWNSTREAM_HTTP_TLS_KEYSTORE_FILE=/Users/me/my_node/keystore.pfx
```

# Configuration file

```bash
downstream-http-tls-keystore-file="/Users/me/my_node/keystore.pfx"
```

<!--/tabs-->

### `downstream-http-tls-keystore-password-file`

Password file used to decrypt the keystore.

<!--tabs-->

# Syntax

```bash
--downstream-http-tls-keystore-password-file=<passwordFile>
```

# Example

```bash
--downstream-http-tls-keystore-password-file=/Users/me/my_node/password.txt
```

# Environment variable

```bash
ETHSIGNER_DOWNSTREAM_HTTP_TLS_KEYSTORE_PASSWORD_FILE=/Users/me/my_node/password.txt
```

# Configuration file

```bash
downstream-http-tls-keystore-password-file=/Users/me/my_node/password.txt
```

<!--/tabs-->

### `downstream-http-tls-known-servers-file`

File containing the hostnames, ports, and SHA256 certificate fingerprints of [trusted servers](../../HowTo/Configure-TLS.md#create-the-known-servers-file).

<!--tabs-->

# Syntax

```bash
--downstream-http-tls-known-servers-file=<serversFile>
```

# Example

```bash
--downstream-http-tls-known-servers-file=/Users/me/my_node/knownServers
```

# Environment variable

```bash
ETHSIGNER_DOWNSTREAM_HTTP_TLS_KNOWN_SERVERS_FILE=/Users/me/my_node/knownServers
```

# Configuration file

```bash
downstream-http-tls-known-servers-file="/Users/me/my_node/knownServers"
```

<!--/tabs-->

### `http-cors-origins`

A list of domain URLs for CORS validation. You must enclose the URLs in double quotes and separate them with commas.

Listed domains can access the node using JSON-RPC. If your client interacts with EthSigner using a browser app (such as Remix or a block explorer), you must allow the client domains.

The default value is `none`. If you do not allow any domains, browser apps cannot interact with your EthSigner node.

:::tip

For testing and development purposes, use `"all"` or `"*"` to accept requests from any domain. We don't recommend accepting requests from any domain for production environments.

:::

<!--tabs-->

# Syntax

```bash
--http-cors-origins=<httpListenHost>
```

# Example

```bash
--http-cors-origins="http://remix.ethereum.org","http://medomain.com"
```

# Environment variable

```bash
ETHSIGNER_HTTP_CORS_ORIGINS="http://remix.ethereum.org","http://medomain.com"
```

# Configuration file

```bash
http-cors-origins=["http://remix.ethereum.org","https://meotherdomain.com"]
```

<!--/tabs-->

### `http-listen-host`

Host on which JSON-RPC HTTP listens. Default is `localhost`.

<!--tabs-->

# Syntax

```bash
--http-listen-host=<httpListenHost>
```

# Example

```bash
--http-listen-host=10.100.111.1
```

# Environment variable

```bash
ETHSIGNER_HTTP_LISTEN_HOST=10.100.111.1
```

# Configuration file

```bash
http-listen-host="10.100.111.1"
```

<!--/tabs-->

### `http-listen-port`

Port on which JSON-RPC HTTP listens. Default is 8545.

<!--tabs-->

# Syntax

```bash
--http-listen-port=<httpListenPort>
```

# Example

```bash
--http-listen-port=6174
```

# Environment variable

```bash
ETHSIGNER_HTTP_LISTEN_PORT=6174
```

# Configuration file

```bash
http-listen-port=6174
```

<!--/tabs-->

### `logging`

Logging verbosity levels. Options are: `OFF`, `FATAL`, `WARN`, `INFO`, `DEBUG`, `TRACE`, `ALL`. Default is `INFO`.

<!--tabs-->

# Syntax

```bash
-l, --logging=<LOG VERBOSITY LEVEL>
```

# Example

```bash
--logging=DEBUG
```

# Environment variable

```bash
ETHSIGNER_LOGGING=DEBUG
```

# Configuration file

```bash
logging="DEBUG"
```

<!--/tabs-->

### `metrics-enabled`

Enables the [metrics exporter](../../HowTo/Metrics.md). The default is `false`.

<!--tabs-->

# Syntax

```bash
--metrics-enabled[=<true|false>]
```

# Environment variable

```bash
ETHSIGNER_METRICS_ENABLED=true
```

# Configuration file

```bash
metrics-enabled=true
```

<!--/tabs-->

### `metrics-category`

Categories for which to track metrics. Options are `HTTP`, `SIGNING`, `JVM`, and `PROCESS`. All categories are enabled by default.

:::note

There are currently no metrics available for the `HTTP` and `SIGNING` categories.

:::

<!--tabs-->

# Syntax

```bash
--metrics-category=<metrics-category>[,metrics-category...]...
```

# Example

```bash
--metrics-category=HTTP,SIGNING
```

# Environment variable

```bash
ETHSIGNER_METRICS_CATEGORY=HTTP,SIGNING
```

# Configuration file

```bash
metrics-category=["HTTP","SIGNING"]
```

<!--/tabs-->

### `metrics-host`

The host on which [Prometheus](https://prometheus.io/) accesses EthSigner metrics. The default is `127.0.0.1`.

<!--tabs-->

# Syntax

```bash
--metrics-host=<HOST>
```

# Example

```bash
--metrics-host=127.0.0.1
```

# Environment variable

```bash
ETHSIGNER_METRICS_HOST=127.0.0.1
```

# Configuration file

```bash
metrics-host="127.0.0.1"
```

<!--/tabs-->

### `metrics-host-allowlist`

A comma-separated list of hostnames to allow access to the EthSigner metrics. By default, EthSigner accepts access from `localhost` and `127.0.0.1`.

:::tip

To allow all hostnames, use "\*". We don’t recommend allowing all hostnames for production environments.

:::

<!--tabs-->

# Syntax

```bash
--metrics-host-allowlist=<hostname>[,<hostname>...]... or "*"
```

# Example

```bash
--metrics-host-allowlist=medomain.com,meotherdomain.com
```

# Environment variable

```bash
ETHSIGNER_METRICS_HOST_ALLOWLIST=medomain.com,meotherdomain.com
```

# Configuration file

```bash
metrics-host-allowlist=["medomain.com", "meotherdomain.com"]
```

<!--/tabs-->

### `metrics-port`

The port (TCP) on which [Prometheus](https://prometheus.io/) accesses EthSigner metrics. The default is `9546`.

<!--tabs-->

# Syntax

```bash
--metrics-port=<PORT>
```

# Example

```bash
--metrics-port=6174
```

# Environment variable

```bash
ETHSIGNER_METRICS_PORT=6174
```

# Configuration file

```bash
metrics-port=6174
```

<!--/tabs-->

### `tls-allow-any-client`

Allows any client to connect.

:::caution

Cannot be used with `--tls-allow-ca-clients` and `--tls-known-clients-file`

:::

<!--tabs-->

# Syntax

```bash
--tls-allow-any-client
```

# Environment variable

```bash
ETHSIGNER_TLS_ALLOW_ANY_CLIENT
```

# Configuration file

```bash
tls-allow-any-client
```

<!--/tabs-->

### `tls-allow-ca-clients`

Allows clients signed with trusted CA certificates to connect.

<!--tabs-->

# Syntax

```bash
--tls-allow-ca-clients
```

# Environment variable

```bash
ETHSIGNER_TLS_ALLOW_CA_CLIENTS
```

# Configuration file

```bash
tls-allow-ca-clients
```

<!--/tabs-->

### `tls-keystore-file`

PKCS #12 formatted keystore. Used to enable TLS for [client connections](../../Concepts/TLS.md).

<!--tabs-->

# Syntax

```bash
--tls-keystore-file=<keystoreFile>
```

# Example

```bash
--tls-keystore-file=/Users/me/my_node/certificate.pfx
```

# Environment variable

```bash
ETHSIGNER_TLS_KEYSTORE_FILE=/Users/me/my_node/certificate.pfx
```

# Configuration file

```bash
tls-keystore-file="/Users/me/my_node/certificate.pfx"
```

<!--/tabs-->

### `tls-keystore-password-file`

Password file used to decrypt the keystore.

<!--tabs-->

# Syntax

```bash
--tls-keystore-password-file=<passwordFile>
```

# Example

```bash
--tls-keystore-password-file=/Users/me/my_node/password.txt
```

# Environment variable

```bash
ETHSIGNER_TLS_KEYSTORE_PASSWORD_FILE=/Users/me/my_node/password.txt
```

# Configuration file

```bash
tls-keystore-password-file=/Users/me/my_node/password.txt
```

<!--/tabs-->

### `tls-known-clients-file`

File containing the SHA-256 fingerprints of [authorized clients](../../HowTo/Configure-TLS.md#create-the-known-clients-file).

<!--tabs-->

# Syntax

```bash
--tls-known-clients-file=<clientsFile>
```

# Example

```bash
--tls-known-clients-file=/Users/me/my_node/knownClients
```

# Environment variable

```bash
ETHSIGNER_TLS_KNOWN_CLIENTS_FILE=/Users/me/my_node/knownClients
```

# Configuration file

```bash
tls-known-clients-file="/Users/me/my_node/knownClients"
```

<!--/tabs-->

### `help`

Displays the help and exits.

<!--tabs-->

# Syntax

```bash
-h, --help
```

<!--/tabs-->

### `version`

Displays the version and exits.

<!--tabs-->

# Syntax

```bash
-V, --version
```

<!--/tabs-->

<!-- links -->

[connecting to a cloud-based Ethereum client]: ../../Tutorials/Start-EthSigner.md#start-ethsigner
[Infura]: https://infura.io/
[subcommand]: CLI-Subcommands.md
[TOML configuration file]: ../../HowTo/Use-Configuration-File.md

---
description: Run EthSigner from Docker image
---

# Run EthSigner from Docker image

A Docker image is provided to run EthSigner in a Docker container.

## Prerequisites

* [Docker](https://docs.docker.com/install/)

* MacOS or Linux

    !!! important
        The Docker image does not run on Windows.

## Quickstart

Display the EthSigner command line help using the Docker image:

=== "latest"

    ```bash
    docker run consensys/ethsigner:latest --help
    ```

!!! note
    `latest` runs the latest cached version. To pull the latest version, use `docker pull consensys/ethsigner:latest`.

You can specify [environment variables] with the docker image instead of the command line options.

=== "example"

    ```bash
    docker run --mount type=bind,source=/home/me/me_node,target=/var/lib/ethsigner -e ETHSIGNER_CONFIG_FILE=/var/lib/ethsigner/config.toml consensys/ethsigner:latest file-based-signer
    ```

## Expose listening port

To use the default listening port (`8545`) or the port specified using
[`--http-listen-port`](../../Reference/CLI/CLI-Syntax.md#http-listen-port), you must expose the listening port.

To run EthSigner exposing listening port for access:

```bash
docker run -p <listenPort>:8545 consensys/ethsigner:latest <options>
```

!!!example
    To run EthSigner using [file-based signing](../../Tutorials/Start-EthSigner.md) using the default
    listing port and 8590 as the downstream port:

    ```bash
    docker run -p <listenPort>:8545 -v <~/myKeyFile>:/opt/ethsigner/keyfile -v <~/myPasswordFile>:/opt/ethsigner/passwordfile consensys/ethsigner:latest --chain-id=2018 --downstream-http-host=<PantheonHost> --downstream-http-port=8590 --http-listen-host=0.0.0.0 file-based-signer -k /opt/ethsigner/keyfile -p /opt/ethsigner/passwordfile
    ```

<!--links-->
[environment variables]: ../../Reference/CLI/CLI-Syntax.md#environment-variables

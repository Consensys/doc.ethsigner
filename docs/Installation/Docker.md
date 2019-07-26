description: Run EthSigner from Docker image
<!--- END of page meta data -->

# Running EthSigner from Docker Image

A Docker image is provided to run EthSigner in a Docker container. 

## Prerequisites

* [Docker](https://docs.docker.com/install/)   

* MacOS or Linux 
    
    !!! important 
        The Docker image does not run on Windows. 

## Quickstart

Display the EthSigner command line help using the Docker image: 

```bash tab="latest"
docker run pegasyseng/ethsigner:latest --help
```
!!! note
    `latest` runs the latest cached version. To pull the latest version, use `docker pull pegasyseng/pantheon:latest`. 
 
## Exposing Ports

Expose the downstream and listening ports. Exposing the ports is required to use the  default ports or the ports specified using 
[`--downstream-http-port`](../Reference/EthSigner-CLI.md#downstream-http-port) and [`--http-listen-port`](../Reference/EthSigner-CLI.md#http-listen-port). 

To run EthSigner exposing local ports for access: 
```bash
docker run -p <listenPort>:8545 pegasyseng/ethsigner:latest --downstream-http-port=8590
```

!!!example
    To enable RPC calls to http://127.0.0.1:8545 and P2P discovery on http://127.0.0.1:13001:
    ```bash
    docker run -p 8545:8545 -v  ~/myKeyFile:/opt/ethsigner/keyfile -v ~/myPasswordFile:/opt/ethsigner/passwordfile pegasyseng/ethsigner --chain-id=2018 --downstream-http-port=8590 --http-listen-host=0.0.0.0 file-based-signer -k /opt/ethsigner/keyfile -p /opt/ethsigner/passwordfile
    ```

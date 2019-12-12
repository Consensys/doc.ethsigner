---
description: Signing transactions with multiple keys.
---

# Start EthSigner with multiple signing keys

EthSigner supports file-based signing using [multiple keys](../Concepts/Multiple-Key-Files.md).

## Prerequisites

* [EthSigner](../HowTo/Get-Started/Install-Binaries.md)
* [Hyperledger Besu](https://besu.hyperledger.org/en/stable/HowTo/Get-Started/Install-Binaries/)
* [Node.js](https://nodejs.org/en/download/)
* [web3.js](https://github.com/ethereum/web3.js/)

## Start Besu

[Start Besu](https://besu.hyperledger.org/en/stable/HowTo/Get-Started/Starting-node/) with the
[`--rpc-http-port`](https://besu.hyperledger.org/en/stable/Reference/CLI/CLI-Syntax/#rpc-http-port)
option set to `8590`.

!!! example

    ```bash
    besu --network=dev --miner-enabled --miner-coinbase=0xfe3b557e8fb62b89f4916b721be55ceb828dbd73 --rpc-http-cors-origins="all" --host-whitelist=* --rpc-http-enabled --rpc-http-port=8590 --data-path=/Users/me/Datadir
    ```

## Create password and key files

Create a password file and V3 Keystore key for each account that needs to sign transactions.
The password files and V3 Keystore keys must follow the [naming convention](../Concepts/Multiple-Key-Files.md) and be in the same directory.

The password file must follow the format `[<prefix>]<accountAddress>.password` and exclude the `0x` prefix of the account address. For example, `78e6e236592597c09d5c137c2af40aecd42d12a2.password`.

!!! caution "Password text file must not contain characters other than those used in your password"
    EthSigner reads the password file as binary and considers every character in the file as part of your password.

    _Some POSIX compliant editors automatically add an end-of-line in text files. If your editor adds an
    end-of-line character, the end-of-line is considered part of your password._

    Replace the placeholders and use the following command to ensure the password file is correct:

    ```bash
    echo -n "Type your password:";read -s password;echo -ne $password > [<prefix>]<accountAddress>.password;
    ```

    Enter the password when prompted.

Use the [web3.js library](https://github.com/ethereum/web3.js/) to create a key file where:

* `<AccountPrivateKey>` is the private key of the account with which EthSigner will sign transactions.

* `<Password>` is the password for the key file being created. The password must match the password
  saved in the password file created above.

!!! example

    ```javascript linenums="1" tab="Create Key File"
    const Web3 = require('web3')

    // Web3 initialization (should point to the JSON-RPC endpoint)
    const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8590'))

    var V3KeyStore = web3.eth.accounts.encrypt("<AccountPrivateKey>", "<Password>");
    console.log(JSON.stringify(V3KeyStore));
    process.exit();
    ```

    ```javascript linenums="1" tab="Example"
    const Web3 = require('web3')

    // Web3 initialization (should point to the JSON-RPC endpoint)
    const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8590'))

    var V3KeyStore = web3.eth.accounts.encrypt("0x8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63", "password");
    console.log(JSON.stringify(V3KeyStore));
    process.exit();
    ```

Copy and paste the example JS script to a file (for example, `createKeyFile.js`) and replace the placeholders.

Use the JS script to display the text for the key file:

```bash
node createKeyFile.js
```

Copy and paste the text to a file that is named `[<prefix>]<accountAddress>.key`. The file name must
be identical to the password file except for the `.key` suffix.

## Start EthSigner

Start EthSigner with options:

* `chain-id` is the chain ID specified in the [Besu genesis file](https://besu.hyperledger.org/en/stable/Reference/Config-Items/).

* `downstream-http-port` is the `rpc-http-port` specified for Besu (`8590` in this example).

* `directory` is the location of the key and password files [created above](#create-passwords-and-key-files).

!!! example

    ```
    ethsigner --chain-id=2018 --downstream-http-port=8590 multifile-based-signer --directory=/Users/me/mydirectory
    ```

## Confirm EthSigner is up

Use the `upcheck` endpoint to confirm EthSigner is running.

!!! example

    ```bash tab="curl HTTP request"
    curl -X GET http://127.0.0.1:8545/upcheck
    ```

    ```json tab="Result"
    I'm up
    ```

## Confirm EthSigner passing requests to Besu

Request the current block number using [`eth_blockNumber`](https://besu.hyperledger.org/en/stable/Reference/API-Methods/#eth_blocknumber) with the EthSigner JSON-RPC endpoint (`8545` in this example):

```bash
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":51}' http://127.0.0.1:8545
```

You can now [use EthSigner to sign transactions](../HowTo/Transactions/Make-Transactions.md) with
the keys stored in the V3 Keystore key files.

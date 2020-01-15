---
description: Secure communication using TLS
---

# Configure TLS

Configure inbound and outbound TLS connections from the command line.

EthSigner only supports password-protected PKSC #12 keystores and truststores.

## Inbound TLS

An inbound TLS connection allows external clients to connect to EthSigner.

**Prerequisites**:

* Password-protected PKSC #12 keystore.
* File containing the password used to create the keystore.

### Create Known Clients File

Create a file (in this example, `knownClients`) that lists one or more clients
that are allowed to connect to EthSigner. The file contents use the format
`<hostname> <hex-string>` where `<hex-string>` is the SHA-256 fingerprint of the
client's certificate.

!!! example
    ```
    localhost DF:65:B8:02:08:5E:91:82:0F:91:F5:1C:96:56:92:C4:1A:F6:C6:27:FD:6C:FC:31:F2:BB:90:17:22:59:5B:50
    ```
    
You can use openssl to calculate the fingerprint.
    
### Start EthSigner

```bash
ethsigner --tls-keystore-file=/Users/me/my_node/certificate.pfx --tls-keystore-password-file=/Users/me/my_node/keystorePassword --tls-keystore-file=/Users/me/my_node/knownClients
```

The command line:

* Specifies the keystore using the [`--tls-keystore-file`](../Reference/CLI/CLI-Syntax.md#tls-keystore-file) option.
* Specifies the file that contains the password to decrypt the
keystore using the [`--tls-keystore-password-file`](../Reference/CLI/CLI-Syntax.md#tls-keystore-password-file) option.
* Specify the clients that are allowed to connect to EthSigner using the
[`tls-known-clients-file`](../Reference/CLI/CLI-Syntax.md#tls-known-clients-file)

!!! tip
    Use the [`tls-known-clients-file`](../Reference/CLI/CLI-Syntax.md#tls-known-clients-file) option to allow
    access to specific clients only.
    
## Outbound TLS

An outbound connection allows EthSigner to connect to a client (for example Besu) using a TLS
connection.

**Prerequisites**:

* Password-protected PKSC #12 keystore and truststore containing all trusted
certificates.
* File containing the password used to create the keystore and
truststore.

### Start EthSigner

```bash
ethsigner --downstream-http-tls-truststore-file=/Users/me/my_node/mytrustStore --downstream-http-tls-truststore-password-file=/Users/me/my_node/trustPassword --downstream-http-tls-keystore-file=/Users/me/my_node/certificate.pfx --downstream-http-tls-keystore-password-file=/Users/me/my_node/keyPassword
```

The command line:

* Specifies the truststore using the [`--downstream-http-tls-truststore-file`](../Reference/CLI/CLI-Syntax.md#downstream-http-tls-truststore-file)
option.
* Specifies the file that contains the password to decrypt the trustore using
the [`--downstream-http-tls-truststore-password-file`](../Reference/CLI/CLI-Syntax.md#downstream-http-tls-truststore-password-file) option.
* Specifies the keystore to present during client authentication using the 
[`--downstream-http-tls-keystore-file`](../Reference/CLI/CLI-Syntax.md#downstream-http-tls-keystore-file) option.
* Specifies the file that contains the password to decrypt the keystore using
the [`--downstream-http-tls-keystore-password-file`](../Reference/CLI/CLI-Syntax.md#downstream-http-tls-keystore-password-file) option.


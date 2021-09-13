---
description: Building EthSigner from source code
---

# Build from source

## Prerequisites

* [Java JDK](https://www.oracle.com/java/technologies/javase-downloads.html)

!!!important
    EthSigner requires Java 11 or later releases.

* [Git](https://git-scm.com/downloads) or [GitHub Desktop](https://desktop.github.com/)

## Installation on Linux / Unix / macOS

### Clone the EthSigner repository

Clone the `ConsenSys/ethsigner` repository:

```bash
git clone https://github.com/ConsenSys/ethsigner.git
```

### Build EthSigner

After cloning, go to the `ethsigner` directory.

Build EthSigner with the Gradle wrapper `gradlew`:

```bash
./gradlew build
```

Go to the distribution directory:

```bash
cd build/distributions/
```

Expand the distribution archive:

```bash
tar -xzf ethsigner-<version>.tar.gz
```

Move to the expanded folder and display the EthSigner help to confirm installation.

````bash
cd ethsigner-<version>/
bin/ethsigner --help
````

## Installation on Windows

### Install EthSigner

Clone the `ConsenSys/ethsigner` repository:

```bat
git clone https://github.com/ConsenSys/ethsigner.git
```

### Build EthSigner

Go to the `ethsigner` directory:

```bat
cd ethsigner
```

Build EthSigner with the Gradle wrapper `gradlew`:

```bat
.\gradlew build
```

!!!note
    To run `gradlew`, you must have the **JAVA_HOME** system variable set to the Java installation directory.
    For example: `JAVA_HOME = C:\Program Files\Java\jdk1.8.0_181`.

Go to the distribution directory:

```bat
cd build\distributions
```

Expand the distribution archive:

```bat
tar -xzf ethsigner-<version>.tar.gz
```

Go to the expanded folder and display the EthSigner help to confirm installation.

```bat
cd ethsigner-<version>
bin\ethsigner --help
```

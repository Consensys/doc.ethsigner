---
description: Monitoring and metrics
sidebar_position: 8
---

# Use metrics to monitor performance

Use the [`--metrics-enabled`](../Reference/CLI/CLI-Syntax.md#metrics-enabled) option to enable the [Prometheus](https://prometheus.io/) monitoring and alerting service to access EthSigner.

## Install Prometheus

To use Prometheus with EthSigner, install the [Prometheus main component](https://prometheus.io/download/). On MacOS, install with [Homebrew](https://formulae.brew.sh/formula/prometheus):

```bash
 brew install prometheus
```

## Setting up and running Prometheus with EthSigner

To configure Prometheus to run with EthSigner:

1. Configure Prometheus to poll EthSigner. For example, add the following YAML fragment to the the `prometheus.yml` file:

   :::info Example configuration

   ```yml
   global:
     scrape_interval: 15s
   scrape_configs:
     - job_name: "prometheus"
       static_configs:
         - targets: ["localhost:9090"]
     - job_name: "ethsigner-prod"
       scrape_timeout: 10s
       metrics_path: /metrics
       scheme: http
       static_configs:
         - targets: ["localhost:9546"]
   ```

   :::

   :::note

   Alternatively create your own YAML file and add the above example configuration.

   :::

1. Start EthSigner with the [`--metrics-enabled`](../Reference/CLI/CLI-Syntax.md#metrics-enabled) option.

   ```bash
   ethsigner --chain-id=2018 \
   --downstream-http-port=8590 --metrics-enabled=true \
   file-based-signer --key-file=/Users/me/signer/keyFile --password-file=/Users/me/signer/passwordFile
   ```

   The `JVM`, and `PROCESS` metrics categories are enabled by default. Use the [`--metrics-category`](../Reference/CLI/CLI-Syntax.md#metrics-category) command line option to update the available categories.

   :::tip

   To view the full list of available EthSigner metrics view `http://<metrics-host>:<metrics-port>/metrics`. By default this is `http://localhost:9546/metrics`.

   :::

1. In another terminal, run Prometheus specifying the `prometheus.yml` file:

   ```bash
   prometheus --config.file=prometheus.yml
   ```

1. View the [Prometheus graphical interface](#view-prometheus-graphical-interface).

## View Prometheus graphical interface

1. Open a web browser to `http://localhost:9090` to view the Prometheus graphical interface.

1. Choose **Graph** from the menu bar and click the **Console** tab below.

1. From the **Insert metric at cursor** drop-down, select a metric and click **Execute**. The values display.

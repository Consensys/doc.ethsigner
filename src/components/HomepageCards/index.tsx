import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
// import styles from "./styles.module.css";

export default function HomepageCards(): JSX.Element {
  return (
    <section className={clsx("margin-top--lg", "margin-bottom--lg")}>
      <div className="container">
        <h1>Quick Links</h1>
        <hr />
        <div className="row">
          <div className={clsx("col col--4")}>
            <div className="card-demo">
              <div className="card">
                <div className="card__header">
                  <h3>Getting Started</h3>
                </div>
                <div className="card__body">
                  <p>
                    The quickest way to get started by either deploying with
                    Docker, standalone binary or building from source.
                  </p>
                </div>
                <div className="card__footer">
                  <Link
                    className="button button--success button--block"
                    to="/docs/category/get-started">
                    Go to guides
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={clsx("col col--4")}>
            <div className="card-demo">
              <div className="card">
                <div className="card__header">
                  <h3>Concepts</h3>
                </div>
                <div className="card__body">
                  <p>
                    Check out some general concepts that will help you
                    understand how EthSigner works under the hood and
                    architected.
                  </p>
                </div>
                <div className="card__footer">
                  <Link
                    className="button button--secondary button--block"
                    to="/docs/category/concepts">
                    Go to concepts
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={clsx("col col--4")}>
            <div className="card-demo">
              <div className="card">
                <div className="card__header">
                  <h3>Reference</h3>
                </div>
                <div className="card__body">
                  <p>
                    Find command line arguments, API methods through JSON-RPC,
                    and general configuration in the References section.
                  </p>
                </div>
                <div className="card__footer">
                  <Link
                    className="button button--info button--block"
                    to="/docs/category/reference">
                    Go to reference
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </section>
  );
}

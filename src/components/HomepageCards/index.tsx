import React from "react";
import clsx from "clsx";
// import styles from "./styles.module.css";

export default function HomepageCards(): JSX.Element {
  return (
    <section className={clsx("margin-top--lg", "margin-bottom--lg")}>
      <div className="container">
        <div className="row">
          <div className={clsx("col col--4")}>
            <div className="card-demo">
              <div className="card">
                <div className="card__header">
                  <h3>Lorem Ipsum</h3>
                </div>
                <div className="card__body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>
                </div>
                <div className="card__footer">
                  <button className="button button--secondary button--block">
                    See All
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={clsx("col col--4")}>
            <div className="card-demo">
              <div className="card">
                <div className="card__header">
                  <h3>Lorem Ipsum</h3>
                </div>
                <div className="card__body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>
                </div>
                <div className="card__footer">
                  <button className="button button--secondary button--block">
                    See All
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={clsx("col col--4")}>
            <div className="card-demo">
              <div className="card">
                <div className="card__header">
                  <h3>Lorem Ipsum</h3>
                </div>
                <div className="card__body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>
                </div>
                <div className="card__footer">
                  <button className="button button--secondary button--block">
                    See All
                  </button>
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

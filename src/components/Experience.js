import React from "react";
import { BsPersonWorkspace } from "react-icons/bs";

const Experience = () => {
  return (
    <>
      <section className="container bg-main exp">
        <main className="row">
          <h1 className="main-head">
            Experience &nbsp;{" "}
            <i>
              <BsPersonWorkspace />
            </i>
          </h1>
          <div className="left-side-head col-12 col-lg-6">
            <h1 className="edu-head">AI/ML Intern</h1>
            <h3 className="edu-branch">TIH-IOT, IIT Bombay</h3>
            <h5 style={{ color: "black" }}>Jan 2024 - Apr 2024</h5>
          </div>
          <div className="right-side-head col-12 col-lg-6">
            <p className="edu-para">
              <ul>
                <li>
                  Developed RESTful APIs for machine learning models using Flask, achieving 95% uptime and ensuring seamless integration with existing applications.
                </li>
                <br />
                <li>
                  Performed exploratory data analysis (EDA) on time series datasets, yielding actionable insights that enhanced feature engineering and model selection, and reduced data preprocessing time by 30%.
                </li>
                <br />
                <li>
                  Designed and implemented a scalable machine learning pipeline, encompassing data preprocessing, feature engineering, model training, and evaluation, which improved deployment efficiency by 40% over previous methodologies.
                </li>
              </ul>
            </p>
          </div>
        </main>
      </section>
    </>
  );
};

export default Experience;

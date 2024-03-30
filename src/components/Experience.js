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
            <h1 className="edu-head">AI/ML </h1>
            <h3 className="edu-branch">Internship</h3>
            <h5 style={{ color: "black" }}>Jan 2024 - Present</h5>
          </div>
          <div className="right-side-head col-12 col-lg-6">
            <p className="edu-para">
              <ul>
                <li>
                  Developed RESTful endpoints for a machine learning model using
                  Flask, enabling seamless integration with existing
                  applications and services.
                </li>
                <li>
                  Conducted exploratory data analysis (EDA) on time series data
                  to extract meaningful insights, informing feature engineering
                  and model selection decisions.
                </li>
                <li>
                  Designed and implemented a scalable machine learning pipeline,
                  incorporating data preprocessing, feature engineering, model
                  training, and evaluation stages.
                </li>
                <li>
                  Deployed machine learning models on Microsoft Azure cloud
                  platform using continuous integration/continuous deployment
                  (CI/CD) pipelines, ensuring robustness and scalability of the
                  deployed solutions.
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

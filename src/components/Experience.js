import React from "react";
import { BsPersonWorkspace } from "react-icons/bs";


const Experience = () => {
  return (
    <>
      <section className="container bg-main exp">
        <main className="row">
          <h1 className="main-head">
            Experience &nbsp; <i><BsPersonWorkspace /></i>
          </h1>
          <div className="left-side-head col-12 col-lg-6">
            <h1 className="edu-head">AI/ML </h1>
            <h3 className="edu-branch">Internship</h3>
            <h5 style={{ color: "black" }}>Jan 2024 - Present</h5>
          </div>
          <div className="right-side-head col-12 col-lg-6">
            <p className="edu-para">
              Currently Working on a Machine Learning Project.
            </p>
          </div>
        </main>
      </section>
    </>
  );
};

export default Experience;

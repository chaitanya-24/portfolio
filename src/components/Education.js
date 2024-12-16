import React from "react";

const Education = () => {
  return (
    <>
      <section className="container bg-main">
        <main className="row">
          <h1 className="main-head">
            Education &nbsp; <i class="fas fa-graduation-cap"></i>
          </h1>
          <div className="left-side-head col-12 col-lg-6">
            <h1 className="edu-head">Master of Science </h1>
            <h3 className="edu-branch">Computer Science</h3>
            <h5 style={{ color: "black" }}>Aug 2022 - Sep 2024</h5>
          </div>
          <div className="right-side-head col-12 col-lg-6">
            <p className="edu-para">
              I completed my <b>Master of Computer Science</b> from <br />{" "}
              <b>G N Khalsa College, Mumbai</b>.
            </p>
          </div>
        </main>
      </section>
    </>
  );
};

export default Education;

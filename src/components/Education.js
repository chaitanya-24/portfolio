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
            <h5 style={{ color: "black" }}>2022 - 2024</h5>
          </div>
          <div className="right-side-head col-12 col-lg-6">
            <p className="edu-para">
              <ul>
                <li>Specialized in <b>Machine Learning</b> and <b>Artificial Intelligence</b>.</li>
                <li>My studies include relevant coursework in Machine Learning, Deep Learning, Natural Language Processing, and Cloud Computing.</li>
              </ul>
            </p>
          </div>
        </main>
      </section>
    </>
  );
};

export default Education;

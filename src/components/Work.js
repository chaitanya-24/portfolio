import React from "react";
import { FaDocker, FaGitAlt, FaAws } from "react-icons/fa"
import { SiScikitlearn, SiFlask, SiTensorflow, SiPandas, SiNumpy, SiMlflow } from "react-icons/si"
import { DiMongodb } from "react-icons/di";


const Work = () => {
  return (
    <>
      <section
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1500"
        data-aos-once="true"
        className="container"
      >
        <h1 className="main-head">
          Tech Stack&nbsp; <i class="fas fa-tools"></i>
        </h1>
        <main className="row justify-content-center  tool-section">
          <span
            data-cooltipz-dir="left"
            aria-label="NUMPY"
            className="col-4 col-lg-2"
          >
            <i class="social-icon work-icon"><SiNumpy /></i>
          </span>
          <span
            data-cooltipz-dir="left"
            aria-label="PANDAS"
            className="col-4 col-lg-2"
          >
            <i class="social-icon work-icon"><SiPandas /></i>
          </span>
          <span
            data-cooltipz-dir="left"
            aria-label="Docker"
            className="col-4 col-lg-2"
          >
            <i class="social-icon work-icon"><FaDocker style={{height:"40"}} /></i>
          </span> 
          <span
            data-cooltipz-dir="left"
            aria-label="MLflow"
            className="col-4 col-lg-2"
          >
            <i class="social-icon work-icon"><SiMlflow /></i>
          </span>
          <span
            data-cooltipz-dir="left"
            aria-label="REACT"
            className="col-4 col-lg-2"
          >
            <i class="social-icon work-icon fab fa-react"></i>
          </span>
          <span
            data-cooltipz-dir="left"
            aria-label="TENSORFLOW"
            className="col-4 col-lg-2"
          >
            <i class="social-icon work-icon"><SiTensorflow style={{height:"40"}} /></i>
          </span>
          <span
            data-cooltipz-dir="left"
            aria-label="AWS"
            className="col-4 col-lg-2"
          >
            <i class="social-icon work-icon"><FaAws /></i>
          </span>
          <span
            data-cooltipz-dir="left"
            aria-label="PYTHON"
            className="col-4 col-lg-2"
          >
            <i class="social-icon work-icon fab fa-python"></i>
          </span>
          <span
            data-cooltipz-dir="left"
            aria-label="FLASK"
            className="col-4 col-lg-2"
          >
            <i class="social-icon fab  work-icon"><SiFlask style={{height:"40"}} /></i>
          </span>
          <span
            data-cooltipz-dir="left"
            aria-label="SCIKIT-LEARN"
            className="col-4 col-lg-2"
          >
            <i class="social-icon fab work-icon"><SiScikitlearn style={{height:"40"}} /></i>
          </span>
          <span
            data-cooltipz-dir="left"
            aria-label="GIT"
            className="col-4 col-lg-2"
          >
            <i class="social-icon work-icon"><FaGitAlt style={{height:"40"}} /></i>
          </span>
          <span
            data-cooltipz-dir="left"
            aria-label="MONGO DB"
            className="col-4 col-lg-2"
          >
            <i class="social-icon work-icon"><DiMongodb style={{height:"40"}} /></i>
          </span>
        </main>
      </section>
    </>
  );
};

export default Work;
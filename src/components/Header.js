import React from "react";

const Header = () => {
  return (
    <>  
      <header className="head container-fluid">
        <div className="row d-flex justify-content-center">
          <section data-aos="fade-up-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true" className="left-side-head col-12 col-lg-5">
            <h1 className="head-name">Chaitanya Sawant</h1>
            <p className="head-para">
              Machine Learning Engineer with expertise in developing and deploying scalable AI solutions, fine-tuning large language models, and building ML pipelines. Passionate about leveraging AI to solve complex challenges and drive innovation in collaborative environments. 
            </p>

            <section className="socials">
              <a href="https://www.linkedin.com/in/chaitanyasawant/" target="_blank" rel="noreferrer">
                <i class="social-icon fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/chaitanya_42" target="_blank" rel="noreferrer">
                <i class="social-icon fab fa-twitter"></i>
              </a>
              <a href="https://github.com/chaitanya-24" target="_blank" rel="noreferrer">
                <i class="social-icon fab fa-github"></i>
              </a>
              {/* <a href="https://www.instagram.com/chaitanya42_/" target="_blank" rel="noreferrer">
                <i class="social-icon fab fa-instagram"></i>
              </a> */}
              <a href="https://medium.com/@chaitanyasawant" target="_blank" rel="noreferrer">
                <i class="social-icon fab fa-medium"></i>
              </a><br />
              {/* <a href="https://drive.google.com/file/d/1U-Y56SElLlvMuEmMer1ezBk94Z0LlWE6/view?usp=sharing" target="_blank" rel="noreferrer" download className="btn" style={{height: "5rem", background: "#fc3e00", fontSize: "2rem", marginTop: "2rem", borderRadius: "1.6rem"}}>
                Download Resume
              </a> */}
            </section>
          </section>
          <section
            data-aos="fade-up-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            className="right-side-head col-12 col-lg-5"
          >
            <img
              className="img-fluid"
              src={process.env.PUBLIC_URL + "/images/headerImg.svg"}
              alt="headerImage"
            />
          </section>
        </div>
      </header>
    </>
  );
};

export default Header;
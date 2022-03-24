import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <div className="contenu">
              <h3>About Us</h3>
              <h1>WELCOME TO GASSFOOD PIZZA</h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout
              </p>
            </div>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                READ MORE
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="about__img">
                <img src="/images/about2.jpg" alt="about" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

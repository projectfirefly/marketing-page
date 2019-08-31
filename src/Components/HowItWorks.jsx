import React from "react";
import MediaQuery from "react-responsive";

import "../Styles/marketing_how_it_works.scss";
const HowItWorks = _ => {
  const mobile = 700;
  const desktop = 701;

  return (
    <>
      <MediaQuery maxWidth={mobile}>
        <div className="how_it_works">
          <h2>How it Works</h2>
          <div className="how_it_works_des">
            <video width="630" height="400" controls>
              <source src="movie.mp4" type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </MediaQuery>

      <MediaQuery minWidth={desktop}>
        <div className="background-container">
          <div className="how_it_works">
            <h2>How it Works</h2>
            <div className="how_it_works_des">
              <video width="400" controls className="video">
                <source src={require("../videos/video.mp4")} type="video/mp4" />
                <source src="movie.ogg" type="video/ogg" />
                Your browser does not support the video tag.
              </video>
              <div className="how_it_works_text">
                <p>
                  Firefly is designed for little hands with big ideas. Our
                  innovative learning system is designed with children in mind.
                  Our coding blocks are designed for 4-6 year-old children to
                  easily move the blocks with their fingers!
                </p>
                <p>
                  Our blocks interact and connect in a highly visual and
                  intuitive manner to create engaging educational interactions
                  with the core concepts of coding. The coding blocks can
                  connect in flexible patterns that encourage children to
                  investigate and test their ideas! Watch them build what they
                  imagine! We give wings to their ideas!
                </p>
              </div>
            </div>
            <img
              className="middle_page_firefly"
              src={require("../img/FireFly_glasses.svg")}
              alt=""
            />
          </div>
        </div>
      </MediaQuery>
    </>
  );
};

export default HowItWorks;

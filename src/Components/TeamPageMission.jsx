import React from "react";
import MediaQuery from "react-responsive";

import OurStory from "./OurStory";
import Badges from "./Badges";
import MissionStatementBottom from "./MissionStatementBottom";
import HowItWorks from "./HowItWorks";
import "../Styles/teamPage_mission_statement.scss";

export default _ => {
  const mobile = 700;
  const desktop = 701;

  return (
    <>
      <MediaQuery maxWidth={mobile}>
        <div className="team_mission_statement">
          <div className="statement">
            <h1>Our Team</h1>
            <img
              className="teamPage_main_pic"
              src={require("../img/Mobile_teamPage_mainPic.PNG")}
              alt=""
            />

            <p>
              Each person found their way on this project through a combination
              of hustle and serendipity. We have a combination of expertise in
              education, Fine Art, and Science build better apps for children.
              As a team, we plan, strategize and imagine a new experience for
              children learning to code. Our diversity is our strength. We
              represent the best of design and engineering for fun, playful and
              educational adventure for children.
            </p>
          </div>
          <Badges />
          <h1 className="little_hands">Little Hands Make Big Ideas!</h1>
          {/* <MissionStatementBottom />
                <HowItWorks /> */}
          <OurStory />
        </div>
      </MediaQuery>
      <MediaQuery minWidth={desktop}>
        <div className="team_mission_statement">
          <div className="statement">
            <h1>Our Team</h1>
            <p>
              Each person found their way on this project through a combination
              of hustle and serendipity. Our diversity is our strength. We have
              blended our expertise in Education, Fine Art, and Science to build
              better apps for children. We represent the best of design and
              engineering for fun, playful and educational adventures for
              children.
            </p>
            <Badges />
          </div>
          <div className="imagediv">
            <img
              className="teamPage_main_pic"
              src={require("../img/TeamPage_mainPic.PNG")}
              alt=""
            />
          </div>
        </div>
        <OurStory />
      </MediaQuery>
    </>
  );
};

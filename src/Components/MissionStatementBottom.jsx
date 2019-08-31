import React from "react";
import MediaQuery from "react-responsive";

import "../Styles/marketing_mission_bottom.scss";

const MissionStatementBottom = _ => {
  const mobile = 700;
  const desktop = 701;

  return (
    <>
      <MediaQuery maxWidth={mobile}>
        <div class="more_info">
          <img src={require("../img/firefly_mobile.PNG")} alt="" />
        </div>
      </MediaQuery>

      <MediaQuery minWidth={desktop}>
        <div className="statement-bottom">
          <h1 className="little_hands">Little Hands Make Big Ideas!</h1>

          <div class="more_info">
            <div class="fun tags">
              <img src={require("../img/firefly_fun.PNG")} alt="" />
              <p>
                We create fun and engaging coding experiences for all children.
                Firefly is an innovative, open ended coding environment that
                encourages experimentation. We understand that children learn
                through play!
              </p>
            </div>

            <div class="intuitive tags">
              <img src={require("../img/firefly_intuitive.PNG")} alt="" />
              <p>
                We create intuitive learning experiences that allows children to
                figure things out without feeling stuck. The visual coding
                blocks invite investigation and experimentation that comes
                naturally to children.
              </p>
            </div>

            <div class="engineering tags">
              <img src={require("../img/firefly_engineering.PNG")} alt="" />
              <p>
                Firefly more accurately teaches children what it means to be an
                engineer. We want parents to feel confident that their children
                are learning what it means to be an engineer.
              </p>
            </div>
          </div>
        </div>
      </MediaQuery>
    </>
  );
};

export default MissionStatementBottom;

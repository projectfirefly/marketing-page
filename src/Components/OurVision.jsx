import React from "react";

import "../Styles/ourVision.scss";
export default _ => {
  return (
    <div className="content_group">
      <div className="content1 content">
        <img src={require("../img/contentGroup1_img.svg")} alt="" />
        <div>
          <h1>We understand how children learn</h1>
          <ul>
            <li>Early Childhood Education Research based design</li>
            <li>Children can figure things out without feeling stuck</li>
            <li>
              Innovative, open-ended coding environment that encourages
              experimentation
            </li>
          </ul>
        </div>
      </div>

      <div className="content2 content">
        <img src={require("../img/contentGroup2_img.svg")} alt="" />
        <div>
          <h1>We value art, creativity and play</h1>
          <ul>
            <li>Colorful, imaginative creating</li>
            <li>Visually intuitive learning experience</li>
            <li>Fun and engaging coding adventure</li>
          </ul>
        </div>
      </div>

      <div className="content3 content">
        <img src={require("../img/contentGroup3_img.svg")} alt="" />
        <div>
          <h1>We believe everyone is an engineer at heart</h1>
          <ul>
            <li>Immersive engineering at play for children</li>
            <li>Designed by kids at heart for all kids</li>
            <li>
              Parents can be confident their children are learning they are
              engineers too!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

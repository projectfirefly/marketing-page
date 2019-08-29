import React from "react";

import "../Styles/testimony_button.scss";

export default _ => {
  return (
    <div className="testimony_button_div">
      <div className="testimony_image">
        <img src={require("../img/FireFly_headphones.svg")} alt="" />
      </div>
      <button className="testimonial_button">JOIN OUR ADVENTURE</button>
    </div>
  );
};

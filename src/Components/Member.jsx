import React, { useState } from "react";

import IconContainer from "./IconContainer";

import "../Styles/member_styles.scss";

export default ({
  name,
  displayName,
  title,
  icon1,
  icon2,
  icon3,
  link1,
  link2,
  link3
}) => {
  const [picState, setPicState] = useState("babyPic");
  const useForceUpdate = _ => useState()[1];
  const forceUpdate = useForceUpdate();
  const handleMouseIn = _ => {
    setPicState("profilePic");
    forceUpdate();
  };
  const handleMouseOut = _ => {
    setPicState("babyPic");
  };

  return (
    <>
      <div
        className="member_div"
        onMouseOver={handleMouseIn}
        onMouseOut={handleMouseOut}
      >
        <div className="overlay"></div>
        <div className="image">
          <img
            className="member_pics"
            src={require(`../img/${name}_${picState}.PNG`)}
            alt=""
          />
        </div>

        <div className="member_info">
          <div>
            <h1 className="name">{displayName}</h1>
            <p className="title">{title}</p>
          </div>

          <IconContainer
            name={name}
            link1={link1}
            link2={link2}
            link3={link3}
            icon1={icon1}
            icon2={icon2}
            icon3={icon3}
          />
        </div>
      </div>
    </>
  );
};

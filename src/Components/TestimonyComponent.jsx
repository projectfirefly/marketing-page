import React from "react";

import "../Styles/testimony_component.scss";

export default ({ pictureName, name, title, testimony }) => {
  return (
    <div className="testimony">
      <div className="user_info">
        <img src={require(`../img/Testimonial${pictureName}.PNG`)} alt="" />
        <p className="user_name">{name}</p>
        <p className="title">{title}</p>
      </div>
      <p className="testimony_text">{testimony}</p>
    </div>
  );
};

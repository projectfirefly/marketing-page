import React from "react";
import { NavLink } from "react-router-dom";

import "../Styles/footer.scss";
const Footer = _ => {
  return (
    <>
      <footer>
        <nav>
          <div className="nav_item_div">
            <NavLink to="/teamPage" className="nav_text">
              Meet Our Team
            </NavLink>
            <a href="#" className="nav_text">
              Learn More
            </a>
            <a href="#" className="nav_text">
              Contact Us
            </a>
          </div>

          <div className="nav_item_div">
            <a href="#" className="nav_text">
              Resources
            </a>
            <a href="#" className="nav_text">
              Privacy
            </a>
            <a href="#" className="nav_text">
              Terms
            </a>
          </div>

          <div className="nav_item_div">
            <a href="#" className="nav_text">
              Community
            </a>
            <a href="#" className="nav_text">
              Twitter
            </a>
            <a href="#" className="nav_text">
              Instagram
            </a>
          </div>
        </nav>

        <NavLink to="/" className="footer_logo">
          <img src={require("../img/Logo.png")} alt="" />
          &copy;Firefly 2019
        </NavLink>
      </footer>
    </>
  );
};

export default Footer;

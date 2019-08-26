import React from 'react';
import { NavLink } from 'react-router-dom';

import '../Styles/marketing_footer.scss';
const Footer = _ => {
    

    return (
        <>
        

            <footer>
                <nav >
                    <div className="nav_item_div">
                        <NavLink to="/teamPage" class="meet_team">
                            Meet Our Team
                        </NavLink>
                        <a href="#" class="meet_team">
                            Learn More
                        </a>
                        <a href="#" class="meet_team">
                            Contact Us
                        </a>
                    </div>

                    <div className="nav_item_div">
                        <a href="#" class="sign_in">
                            Resources
                        </a>
                        <a href="#" class="sign_in">
                            Privacy
                        </a>
                        <a href="#" class="sign_in">
                            Terms
                        </a>
                    </div>

                    <div className="nav_item_div">
                        <a href="#" class="sign_up">
                            Community
                        </a>
                        <a href="#" class="sign_up">
                            Twitter
                        </a>
                        <a href="#" class="sign_up">
                            Instagram
                        </a>
                    </div>
                </nav>
        

                <NavLink to="/" class="footer_logo">
                    <img src={require("../img/firefly_footer_logo.PNG")} alt=""/>
                    &copy;Firefly 2019
                </NavLink>
            </footer>
        </>
    )
}

export default Footer;
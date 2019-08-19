import React from 'react';
import MediaQuery from 'react-responsive';

import '../Styles/marketing_footer.scss';
const Footer = _ => {
    const mobile = 500;
    const desktop = 501;

    return (
        <>
        
            <MediaQuery maxWidth={mobile}>
                <footer>
                <nav >
                    <a href="#" class="meet_team">
                        Meet Our Team
                    </a>
                    <a href="#" class="sign_in">
                        Resources
                    </a>
                    <a href="#" class="sign_up">
                        Community
                    </a>
                </nav>
        

                <div class="footer_logo">
                    <img src={require("../img/firefly_footer_logo.PNG")} alt=""/>
                    &copy;Firefly 2019
                </div>
            </footer>
            </MediaQuery>

            <MediaQuery minWidth={desktop}>

                <footer>
                    <nav >
                        <div className="nav_item_div">
                            <a href="#" class="meet_team">
                                Meet Our Team
                            </a>
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
            

                    <div class="footer_logo">
                        <img src={require("../img/firefly_footer_logo.PNG")} alt=""/>
                        &copy;Firefly 2019
                    </div>
                </footer>
            </MediaQuery>
        </>
    )
}

export default Footer;
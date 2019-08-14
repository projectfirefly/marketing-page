import React from 'react';
import MediaQuery from 'react-responsive';

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
                    <img src={require("./img/firefly_footer_logo.PNG")} alt=""/>
                    &copy;Firefly 2019
                </div>
            </footer>
            </MediaQuery>

            <MediaQuery minWidth={desktop}>

                <footer>
                    <nav >
                        <a href="#" class="meet_team">
                            Meet Our Team
                        </a>
                        <a href="#" class="sign_in">
                            Sign In
                        </a>
                        <a href="#" class="sign_up">
                            Sign Up
                        </a>
                    </nav>
            

                    <div class="footer_logo">
                        <img src={require("./img/firefly_footer_logo.PNG")} alt=""/>
                        &copy;Firefly 2019
                    </div>
                </footer>
            </MediaQuery>
        </>
    )
}

export default Footer;
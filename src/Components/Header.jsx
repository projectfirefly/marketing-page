import React from 'react';
import { NavLink } from 'react-router-dom';

import '../Styles/header_styles.scss';

const Header = _ => {
    
    return (
        <header className="header">
                    
            <NavLink to="/" className="logo">
                <img src={require("../img/firefly_logo.PNG")} alt=""/>
            </NavLink>
            
            <nav className="nav_bar">
                <NavLink to="/teamPage" className="meet_team">
                    Meet Our Team
                </NavLink>
                <NavLink to="#" className="sign_in">
                    Sign In
                </NavLink>
                <NavLink href="#" className="sign_up">
                    Sign Up
                </NavLink>
            </nav>
        
        </header>
    )
}

export default Header;
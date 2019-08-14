import React from 'react';

const Header = _ => {
    
    return (
        <header className="header">
                    
            <div className="logo">
                <img src={require("./img/firefly logo.PNG")} alt=""/>
            </div>
            
            <nav className="nav_bar">
                <a href="#" className="meet_team">
                    Meet Our Team
                </a>
                <a href="#" className="sign_in">
                    Sign In
                </a>
                <a href="#" className="sign_up">
                    Sign Up
                </a>
            </nav>
        
        </header>
    )
}

export default Header;
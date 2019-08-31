import React, { useState } from 'react';
// import Modal from '@material-ui/core/Modal';
// import Dialog from '@material-ui/core/Dialog';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
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
                   Our Team
                </NavLink>
                <NavLink to="/tutorial" className="meet_team">
                    How Firefly Works
                </NavLink>
                <a href="https://projectfirefly-production.netlify.com/signin" className="sign_in">
                    Sign In
                </a>
                <a href="https://projectfirefly-production.netlify.com/signup" className="sign_up">
                    Sign Up
                </a>
            </nav>
         
        </header>
    )
}

export default Header;
import React from 'react';
import { NavLink } from 'react-router-dom';

import Header from './Header';
import Mission from './TeamPageMission';
import TeamView from './TeamView';
import TeamPageTestimony from './TeamPageTestimony';
import Footer from './Footer';
import '../Styles/teamPageStyles.scss';

export default _ => {

    return(
        <div className="team_page_container">
            <Header />
            <Mission />
            <TeamView />
            <TeamPageTestimony />
            <Footer />
        </div>
    )
}
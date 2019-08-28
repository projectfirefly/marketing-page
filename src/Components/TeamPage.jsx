import React from 'react';


import Header from './Header';
import Mission from './TeamPageMission';
import TeamPageTestimony from './TeamPageTestimony';
import Footer from './Footer';
import '../Styles/teamPageStyles.scss';
import OurVision from './OurVision';

export default _ => {

    return(
        <div className="team_page_container">
            <Header />
            <Mission />
            <OurVision />
            <TeamPageTestimony />
            <Footer />
        </div>
    )
}
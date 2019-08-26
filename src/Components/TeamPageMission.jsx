import React from 'react';
import MediaQuery from 'react-responsive';

import OurStory from './OurStory';
import Badges from './Badges';
import MissionStatementBottom from './MissionStatementBottom';
import HowItWorks from './HowItWorks';
import '../Styles/teamPage_mission_statement.scss';


export default _ => {

    const mobile = 700
    const desktop = 701

    return(
        <>
        <MediaQuery maxWidth={mobile}>
            <div className="team_mission_statement">
                <div className="statement">
                    <h1>Our Mission</h1>
                    <img className="teamPage_main_pic" src={require('../img/Mobile_teamPage_mainPic.PNG')} alt=""/>

                    <p>
                        We are redefining how children learn to program by creating
                        playful engineering apps at  the intersection of art, design,
                        and technology.
                    </p>
                </div>
                <Badges />
                <h1 className="little_hands">Little Hands Make Big Ideas!</h1>
                <MissionStatementBottom />
                <HowItWorks />
            </div>

        </MediaQuery>
        <MediaQuery minWidth={desktop}>
            <div className="team_mission_statement">
                <div className="statement">
                    <h1>Our Mission</h1>
                    <p>
                        We give children wings by creating playful engineering apps.
                        Firefly is redefining how children learn to program by creating a
                        playground for learning at the intersection of art, design and technology.
                    </p>
                    <Badges />
                </div>
                <img className="teamPage_main_pic" src={require('../img/TeamPage_mainPic.PNG')} alt=""/>
            </div>
            <OurStory />
        </MediaQuery>
        </>

    )
}
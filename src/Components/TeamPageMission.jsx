import React from 'react';

import OurStory from './OurStory';
import Badges from './Badges';

export default _ => {

    return(
        <>
            <div className="team_mission_statement">
                <div className="statement">
                    <h1>Our Mission</h1>
                    <p>
                        We give children wings by creating playful engineering apps.
                        Firefly redefines how children learn to program by creating
                        palygrounds for learning at the intersection of art, design, and technology.
                    </p>
                    <Badges />
                </div>
                <img className="teamPage_main_pic" src={require('../img/TeamPage_mainPic.PNG')} alt=""/>
            </div>
            <OurStory />
        </>

    )
}
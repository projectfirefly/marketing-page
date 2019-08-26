import React from 'react';

import '../Styles/ourStory.scss';

export default _ => {

    return(
        <div className="our_story">
            <h1>Our Story</h1>
            <div className="our_story_text">
                <p>
                    Each person found their way on this project through a combonation
                    of hustle and serendipity. As a team, we plan, strategie and imagine a
                    new experience for children learning to code.
                </p>
            </div>
            <img src={require('../img/TeamPage_fireFly.PNG')} alt=""/>
        </div>
    )
}
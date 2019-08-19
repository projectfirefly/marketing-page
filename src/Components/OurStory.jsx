import React from 'react';

export default _ => {

    return(
        <div className="our_story">
            <h1>Our Story</h1>
            <div className="our_story_text">
                <p>
                    We were meant to be a team. Each person found their way on this project
                    through a combination of hustle and serendipity. As a team, we planned.
                    strategized and schemed. We also disagreed. We talked it out, hashed out our
                    perspectives and kept our eyes on the prize: building an amazing, playful engineering app
                    designed uniquely for children who will learn to fly.
                </p>
            </div>
            <img src={require('../img/TeamPage_fireFly.PNG')} alt=""/>
        </div>
    )
}
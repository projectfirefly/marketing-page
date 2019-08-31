import React from 'react';

import '../Styles/ourStory.scss';
import TeamView from './TeamView';

export default _ => {

    return(
        <div className="our_story">
            <div className="our_story_text">
            <h1>Our Vision</h1>

              <p>
                  We are reimagining how children learn to code by 
                  creating a playground at the intersection of art,
                  design and technology.
              </p>
              <img className="fireFly_hat" src={require('../img/test.svg')} alt=""/>

            </div>
              <TeamView />
        </div>
    )
}
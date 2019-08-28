import React from 'react'
import MediaQuery from 'react-responsive';

import Badges from './Badges';
import '../Styles/marketing_mission_statement.scss';

const MissionStatement = () => {
    const mobile = 700;
    const desktop = 701;
    
    
    return (
        <>
    
            
            
            <MediaQuery maxWidth={mobile}>
                <div className="mission_statement">
                    <div className="text">

                        <h1> Will You Give Her Wings?</h1>
                        <img className="mission_statement_img" src={require("../img/FireflyHeroPhoto.png")} alt=""/>
                        
                        <p> We give children wings by creating playful engineering apps.
                            Firefly is redefine how children learn to program by creating
                            playground for learning at the intersection of art, design, and technology.
                        </p>
                    </div>
                </div>
                <Badges />
                <h1 className="little_hands">
                        Little Hands Make Big Ideas!
                </h1>
           
            </MediaQuery>

            <MediaQuery minWidth={desktop} >
                <div className="mission_statement">
                    <div className="text">

                        <h1> Will You Give Her Wings?</h1>
                        <p> Alis Propriis Volat, She flies with her own wings </p>
                        
                        <p> We give children wings by creating playful engineering apps.
                            Firefly is redefining how children learn to program by creating a
                            playground for learning at the intersection of art, design and technology.
                        </p>
                        
                        <Badges />                      

                        <h1 className="little_hands">
                                Little Hands Make Big Ideas!
                        </h1>
                    </div>
                    
                        
                   
                    <img className="firefly_hero_img" src={require("../img/FireflyHeroPhoto.png")} alt=""/>

                </div>
          
            </MediaQuery>
            

        </>
    )
}

export default MissionStatement;
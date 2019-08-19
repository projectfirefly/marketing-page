import React from 'react'
import MediaQuery from 'react-responsive';

import Badges from './Badges';
import '../Styles/marketing_mission_statement.scss';

const MissionStatement = () => {
    const mobile = 500;
    const desktop = 501;
    
    
    return (
        <>
    
            
            
            <MediaQuery maxWidth={mobile}>
                <div className="mission_statement">
                    <div className="text">

                        <h2> Will You Give Her Wings?</h2>
                        <img className="mission_statement_img" src={require("../img/FireflyHeroPhoto.png")} alt=""/>
                        
                        <p> We give children wings by creating playful engineering apps.
                            Firefly is redefine how children learn to program by creating
                            playground for learning at the intersection of art, design, and technology.
                        </p>
                        <Badges />
                        <h2 className="little_hands">
                                Little Hands Make Big Ideas!
                        </h2>
                    </div>
                    
                        
                    
                    

                </div>
           
            </MediaQuery>

            <MediaQuery minWidth={desktop} >
                <div className="mission_statement">
                    <div className="text">

                        <h2> Will You Give Her Wings?</h2>
                        <p> Alis Propriis Volat, She flies with her own wings </p>
                        
                        <p> We give children wings by creating playful engineering apps.
                            Firefly is redefine how children learn to program by creating
                            playground for learning at the intersection of art, design, and technology.
                        </p>
                        
                        <Badges />                      

                        <h2 className="little_hands">
                                Little Hands Make Big Ideas!
                        </h2>
                    </div>
                    
                        
                    
                    <img className="mission_statement_img" src={require("../img/FireflyHeroPhoto.png")} alt=""/>

                </div>
          
            </MediaQuery>
            

        </>
    )
}

export default MissionStatement;
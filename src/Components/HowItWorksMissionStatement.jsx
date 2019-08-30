import React from 'react'
import MediaQuery from 'react-responsive';

import Badges from './Badges';

export default _ => {
    const mobile = 700;
    const desktop = 701;
    
    
    return (
        <>
            <MediaQuery maxWidth={mobile}>
                <div className="mission_statement">
                    <div className="text">

                        <h1> How Firefly Works</h1>
                        <img className="mission_statement_img" src={require("../img/how_it_works_main.PNG")} alt=""/>
                        
                        <p> We believe little hands can build ideas!</p>

                        <p> Our flexible coding blocks are designed as colorful, fun,
                            and interactive blocks that light the imaginations of our
                            youngest engineers!
                        </p>
                    </div>
                </div>
                <Badges />
           
            </MediaQuery>

            <MediaQuery minWidth={desktop} >
                <div className="mission_statement">
                    <div className="text">

                        <h1> How Firefly Works </h1>
                        <p> We believe little hands can build ideas! </p>
                        
                        <p> 
                            Our flexible coding blocks are designed as colorful, fun,
                            and interactive blocks that light the imaginations of our
                            youngest engineers!
                        </p>
                        
                        <Badges />
                    </div>
                    
                    <img className="firefly_hero_img" src={require("../img/how_it_works_main.PNG")} alt=""/>

                </div>
          
            </MediaQuery>
           
        </>
    )
}


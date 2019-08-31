import React, { useState } from 'react';
import MediaQuery from 'react-responsive';

import Badges from './Badges';


import TestimonyButton from './TestimonyButton';
import TestimonyComponent from './TestimonyComponent';

export default _ => {
    const mobile = 700;
    const desktop = 701;

    const [membersInfo] = useState([
        {
            name: 'Ryan "Holdy" Holdaway',
            title: 'Engineering Manager',
            pictureName: "Holdy",
            testimony: "This is the most well researched project we've ever seen. We expect big things from this team!"
        }
    ])

    return(
        
        <>
        
            <MediaQuery maxWidth={ mobile }>
                {membersInfo.map(user => (

                <div class="testimony_container">

                    <TestimonyComponent 
                        name={user.name}
                        pictureName={user.pictureName}
                        title={user.title}
                        testimony={user.testimony}
                    />
                    
                </div>
                ))}
                <Badges />
            </MediaQuery>
            
            <MediaQuery minWidth={ desktop }>
                <div class="all-testimonies">
                    {membersInfo.map(user => (
                        <div class="testimony_container">
                        <TestimonyComponent
                            name={user.name}
                            pictureName={user.pictureName}
                            title={user.title}
                            testimony={user.testimony}
                        />
                        </div>
                    ))}
            </div>
                <TestimonyButton />
            </MediaQuery>
            
        </>
           

    )
}



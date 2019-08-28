import React, { useState } from 'react';
import MediaQuery from 'react-responsive';

import Badges from './Badges';
import TestimonyButton from './TestimonyButton';
import TestimonyComponent from './TestimonyComponent';

import '../Styles/marketing_testimony.scss';
const Testimonies = _ => {

    const [userState] = useState([
        {
            name: "Jennifer Smalls",
            pictureName: "Mom",
            title: "Preschool Teacher",
            testimony: "I love how easy it is to communicate with parents. I love that it is now used for our classroom portfolios and parents can have access to their child's learning. Dojo is easy to set up and very user friendly for parents!!! I don't think i cold survive without Dojo!!!"
        },
        {
            name: "Jeff Smalls",
            pictureName: "Dad",
            title: "Real World Dad",
            testimony: "I love how easy it is to communicate with parents. I love that it is now used for our classroom portfolios and parents can have access to their child's learning. Dojo is easy to set up and very user friendly for parents!!! I don't think i cold survive without Dojo!!!"
        },
        {
            name: "Sarah Smalls",
            pictureName: "Girl",
            title: "Real World Teen",
            testimony: "I love how easy it is to communicate with parents. I love that it is now used for our classroom portfolios and parents can have access to their child's learning. Dojo is easy to set up and very user friendly for parents!!! I don't think i cold survive without Dojo!!!"
        }
    ])

    const Mobile = 700;
    const Desktop = 701;
 

    return (
        <>
            <MediaQuery maxWidth={ Mobile }>
                {userState.map(user => (

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
            <MediaQuery minWidth={ Desktop }>
                {userState.map(user => (

                <div class="testimony_container">

                    <TestimonyComponent 
                        name={user.name}
                        pictureName={user.pictureName}
                        title={user.title}
                        testimony={user.testimony}
                    />
                    
                </div>
                ))}
                <TestimonyButton />
            </MediaQuery>
            
        </>

    )
}

export default Testimonies;
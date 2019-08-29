import React, { useState } from 'react';
import TestimonyComponent from './TestimonyComponent';

export default _ => {

    const [ state ] = useState([
        {
            name: 'Jennifer Smalls',
            pictureName: 'Girl',
            title: "Preschool Teacher",
            testimony: "I love how easy it is to communicate with parents. I love that it is now used for our classroom portfolios and parents can have access to their child's learning. Dojo is easy to set up and very user friendly for parents!!! I don't think i cold survive without Dojo!!!"
        }
    ])
    return(
        <div class="testimony_container">

        {state.map(member => (
            <TestimonyComponent 
                name={member.name}
                pictureName={member.pictureName}
                title={member.title}
                testimony={member.testimony}
            />
        ))}
        </div>
    )
}
import React, { useState } from 'react';
import TestimonyComponent from './TestimonyComponent';

export default _ => {

    const [ state ] = useState([
        {
            name: 'Jennifer Smalls',
            pictureName: 'Girl',
            title: "Preschool Teacher",
            testimony: "I love how easy it is to communicate with parents. I love that it is now used for our classroom portfolios and parents can have access to their child's learning. Firefly is easy to set up and very user friendly for parents!!! I don't think i cold survive without Firefly!!!"
        }
    ])
    return(
        <div class="all-testimonies">
          {state.map(user => (
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
    )
}
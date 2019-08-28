import React from 'react';

import '../Styles/testimony_button.scss';

export default _ => {

    return(
        <div className="testimony_button_div">
            <img src={require('../img/FireFly_headphones.svg')} alt=""/>
            <button className="testimonial_button">JOIN OUR ADVENTURE</button>
        </div>
    )
}
import React from 'react';

import '../Styles/button_badges.scss';
export default _ => {

    console.log(1+1);

    return(
        <div className="button_badges_container">
            <button className='button'> JOIN OUR ADVENTURE</button>
            <div className="badges">
                <img className="appStore_badge ios" src={require("../img/appstore.svg")} alt=""/>
                <img className="appStore_badge android" src={require("../img/google-play-badge (1).png")} alt=""/>
            </div>
            
        </div>
    )
}
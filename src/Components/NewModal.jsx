import React from 'react';

import '../Styles/modalStyles.scss';
import SignInPage from './SignInModal';

export default () => {
    
    
    return (
        <div className="modal_container">

            {/* <SignInPage /> */}
            <img src={require('../img/FireFly_glasses.svg')} alt=""/>
            
                <form action="">
                    <input type="text" placeholder="Email "/>
                    <input type="password" placeholder="Password"/>
                    <input type="password" placeholder="Confirm password"/>
                    <input type="checkbox" />
                    <button className="button" >JOIN OUR ADVENTURE</button>
                </form>
            
        </div>
    )
}
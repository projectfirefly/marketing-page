import React from 'react';

export default _ => {

    return(
        <div className="testimony_container">


                        
            <div className="testimony1_div">
                    
                <div className="testimony1" >
                    <i className="quotes_icon quote_left fas fa-quote-left fa-3x"></i>
                    <p className="testimony_text">
                        
                        This is the most well researched project we've ever seen. 
                        We expect big things from this team!
                    </p>

                    <span className="testimony_name">&mdash;&mdash; Ryan "Holdy" Holderfield, Engineering Manager</span>
                </div>
                <i className="quotes_icon quote_right fas fa-quote-right fa-3x"></i>
                
                <img src={require("../img/Holdy.PNG")} alt=""/>
            </div>        
        </div>
    )
}



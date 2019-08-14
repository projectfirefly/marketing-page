import React from 'react';
import MediaQuery from 'react-responsive';

const Testimonies = _ => {
    const mobile = 500;
    const desktop = 501;

    return (
        <>
        
        <MediaQuery maxWidth={mobile}>
            <div className="bottom_card">
                <img src={require("./img/middle_page_firefly_mobile.PNG")} className="middle_page_firefly" alt=""/>
                <div className="test1 testimony">
                    <img src={require("./img/TestimonialBabay.png")} alt=""/>
                    <p className="testimony_text">
                        
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Laboriosam libero rem illum! Id atque accusantium ipsum eos, recusandae iusto autem rerum 
                            molestias ad quo tempore ullam a nisi repudiandae accusamus.

                            <span class="testimony_name">&mdash;&mdash; Mom.B</span>
                    </p>
                    
                    <div className="buttons">
                        <button className='button'> JOIN OUR ADVENTURE</button>
                            <div className="badges">

                                <img className="appStore_badge ios" src={require("./img/appstore.svg")} alt=""/>
                                <img className="appStore_badge android" src={require("./img/google-play-badge (1).png")} alt=""/>
                            </div>
                    </div>   
                     
                    
                </div>
            </div>
        </MediaQuery>

        <MediaQuery minWidth={desktop}>

        <div class="bottom_card">
                <img src={require("./img/middle_paage_firefly.PNG")} className="middle_page_firefly" alt=""/>
                <div className="test1 testimony">
                    <i className="quotes_icon quote_left fas fa-quote-left fa-3x"></i>
                    <p className="testimony_text">
                        
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Laboriosam libero rem illum! Id atque accusantium ipsum eos, recusandae iusto autem rerum 
                            molestias ad quo tempore ullam a nisi repudiandae accusamus.

                            <span class="testimony_name">&mdash;&mdash; Mom.B</span>
                    </p>
                    <i className="quotes_icon quote_right fas fa-quote-right fa-3x"></i>

                    <img src={require("./img/TestimonialBabay.png")} alt=""/>
                </div>
                <div className="test2 testimony">
                        
                    
                        <div>
                                <i className="quotes_icon quote_left fas fa-quote-left fa-3x"></i>
                                <p className="testing">
                                    
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Laboriosam libero rem illum! Id atque accusantium ipsum eos, recusandae iusto autem rerum 
                                    molestias ad quo tempore ullam a nisi repudiandae accusamus.
                                </p>
            
                                <span className="testimony_name">&mdash;&mdash; Dad.B</span>
                        </div>
                        <i className="quotes_icon quote_right fas fa-quote-right fa-3x"></i>
                    
                    <img src={require("./img/TestimonialDad.png")} alt=""/>
                </div>
                <div class="test3 testimony">
                        <i className="quotes_icon quote_left fas fa-quote-left fa-3x"></i>
                        <p>
                            
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Laboriosam libero rem illum! Id atque accusantium ipsum eos, recusandae iusto autem rerum 
                                molestias ad quo tempore ullam a nisi repudiandae accusamus.
            
                                <span className="testimony_name">&mdash;&mdash; Teacher.C</span>
                        </p>
                        <i className="quotes_icon quote_right fas fa-quote-right fa-3x"></i>

                    <img src={require("./img/TestimonialGirl.png")} alt=""/>
                </div>
                
            </div>
        </MediaQuery>
        </>

    )
}

export default Testimonies;
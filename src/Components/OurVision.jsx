import React from 'react';

import '../Styles/ourVision.scss';
export default _ => {

    return(
      
            
            <div className="content_group">

                <div className="content1 content">
                    <img src={require('../img/contentGroup1_img.PNG')} alt=""/>
                    <div>
                        <h1>We understand how children learn</h1>
                        <p>
                            <img src={require('../img/contentGroup_bullets.PNG')} alt=""/>
                            Early Childhood Education Research based design
                        </p>
                        <p>
                            <img src={require('../img/contentGroup_bullets.PNG')} alt=""/>
                            Children can figure things out without feeling stuck
                        </p>
                        <p>
                            <img src={require('../img/contentGroup_bullets.PNG')} alt=""/>
                            Innovative, open-ended coding environment that encourages experimentation
                        </p>
                    </div>
                </div>

                <div className="content2 content">
                    <img src={require('../img/contentGroup2_img.PNG')} alt=""/>
                    <div>
                        <h1>We value art, creativity and play</h1>
                        <p>
                            <img src={require('../img/contentGroup_bullets.PNG')} alt=""/>
                            Colorful, imaginative creating
                        </p>
                        <p>
                            <img src={require('../img/contentGroup_bullets.PNG')} alt=""/>
                            Visually intuitive learning experience
                        </p>
                        <p>
                            <img src={require('../img/contentGroup_bullets.PNG')} alt=""/>
                            Fun and engaging coding adventure
                        </p>
                    </div>
                </div>

                <div className="content3 content">
                    <img src={require('../img/contentGroup3_img.PNG')} alt=""/>
                    <div>
                        <h1>We believe everyone is an engineer at hart</h1>
                        <p>
                            <img src={require('../img/contentGroup_bullets.PNG')} alt=""/>
                            Immersive engineering at play for children
                        </p>
                        <p>
                            <img src={require('../img/contentGroup_bullets.PNG')} alt=""/>
                            Designed by kids at heart for all kids
                        </p>
                        <p>
                            <img src={require('../img/contentGroup_bullets.PNG')} alt=""/>
                            Parents can be confident their children are learning they are engineers too!
                        </p>
                    </div>
                </div>
            </div>
       
    )
}
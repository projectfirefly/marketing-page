import React from 'react';

import '../Styles/how_it_works_tutorial.scss';
export default _ => {

    return(
        <div className="firefly_tutorial_container">
            <div className="text_container">
                <p>
                    Firefly teaches the basics and allows children
                    to explore more complex ideas in our Firefly<br/>
                    app while having fun!
                </p>
                <img src={require('../img/wearing_hardHat.svg')} alt=""/>
            </div>

            <div className="tutorial_divs div1">
                <h1>Children Can Program Fireflies!</h1>

                <div className="content_container ">
                    <div className="content1 content">
                        <img className="img1" src={require('../img/Customize.png')} alt=""/>
                        <h2>Create Your Unique Firefly!</h2>
                    </div>

                    <div className="content2 content">
                        <div className="block_container">

                            <img className="img2" src={require('../img/start_block.svg')} alt=""/>
                            <img className="img3" src={require('../img/led_block.svg')} alt=""/>
                        </div>
                        <h2>Play With Colorful Coding Blocks</h2>
                    </div>

                    <div className="content3 content">
                        <img className="img4" src={require('../img/firefly_box.svg')} alt=""/>
                        <h2>Imaginations take flight!</h2>
                    </div>
                </div>

            </div>

            <div className="tutorial_divs div2">
                <h1>Create and Manage Your Firefly Family!</h1>
                <div className="content_container">
                    <div className="content">
                        <img className="img1" src={require('../img/ManageProfiles.png')} alt=""/>
                        <h2>Add your Fireflies!</h2>
                    </div>

                    <div className="content">
                        <img className="img2" src={require('../img/FireflyFamily.png')} alt=""/>
                        <h2>See your Firefly family at a glance!</h2>
                    </div>

                    <div className="content">
                        <img className="img3" src={require('../img/MyFirefly.png')} alt=""/>
                        <h2>Start playing in seconds!</h2>
                    </div>
                </div>
            </div>

            <div className="tutorial_divs div3">
                <h1>Explore More Worlds to Code</h1>
                <div className="content_container">
                    <div className="content">
                        <img className="img1" src={require('../img/explore_more1_img.PNG')} alt=""/>
                        <h2>Choose your world and your adventure!</h2>
                    </div>

                    <div className="content">
                        <img className="img2" src={require('../img/explore_more2_img.PNG')} alt=""/>
                        <h2>Save your Fireflies to light up your world!</h2>
                    </div>

                    <div className="content">
                        <img className="img3" src={require('../img/explore_more3_img.PNG')} alt=""/>
                        <h2>Code even more creations in your playground!</h2>
                    </div>
                </div>
         
            </div>
        </div>
    )
}
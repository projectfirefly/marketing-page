import React from 'react';

import '../Styles/how_it_works_tutorial.scss';
export default _ => {

    return(
        <div className="firefly_tutorial_container">
            <div className="text_container">
                <p>
                    Firefly teaches the basics while allowing
                    children to explore the more complex ideas in
                    a fun and engaging way.
                </p>
            </div>

            <div className="tutorial_divs">
                <h1>Children Can Program Fireflies!</h1>

                <div className="content_container">
                    <div className="">
                        <img src={require('../img/unique_firefly_img.PNG')} alt=""/>
                        <h2>Creat Your Unique Firefly</h2>
                    </div>

                    <div className="">
                        <img src={require('../img/colorful_codingblocks_img.PNG')} alt=""/>
                        <h2>Play With Colorful Coding Blocks</h2>
                    </div>

                    <div className="">
                        <img src={require('../img/take_flight_img.PNG')} alt=""/>
                        <h2>Imagination Take Flight!</h2>
                    </div>
                </div>

            </div>

            <div className="tutorial_divs div2">
                <h1>Create and Manage Your Firefly Family!</h1>
                <div className="content_container">
                    <div className="content">
                        <img src={require('../img/firefly_family1_img.PNG')} alt=""/>
                        <h2>Add your Fireflies!</h2>
                    </div>

                    <div className="content">
                        <img src={require('../img/firefly_family2_img.PNG')} alt=""/>
                        <h2>See your Firefly family at a glance!</h2>
                    </div>

                    <div className="content">
                        <img src={require('../img/firefly_family3_img.PNG')} alt=""/>
                        <h2>Start playing in seconds!</h2>
                    </div>
                </div>
            </div>

            <div className="tutorial_divs">
                <h1>Explore More Worlds to Code</h1>
                <div className="content_container">
                    <div className="content">
                        <img src={require('../img/explore_more1_img.PNG')} alt=""/>
                        <h2>Choose your world and your adventure!</h2>
                    </div>

                    <div className="content">
                        <img src={require('../img/explore_more2_img.PNG')} alt=""/>
                        <h2>Save your Fireflies to light up your world!</h2>
                    </div>

                    <div className="content">
                        <img src={require('../img/explore_more3_img.PNG')} alt=""/>
                        <h2>Code even more creations in your playground!</h2>
                    </div>
                </div>
         
            </div>
        </div>
    )
}
import React from 'react';

import '../Styles/modalStyles.scss';

export default ({ name, displayName, roll, icon1, icon2, icon3, link1, link2, link3, bio }) => {
    console.log(link1, link2, link3)
    
    return (
        <div className="modal_container">
            <div className="info_div">
                <img src={require(`../img/${name}_profilePic.PNG`)} alt=""/>
                <div className="info">
                    <p className="modal_display_name">{ displayName }</p>
                    <p className="modal_roll">{ roll }</p>

                    <div className="modal_icon_container">
                        <div className="icon_div">
                            <a href={`mailto:${link1}?Subject=Hello project Firefly member, ${name}`}><i className={`${icon1} fa-3x modal_icon`}/></a>
                        </div>
                        <div className="icon_div">
                            <a href={`${link2}`} target="_blank" ><i className={`${icon2} fa-3x modal_icon`}/></a>
                        </div>
                        <div className="icon_div">
                        <a href={`${link3}`} target="_blank" ><i className={`${icon3} fa-3x modal_icon`}/></a>
                        </div>
                    </div>
                </div>

            </div>
            <div className="bio">
                
                <p className="member_bio">{bio}</p>
            </div>
        </div>
    )
}
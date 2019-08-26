import React from 'react'
import '../Styles/icon_styles.scss';

export default ({link1, link2, link3, icon1, icon2, icon3, name}) => {

    return (
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
    )
}
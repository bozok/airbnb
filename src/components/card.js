import React from "react";
import star from '../images/star.png'

function Card(props) {
    let badgeText
    if(props.item.openSpot === 0){
        badgeText = "SOLD OUT"
    } else if(props.item.location === "Online"){
        badgeText = "Online"
    }


    return (
        <div className="card">
            {/* {props.openSpot === 0 && <div className="card--badge">Sold Out</div>} */}
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={require(`../images/${props.item.img}`)} className='card--image' alt='katie' />
            <div className="card--stats">
                <img src={star} alt='star'  className="card--star"/>
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) *</span>
                <span className="gray">{props.item.country}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}

export default Card
import React from "react";
import heroimg from '../images/hero_logo.png'

function Hero(){
    return(
        <div className="hero-container">
            <img src={heroimg} alt='hero' className="hero" />
            <h1>Online Experiences</h1>
        </div>
    )
}

export default Hero
import React from "react";
import heroimg from '../images/hero_logo.png'

// function Hero(){
//     return(
//         <div className="hero-container">
//             <img src={heroimg} alt='hero' className="hero" />
//             <h1 className="header">Online Experiences</h1>
//             <span className="hedertxt">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
// </span>
//         </div>
//     )
// }

function Hero(){
    return(
        <section className="hero">
            <img src={heroimg} alt='hero' className="hero--photo" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
        </section>
    )
}

export default Hero
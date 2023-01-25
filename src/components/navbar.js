import React from "react";
import logo from '../images/airbnb_logo.png'

function Navbar(){
    return(
        <nav>
            <img src={logo} className='nav--logo' alt='asdf' />
        </nav>
    )
}

export default Navbar
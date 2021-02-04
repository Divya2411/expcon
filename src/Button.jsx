import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';


const Button = () => {
    return (
        <>
        <div className = "button">
             <button className = " gradButton " type = "button">
                <NavLink className= "link"  to="/pracing"> <span> Try It Now</span></NavLink>
             </button>
             </div>
        </>
    )
}


export default Button;
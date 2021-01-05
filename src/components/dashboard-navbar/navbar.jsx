import React from 'react';
import propic from '../../assets/images/propic.jpg'
import './navbar-styles.css';
const NavBar = ({show})=>{
    let showClass = 'navbar';
    if(show){
        showClass = 'navbar show';
    }
    return(
        <div className={showClass}>
            <div className="profile">
                <div className="propic">
                    <img src={propic} alt=""/>
                </div>
                <div className="name">
                    <p>Krishnam Srivastava</p>
                </div>
            </div>
            <div className="nav-links">
                <li>Home</li>
                <li>Explore</li>
                <li>Contribute</li>
                <li>About Us</li>
            </div>
        </div>
    )
};

export default NavBar;
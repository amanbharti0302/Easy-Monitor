import React from 'react';
import propic from '../../assets/images/propic.jpg'
import './navbar-styles.css';
import homeicon from '../../assets/images/home-alt.svg';
import profileicon from '../../assets/images/profile.svg';
import ghosticon from '../../assets/images/ghost.svg';
import moredetailsicon from '../../assets/images/details-more.svg';

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
            </div>
            <div className="nav-links">
                <li><img className="icon" src={homeicon} alt='icon'/><span>Home</span></li>
                <li><img className="icon" src={moredetailsicon} alt='icon'/><span>Explore</span></li>
                <li><img className="icon" src={ghosticon} alt='icon'/><span>Contribute</span></li>
                <li><img className="icon" src={profileicon} alt='icon'/><span>About Us</span></li>
            </div>
        </div>
    )
};

export default NavBar;
import React from 'react';
import propic from '../../assets/images/propic.jpg'
import './navbar-styles.css';
import homeicon from '../../assets/images/home-alt.svg';
import profileicon from '../../assets/images/profile.svg';
import ghosticon from '../../assets/images/ghost.svg';
import descriptionicon from '../../assets/images/description-24px.svg';

const NavBar = ({show,onRouteChange})=>{
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
                <li id="home" onClick={()=>onRouteChange('home')}>
                    <img className="icon" src={homeicon} alt='icon'/>
                    <span>Home</span>
                </li>
                <li id="explore" onClick={()=>onRouteChange('explore')}>
                    <img className="icon" src={ghosticon} alt='icon'/>
                    <span>Explore</span>
                </li>
                <li id="myfiles" onClick={()=>onRouteChange('myfiles')}>
                    <img className="icon" src={descriptionicon} alt='icon'/>
                    <span>My Files</span>
                </li>
                <li id="contactus" onClick={()=>onRouteChange('contactus')}>
                    <img className="icon" src={profileicon} alt='icon'/>
                    <span>Contact Us</span>
                </li>
            </div>
        </div>
    );
}

export default NavBar;
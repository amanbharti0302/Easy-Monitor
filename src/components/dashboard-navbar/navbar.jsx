import React from 'react';
import collegelogo from '../../assets/images/college-logo.png'
import './navbar-styles.css';
import homeicon from '../../assets/images/home-alt.svg';
import profileicon from '../../assets/images/profile.svg';
import ghosticon from '../../assets/images/ghost.svg';
import descriptionicon from '../../assets/images/description-24px.svg';

const NavBar = ({show,onRouteChange,isstudent})=>{
    let showClass = 'navbar';
    if(show){
        showClass = 'navbar show';
    }
    
    if(isstudent){
        return(
            <div className={showClass}>
                <div className="logo-container">
                    <div className="college-logo">
                        <img src={collegelogo} alt=""/>
                    </div>
                </div>
                <div className="nav-links">
                    <li onClick={()=>onRouteChange('home')}>
                        <img className="nav-icon" src={homeicon} alt='icon'/>
                        <span>Home</span>
                    </li>
                    <li onClick={()=>onRouteChange('explore')}>
                        <img className="nav-icon" src={ghosticon} alt='icon'/>
                        <span>Explore</span>
                    </li>
                    <li onClick={()=>onRouteChange('myfiles')}>
                        <img className="nav-icon" src={descriptionicon} alt='icon'/>
                        <span>My Files</span>
                    </li>
                    <li onClick={()=>onRouteChange('contactus')}>
                        <img className="nav-icon" src={profileicon} alt='icon'/>
                        <span>Contact Us</span>
                    </li>
                </div>
            </div>
        );}
    else{
        return(
            <div className={showClass}>
                <div className="logo-container">
                    <div className="college-logo">
                        <img src={collegelogo} alt=""/>
                    </div>
                </div>
                <div className="nav-links">
                    <li onClick={()=>onRouteChange('home')}>
                        <img className="nav-icon" src={homeicon} alt='icon'/>
                        <span>Home</span>
                    </li>
                    <li onClick={()=>onRouteChange('explore')}>
                        <img className="nav-icon" src={ghosticon} alt='icon'/>
                        <span>Explore</span>
                    </li>
                    <li onClick={()=>onRouteChange('myfiles')}>
                        <img className="nav-icon" src={descriptionicon} alt='icon'/>
                        <span>Submitted Files</span>
                    </li>
                    <li onClick={()=>onRouteChange('checktest')}>
                        <img className="icon" src={descriptionicon} alt='icon'/>
                        <span>Check Test</span>
                    </li>
                    <li onClick={()=>onRouteChange('contactus')}>
                        <img className="nav-icon" src={profileicon} alt='icon'/>
                        <span>Contact Us</span>
                    </li>
                </div>
            </div>
        );}
}

export default NavBar;

/*

*/
import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../../assets/images/college-logo.png';

import './navbar-styles.css';
const NavBar = ({show,name,onRouteChange})=>{
    let showClass = 'teacher-navbar';
    if(show){
        showClass = 'teacher-navbar show';
    }
    return(
        <div className={showClass}>
            <div className="teacher-profile">
                <div className="teacher-propic">
                    <img src={logo} alt=""/>
                </div>
                <div className="teacher-name">
                    <p>{name}</p>
                </div>
            </div>
            <div className="teacher-nav-links">
                <Link style={{textDecoration:'none'}} to="/login-teacher/"><li >Home</li></Link>
                <Link style={{textDecoration:'none'}} to="/login-teacher/explore"><li>Explore</li></Link>
                <Link style={{textDecoration:'none'}} to="/login-teacher/assign"><li>Assign Work</li></Link>
                <Link style={{textDecoration:'none'}} to="/login-teacher/check"><li>Check Work</li></Link>
                <Link style={{textDecoration:'none'}} to="/login-teacher/contact"><li >About Us</li></Link>
            </div>
        </div>
    )
};

export default NavBar;
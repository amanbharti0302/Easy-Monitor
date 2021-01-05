import React from 'react';
import logo from '../../assets/images/logo.png';
import ToggleBtn from '../sidedrawer/togglebtn/toggle-btn';
import './header-styles.css';
const Header = ({menuToggle})=>{
    return(
        <div className="header-container">
            <nav class="header">
                <div className="logo">
                    <ToggleBtn menuToggle={menuToggle}/>
                    <img src={logo} alt=""/>
                </div>
                <div className="links">
                    <p>Logout</p>
                </div>
            </nav>
        </div>
    )
}

export default Header;
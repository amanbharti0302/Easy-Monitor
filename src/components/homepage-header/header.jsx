import React from 'react';
import './header.css';
import victory_image from '../../assets/images/slider-icon.png';
import logo from '../../assets/images/logo.png';



const header = ({ onLogin }) => {
    return (
        <div className="header-banner">
            <header className="header-main">
                <div id="company">
                    <img src={logo} className="homepage-logo" />
                </div>
                <nav className="header-nav">

                    <div className="login-btn">Home</div>
                    <a href="#container2" className="aboutusheader">About Us</a>
                    <div onClick={() => onLogin('/login-student')} className="login-btn">Student Login</div>
                    <div onClick={() => onLogin('/login-teacher')} className="login-btn">Professor Login</div>
                    <a href="#homepage-footer" className="aboutusheader">Contact Us</a>

                </nav>
            </header>
            <div id="welcome">
                <h1><strong></strong>Welcome to Easy Monitor </h1>
                <p>Stay connected and organized. Accomplish more together across  school, college and life with Easy Monitor.</p>
                <a href="#homepage-card-container" className="welcome-btn">Find Out More</a>
            </div>
            <img src={victory_image} className="victory-image" alt="First Vector Graphic" />
        </div>
    );
}
export default header;
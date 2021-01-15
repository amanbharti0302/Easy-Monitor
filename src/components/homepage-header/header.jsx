import React from 'react';
import './header.css';
import victory_image from '../../assets/images/slider-icon.png';

const header = ({ onLogin }) => {
    return (
        <div className="header-banner">
            <header className="header-main">
                <div id="company">Easy Monitor</div>
                <nav className="header-nav">
                    <div onClick={() => onLogin('/')} className="login-btn">Home</div>
                    <a className="login-btn" href="#container2">About Us</a>
                    <div onClick={() => onLogin('/login-student')} className="login-btn">Student Login</div>
                    <div onClick={() => onLogin('/login-teacher')} className="login-btn">Professor Login</div>
                    <div onClick={() => onLogin('/')} className="login-btn">Contact Us</div>
                </nav>
            </header>
            <div id="welcome">
                <h1><strong></strong>Welcome to Easy Monitor </h1>
                <p>Stay connected and organized. Accomplish more together across  school, college and life with Easy Monitor.</p>
                <div href="#about" className="welcome-btn">Find Out More</div>
            </div>
            <img src={victory_image} className="victory-image" alt="First Vector Graphic" />
        </div>
    );
}
export default header;
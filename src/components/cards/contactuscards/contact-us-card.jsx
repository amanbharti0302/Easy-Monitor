import React from 'react';
import Github from '../../../assets/images/github.png';
import LinkedIn from '../../../assets/images/linkedin.png';
import Krishnam from '../../../assets/images/propic.jpg';
import IconCard from '../icon-card/icon-card-component';


import './contact-us-card-style.css';
const ContactUsCard=()=>{
    return(
        <div className="contact-us-wrapper">
            <div className="image-wrapper">
                <div className="image-outer">
                    <div className="image-inner">
                        <img src={Krishnam} alt=""/>
                    </div>
                </div>
            </div>
            <div className="name">
                <h2 className="name-text">Krishnam Srivastava</h2>
                <h2 className="designation">Front End Developer</h2>
            </div>
            <div className="social-icons">
                <IconCard image={Github} />
                <IconCard image={LinkedIn} />
            </div>
            <div className="email">
                <button className="email-btn">Email</button>
            </div>
        </div>
    )
}

export default ContactUsCard;
import React from 'react';
import ContactUsCard from '../../cards/contactuscards/contact-us-card';
import './teacher-dashboard-contact-styles.css';

const DashBoardContact = ()=>{
    return(
        <div className="teacher-contact-body">
            <div className="teacher-contact-title">
                <h2 className="teacher-contact-title-text">Contact The Developers</h2>
            </div>
            <div className="contact-us-cards">
                <div className="row-1">
                    <ContactUsCard />
                    <ContactUsCard />
                </div>
                <div className="row-2">
                    <ContactUsCard />
                    <ContactUsCard />
                </div>
                
            </div>
        </div>
    )
}

export default DashBoardContact;
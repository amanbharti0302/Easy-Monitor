import React from 'react';
import ContactUsCard from '../../cards/contactuscards/contact-us-card';
import Krishnam from '../../../assets/images/propic.jpg';
import Apurva from '../../../assets/images/apurva.jpeg';
import Aman from '../../../assets/images/aman.jpg';
import Sakshi from '../../../assets/images/sakshi.jpg';
import './teacher-dashboard-contact-styles.css';

const DashBoardContact = ()=>{
    return(
        <div className="teacher-contact-body">
            <div className="teacher-contact-title">
                <h2 className="teacher-contact-title-text">Contact The Developers</h2>
            </div>
            <div className="contact-us-cards">
                <div className="row-1">
                    <ContactUsCard image={Krishnam} name={'Krishnam Srivastava'} desig={'Front-End Developer'} linkedin={'https://www.linkedin.com/in/krishnam-srivastava-249953189/'} github={'https://github.com/krishnam1998gkp'}/>
                    <ContactUsCard image={Aman} name={'Aman Bharti'} desig={'Full Stack Developer'} linkedin={'https://www.linkedin.com/in/aman-bharti-819b92176/'} github={'https://github.com/amanbharti0302'}/>
                </div>
                <div className="row-2">
                    <ContactUsCard image={Sakshi} name={'Sakshi Sinha'} desig={'Back-End Developer'} linkedin={'#'} github={'https://github.com/sakshi-1'}/>
                    <ContactUsCard image={Apurva} name={'Apurva Parashar'} desig={'Full Stack Developer'} linkedin={'#'} github={'https://github.com/Apurva-04/'}/>
                </div>
                
            </div>
        </div>
    )
}

export default DashBoardContact;
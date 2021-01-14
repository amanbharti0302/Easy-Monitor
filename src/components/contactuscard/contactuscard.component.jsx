import React from 'react';
import './contactuscard.styles.css';

import Example from './profilecard.component';
import apurva from '../../assets/images/apurva.jpeg';
import aman from '../../assets/images/aman.jpg';
import sakshi from '../../assets/images/sakshi.jpg';
import Krishnam from '../../assets/images/propic.jpg';


const Contactuscard = ()=>{
    return(
        <div className="contactus-card">
            <h3>Team: Lorem Ipsum 3.0</h3>
            <h4>College: National Institute Of Technology Patna</h4>
            <div className="contact-profile">
            <Example className="profile-card" name="Apurva" img={apurva}/>
            <Example name="Krishnam" img={Krishnam}/>
            <Example name="Sakshi Sinha" img={sakshi}/>
            <Example name="Aman Bharti" img={aman}/>
            </div>
            <h3></h3>
        </div>
    )
}


export default Contactuscard;
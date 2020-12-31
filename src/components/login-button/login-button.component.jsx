import react from 'react';
import {Link} from 'react-router-dom';
import './login-button.styles.scss';

const Loginbutton =({message})=>(
    <div className="btn-container">
        <Link className="btn-style" href='/'>{message}</Link>
    </div>
)

export default Loginbutton;
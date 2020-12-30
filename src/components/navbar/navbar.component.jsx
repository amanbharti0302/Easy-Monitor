import { Component } from 'react';
import './navbar.styles.scss';

import Loginbutton from '../login-button/login-button.component';

class Navbar extends Component{
    constructor(){
        super();
        this.state={
        }
    }

    render(){
        return(
            <div className="nav">
                <div className="nav-container">
                    navbar
                    <Loginbutton/>
                </div>
            </div>
        )
    }
}

export default Navbar;
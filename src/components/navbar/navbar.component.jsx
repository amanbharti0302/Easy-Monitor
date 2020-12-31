import { Component } from 'react';
import {Link} from 'react-router-dom';
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
                    <Link href="/" className="navbar-link navba`r-link__1 " >Home</Link>
                    <Loginbutton message = "Login as teacher"/>
                    <Loginbutton message = "Login as student"/>
                </div>
            </div>
        )
    }
}

export default Navbar;
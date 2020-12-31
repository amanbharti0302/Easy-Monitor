import { Component } from 'react';
import './footer.styles.scss';

class Footer extends Component{
    constructor(){
        super();
        this.state={
        }
    }

    render(){
        return(
            <div className="footer">
                <div className="footer-border"></div>
                <div className="footer-info">
                    
                </div>
                <br/>
                <span>&#xa9; Copyright 2020</span>
                <br/>
                <span>&#xa9; All rights reserved</span>
            </div>
        )
    }
}

export default Footer;
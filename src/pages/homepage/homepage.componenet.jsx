import { Component } from 'react';
import './homepage.styles.scss';

import eduimg from '../../assets/education.svg';
import girlstudying from '../../assets/girl studing.svg';

class Homepage extends Component{
    constructor(){
        super();
        this.state={
        }
    }

    render(){
        return(
            <div className="home-container">
                <div className="home-teacher">
                    <img src={eduimg}  alt="" className="home-svg"/>
                    <p>I want to stop cheaing </p>
                </div>

                <div className="home-student">
                <img src={girlstudying} alt="" className="home-svg"/>
                <p>I want to stop cheaing </p>
                </div>
            </div>
        )
    }

}




export default Homepage;
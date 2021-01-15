import {Link} from 'react-router-dom'

import './navbar-styles.css';
import collegelogo from '../../assets/images/college-logo.png'
import homeicon from '../../assets/images/home-alt.svg';
import profileicon from '../../assets/images/profile.svg';
import ghosticon from '../../assets/images/ghost.svg';
import descriptionicon from '../../assets/images/description-24px.svg';

const NavBar = ({show,onRouteChange,isstudent})=>{
    let showClass = 'navbar';
    if(show){
        showClass = 'navbar show';
    }
    if(isstudent)
        return(
            <div className={showClass}>
                <div className="logo-container">
                    <div className="college-logo">
                        <img src={collegelogo} alt=""/>
                    </div>
                </div>
                <div className="nav-links">
                    <Link style={{textDecoration:'none'}} to="Home">
                        <li>
                            <img className="nav-icon" src={homeicon} alt='icon'/>
                            <span>Home</span>
                        </li>
                    </Link>
                    <Link style={{textDecoration:'none'}} to="Explore">
                        <li>
                            <img className="nav-icon" src={ghosticon} alt='icon'/>
                            <span>Explore</span>
                        </li>
                    </Link>
                    <Link style={{textDecoration:'none'}} to="MyFiles">
                        <li>
                            <img className="nav-icon" src={descriptionicon} alt='icon'/>
                            <span>My Files</span>
                        </li>
                    </Link>
                    <Link style={{textDecoration:'none'}} to="ContactUs">
                        <li>
                            <img className="nav-icon" src={profileicon} alt='icon'/>
                            <span>Contact Us</span>
                        </li>
                    </Link>
                </div>
            </div>
        );
    else
        return(
            <div className={showClass}>
                <div className="logo-container">
                    <div className="college-logo">
                        <img src={collegelogo} alt=""/>
                    </div>
                </div>
                <div className="nav-links">
                    <Link style={{textDecoration:'none'}} to="Home">
                        <li>
                            <img className="nav-icon" src={homeicon} alt='icon'/>
                            <span>Home</span>
                        </li>
                    </Link>
                    <Link style={{textDecoration:'none'}} to="Explore">
                        <li>
                            <img className="nav-icon" src={ghosticon} alt='icon'/>
                            <span>Explore</span>
                        </li>
                    </Link>
                    <Link style={{textDecoration:'none'}} to="SubmittedFiles">
                        <li>
                            <img className="nav-icon" src={descriptionicon} alt='icon'/>
                            <span>Submitted Files</span>
                        </li>
                    </Link>
                    <Link style={{textDecoration:'none'}} to="ContactUs">
                        <li>
                            <img className="nav-icon" src={profileicon} alt='icon'/>
                            <span>Contact Us</span>
                        </li>
                    </Link>
                </div>
            </div>
        );
}

export default NavBar;
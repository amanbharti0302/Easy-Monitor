import React from 'react';
import logo from '../../assets/images/logo.png';
import ToggleBtn from '../sidedrawer/togglebtn/toggle-btn';
import './header-styles.css';

const Header = ({subject,onSubChange,menuToggle})=>{
    let options=[];
    const subs=['ALL','HINDI','ENGLISH','MATHS','SCIENCE'];
    for(let i=0;i<subs.length;i++)
        options.push(<div key={i} onClick={(event)=>onSubChange(event.target.innerHTML)}>{subs[i]}</div>);
    return(
        <div className="header-container">
            <nav className="header">
                <div className="logo">
                    <ToggleBtn menuToggle={menuToggle}/>
                    <img src={logo} alt=""/>
                </div>
                <div className="dropdown">
                    <div className="dropdown-btn">{subject}</div>
                    <div className="dropdown-content">
                        {options}
                    </div>
                </div>
                <div className="links">
                    <p>Logout</p>
                </div>
            </nav>
        </div>
    )
}

export default Header;
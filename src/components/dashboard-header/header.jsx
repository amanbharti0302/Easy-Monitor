import './header-styles.css';
import logo from '../../assets/images/logo.png';
import ToggleBtn from '../sidedrawer/togglebtn/toggle-btn';
import Dropdown from '../dropdown/dropdown.js';

const Header = ({user_subjects,route,currsubject,onSubChange,menuToggle})=>{
    let dropdown;
    if(route==='explore'||route==='myfiles')
        dropdown=<Dropdown user_subjects={user_subjects} currsubject={currsubject} onSubChange={onSubChange}/>
    return(
        <div className="header-container">
            <nav className="header">
                <div className="logo">
                    <ToggleBtn menuToggle={menuToggle}/>
                    <img src={logo} alt=""/>
                </div>
                {dropdown}
                <div onClick={()=>{localStorage.removeItem('token');localStorage.removeItem('type');window.location.reload();}} className="links">
                    <p>Logout</p>
                </div>
            </nav>
        </div>
    )
}

export default Header;
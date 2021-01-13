import './header.css';
import victory_image from '../../assets/images/slider-icon.png';

const header=({onLogin})=>{
    return(
        <div className="header-banner">
            <header className="header-main">
                <div id="company">Easy Monitor</div>
                <nav className="header-nav">
                    <div onClick={()=>onLogin('/login-student')} className="login-btn">Student login</div>
                    <div onClick={()=>onLogin('/login-teacher')} className="login-btn">Professor login</div>
                </nav>
            </header>
            <div id="welcome">
                <h1>Easy Monitoring is free <strong>for YOU</strong></h1>
                <p>This template is available for 100% free of charge on TemplateMo. Download, modify and use this for your business website.</p>
                <div href="#about" className="welcome-btn">Find Out More</div>
            </div>
            <img src={victory_image} className="victory-image" alt="First Vector Graphic"/>  
        </div>
    );
}
export default header;
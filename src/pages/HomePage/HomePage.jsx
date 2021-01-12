import React, { Component } from 'react';
import './home-page-css.css';

class HomePage extends Component{
    render(){
    return(
        <div>
            <h1 className="name">Hacknitp homepage temporary</h1>
            <button onClick={()=>{this.props.history.push('/login-student')}} className="btn">Login as a student</button>
            <button onClick={()=>{this.props.history.push('/login-teacher')}} className="btn">Login as a Professor</button>
        </div>
    )}
}

export default HomePage;
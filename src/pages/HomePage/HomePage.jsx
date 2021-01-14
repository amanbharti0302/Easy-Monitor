import React, { Component } from 'react';
import './homepage.css';
import Header from './../../components/homepage-header/header.jsx';
import Footer from './../../components/footer/footer.js';

class HomePage extends Component{
    render(){
    return(
       	<div>
	        <Header onLogin={(route)=>this.props.history.push(route)}/>
	        <div className="content">
	        	<div>
	        		<p>Our Aim</p>
	        	</div>
	        </div>
	        <Footer/>
        </div>
    )}
}

export default HomePage;
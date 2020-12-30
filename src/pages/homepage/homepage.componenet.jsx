import { Component } from 'react';
import './homepage.styles.scss';
import {Switch,Route,Redirect} from 'react-router-dom';

class Homepage extends Component{
    constructor(){
        super();
        this.state={
        }
    }

    render(){
        return(
            <div className="">
                Hello
            </div>
        )
    }

}




export default Homepage;
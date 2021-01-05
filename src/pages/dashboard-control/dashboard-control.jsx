import React,{Component} from 'react';
import Header from '../../components/dashboard-header/header';
import NavBar from '../../components/dashboard-navbar/navbar';
import DashBoard from '../dashboard-main/dashboard-main';

import './dashboard-control-styles.css';

class DashboardControl extends Component{
  constructor(){
    super();
    this.state = {
      sideDrawOpen: false
    }
    
  }
  menuToggle = ()=>{
    this.setState((prevState)=>{
      return(
        {sideDrawOpen:!prevState.sideDrawOpen}
      )
    })
  }
  render(){
    return(
      
        <div className="App">
            <Header menuToggle={this.menuToggle}/>
            <div className="dashboard">
              <NavBar show={this.state.sideDrawOpen} />
              <DashBoard />
            </div>
        </div>
      
    )
  }
}

export default DashboardControl;

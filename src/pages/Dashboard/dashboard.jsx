import React,{Component} from 'react';
import Header from '../../components/dashboard-header/header.jsx';
import NavBar from '../../components/dashboard-navbar/navbar.jsx';
import DashBoardMain from '../../components/dashboard-main/dashboard-main.jsx';
import './dashboard.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      sideDrawOpen: false,
      user: {
        subjects: ['HINDI','ENGLISH','MATHS','SCIENCE']
      },
      route: 'home',
      currsubject: 'ALL'
    }
  }
  menuToggle = ()=>{
    this.setState((prevState)=>{
      return({
        sideDrawOpen: !prevState.sideDrawOpen
      });
    })
  }
  onRouteChange=(route)=>{
    this.setState({
      route: route
    });
  }
  onSubChange=(currsubject)=>{
    this.setState({
      currsubject: currsubject
    }) 
  }

  render(){
    //console.log(this.state);
    const {route,user,currsubject,sideDrawOpen}=this.state;
    return(
      <div className="dashboard">
          <Header user_subjects={user.subjects} route={route} currsubject={currsubject} onSubChange={this.onSubChange} menuToggle={this.menuToggle}/>
          <div className="dashboard-navbar-main">
            <NavBar show={sideDrawOpen} onRouteChange={this.onRouteChange}/>
            <DashBoardMain route={route} user={user} currsubject={currsubject}/>
          </div>
      </div>
    )
  }
}

export default App;
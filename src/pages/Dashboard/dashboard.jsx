import React, { Component } from 'react';
import Header from '../../components/dashboard-header/header.jsx';
import NavBar from '../../components/dashboard-navbar/navbar.jsx';
import DashBoardMain from '../../components/dashboard-main/dashboard-main.jsx';
import './dashboard.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sideDrawOpen: false,

      user: {
        subjects: ['EC6526', 'EC6501', 'EC6502', 'EC6523']
      },
      route: 'home',
      currsubject: 'course'
    }
  }
  menuToggle = () => {
    this.setState((prevState) => {
      return ({
        sideDrawOpen: !prevState.sideDrawOpen
      });
    })
  }
  onRouteChange = (route) => {
    this.setState({
      route: route
    });
  }
  onSubChange = (currsubject) => {
    this.setState({
      currsubject: currsubject
    })
  }

<<<<<<< HEAD
  render() {
    //console.log(this.state);
    const { route, user, currsubject, sideDrawOpen } = this.state;
    return (
=======
  render(){
    const {type} = this.props;
    const {route,user,currsubject,sideDrawOpen}=this.state;

    return(
>>>>>>> 919998d0ec62ac95cafca691145f79119314ece9
      <div className="dashboard">
        <Header user_subjects={user.subjects} route={route} currsubject={currsubject} onSubChange={this.onSubChange} menuToggle={this.menuToggle} />
        <div className="dashboard-navbar-main">
          <NavBar show={sideDrawOpen} onRouteChange={this.onRouteChange} isstudent={true} />
          <DashBoardMain route={route} user={user} currsubject={currsubject} isstudent={true} />
        </div>
      </div>
    )
  }
}

export default App;
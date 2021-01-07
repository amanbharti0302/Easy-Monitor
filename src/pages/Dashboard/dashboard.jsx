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
      student: {
        subjects: ['HINDI','ENGLISH','MATHS','SCIENCE']
      },
      route: 'home',
      subject: 'ALL'
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
  onSubChange=(subject)=>{
    this.setState({
      subject: subject
    }) 
  }

  render(){
    //console.log(this.state);
    const {route,student,subject,sideDrawOpen}=this.state;
    return(
      <div className="dashboard">
          <Header student={student} route={route} subject={subject} onSubChange={this.onSubChange} menuToggle={this.menuToggle}/>
          <div className="dashboard-navbar-main">
            <NavBar show={sideDrawOpen} onRouteChange={this.onRouteChange}/>
            <DashBoardMain route={route} subjects={subject} student={student}/>
          </div>
      </div>
    )
  }
}

export default App;
import React,{Component} from 'react';
import Header from './components/dashboard-header/header.jsx';
import NavBar from './components/dashboard-navbar/navbar.jsx';
import DashBoard from './pages/dashboard-main/dashboard-main.jsx';
import './App.css';

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
      <div className="App">
          <Header student={student} route={route} subject={subject} onSubChange={this.onSubChange} menuToggle={this.menuToggle}/>
          <div className="dashboard">
            <NavBar show={sideDrawOpen} onRouteChange={this.onRouteChange}/>
            <DashBoard route={route} subjects={subject} student={student}/>
          </div>
      </div>
    )
  }
}

export default App;

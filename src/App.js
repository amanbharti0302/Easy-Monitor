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
      student: {},
      route: 'home',
      subject: 'Subjects'
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
    console.log(subject);
    this.setState({
      subject: subject
    }); 
  }

  render(){
    const {route,subject,sideDrawOpen}=this.state;
    return(
      <div className="App">
          <Header subject={subject} onSubChange={this.onSubChange} menuToggle={this.menuToggle}/>
          <div className="dashboard">
            <NavBar show={sideDrawOpen} changeRoute={this.onRouteChange}/>
            <DashBoard route={route} subject={subject}/>
          </div>
      </div>
    )
  }
}

export default App;
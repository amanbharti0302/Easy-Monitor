import React,{Component} from 'react';
import Header from './components/dashboard-header/header.jsx';
import NavBar from './components/dashboard-navbar/navbar.jsx';
import DashBoard from './pages/dashboard-main/dashboard-main.jsx';
import './App.css';

class App extends Component{
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

export default App;

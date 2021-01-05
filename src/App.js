import React,{Component} from 'react';
import Header from './components/header/header';
import NavBar from './components/navbar/navbar';
import DashBoard from './pages/dashboard-main/dashboard-main';
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

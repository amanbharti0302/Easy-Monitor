import React,{Component} from 'react';
import Header from '../../components/dashboard-header/header.jsx';
import NavBar from '../../components/dashboard-navbar/navbar.jsx';
import DashBoardMain from '../../components/dashboard-main/dashboard-main.jsx';
import './dashboard.css';

class App extends Component{
  constructor(props){
    console.log(props);
    super(props);
    this.state = {
      sideDrawOpen: false,
      user: {//this.props.users
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
    //const {type} = this.props;
    const type='teacher';
    const {route,user,currsubject,sideDrawOpen}=this.state;
    return(
      <div className="dashboard">
          <Header user_subjects={user.subjects} route={route} currsubject={currsubject} onSubChange={this.onSubChange} menuToggle={this.menuToggle}/>
          <div className="dashboard-navbar-main">
            <NavBar show={sideDrawOpen} onRouteChange={this.onRouteChange} isstudent={type==='student'}/>
            <DashBoardMain route={route} user={user} currsubject={currsubject} isstudent={type==='student'}/>
          </div>
      </div>
    )
  }
}

export default App;
import React,{Component} from 'react';
import Header from '../../components/dashboard-header/header.jsx';
import NavBar from '../../components/dashboard-navbar/navbar.jsx';
import DashBoardMain from '../../components/dashboard-main/dashboard-main.jsx';
import './dashboard.css';

class App extends Component{
  constructor(props){

    const coursearray = [];
    if(props.user&&props.user.course)props.user.course.map((el)=>{coursearray.push(el.coursecode);})

    super(props);
    this.state = {
      sideDrawOpen: false,
      user: {
        detail:props.user,
        subjects: coursearray
      },
      route: 'home',
      currsubject: 'course'
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
    const {type} = this.props;
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
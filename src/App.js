import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import FormPage from './pages/formpage/formpage';
import HomePage from './pages/HomePage/HomePage';
<<<<<<< HEAD
import DashBoard from './pages/Dashboard/dashboard.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
=======

>>>>>>> 919998d0ec62ac95cafca691145f79119314ece9



class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
<<<<<<< HEAD
          <Route exact path='/' component={HomePage} props />
          <Route exact path='/login-teacher' render={() => (<FormPage logintype={'teacher'} />)} />
          <Route exact path='/login-student' render={() => (<FormPage logintype={'student'} />)} />
=======
        <Route exact path='/' component={HomePage} props/>
        <Route exact path='/login-teacher' render={()=>(<FormPage logintype={'teacher'}  />)}/>
        <Route exact path='/login-student' render={()=>(<FormPage logintype={'student'} />)}/>
>>>>>>> 919998d0ec62ac95cafca691145f79119314ece9
        </Switch>
      </div>
    );
  }
}

export default App;




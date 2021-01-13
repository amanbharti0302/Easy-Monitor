import React,{Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import './App.css';
import FormPage from './pages/formpage/formpage';
import HomePage from './pages/HomePage/HomePage';




class App extends Component{
  render(){
    return(
      <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage} props/>
          <Route exact path='/login-teacher' render={()=>(<FormPage logintype={'teacher'} />)}/>
          <Route exact path='/login-student' render={()=>(<FormPage logintype={'student'} />)}/>
      </Switch>
      </div>
    );
  }
}

export default App;




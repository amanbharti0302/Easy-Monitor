import React,{Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import './App.css';
import FormPage from './pages/formpage/formpage';
import HomePage from './pages/HomePage/HomePage';



class App extends Component{
  constructor(){
    super();
    this.state={
      type:'',
      user:''
    }
  }

  componentDidMount(){

  }

  setuser(user,type){
    this.setState({type:type});
    this.setState({user:user});
  }

  render(){
    return(
      <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/login-teacher' render={()=>this.state.user?(<Redirect to='/'/>):(<FormPage logintype={'teacher'} setuser={this.setuser}/>)}/>
          <Route exact path='/login-student' render={()=>this.state.user?(<Redirect to='/'/>):(<FormPage logintype={'student'} setuser={this.setuser}/>)}/>
        </Switch>
      </div>
    )
  }
}

export default App;
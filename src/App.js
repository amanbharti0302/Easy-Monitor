import {Component} from 'react';
import Dashboard from './pages/Dashboard/dashboard.jsx';
import './App.css';

class App extends Component{
  render(){
    return(
      <div className="App">
          <Dashboard/>
      </div>
    )
  }
}

export default App;
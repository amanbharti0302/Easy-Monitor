import React,{Component} from 'react';

import DashBoard from './pages/Dashboard/dashboard.jsx';
import FormPage from './pages/formpage/formpage';
import './App.css';

class App extends Component{
  render(){
    return(
      <div className="App">
          <DashBoard/>
      </div>
    );
  }
}

export default App;
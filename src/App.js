import {Component} from 'react';

import FormPage from './pages/formpage/formpage';
import './App.css';

class App extends Component{
  render(){
    return(
      <div className="App">
          <FormPage />
      </div>
    )
  }
}

export default App;
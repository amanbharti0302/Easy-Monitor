import './App.css';

import Homepage from './pages/homepage/homepage.componenet';
import Navbar from './components/navbar/navbar.component';
import Footer from './components/footer/footer.component';

import {Switch,Route,Redirect} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
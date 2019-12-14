import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import Homepage from './components/Page/Homepage/Homepage';
const HatsPage= props =>(
  <div>
    <h1>Hats page</h1>
    
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path='/' component={Homepage}></Route>
     <Route path='/shop/hats' component={HatsPage}></Route>
      </Switch>
     
    </div>
  );
}

export default App;

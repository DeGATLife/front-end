import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import Homepage from './components/Page/Homepage/Homepage';
import Shop from './components/Page/Shop/Shop'


function App() {
  return (
    <div >
      <Switch>
      <Route exact path='/' component={Homepage}></Route>
     <Route path='/shop' component={Shop}></Route>
      </Switch>
     
    </div>
  );
}

export default App;

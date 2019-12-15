import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import Homepage from './components/Page/Homepage/Homepage';
import Shop from './components/Page/Shop/Shop'
import NavigationBar from './components/NavigationBar/NavigationBar'
import SignPage from './components/Page/SignPage/SignPage'
function App() {
  return (
    <div >
      <NavigationBar></NavigationBar>
      <Switch>
           <Route exact path='/' component={Homepage}></Route>
           <Route path='/shop' component={Shop}></Route>
           <Route path='/sign' component={SignPage}></Route>
      </Switch>
     
    </div>
  );
}

export default App;

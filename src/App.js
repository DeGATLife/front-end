import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import Homepage from './components/Page/Homepage/Homepage';
import Shop from './components/Page/Shop/Shop';
import NavigationBar from './components/NavigationBar/NavigationBar';
import SignPage from './components/Page/SignPage/SignPage';
import {auth,createUserProfileDocument} from './components/firebase/firebase.util';
class App extends React.Component{
constructor(){
  super();
  this.state={
    currentUser :null,
  }
}
unsubscribeFromAuth =null;
componentDidMount()
{
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
   if(userAuth){
     const userRef=await createUserProfileDocument(userAuth);
     userRef.onSnapshot(snapShot=>{
      this.setState({
        currentUser:{
          id :snapShot.id,
          ...snapShot.data()
        }
      },()=> {console.log(this.state);})
    })
 
   }
    this.setState({currentUser:userAuth});
  });
}
componentWillUnmount(){
  this.unsubscribeFromAuth();
}
render(){
  return (
    <div >
      <NavigationBar currentUser={this.state.currentUser}/>
      <Switch>
           <Route exact path='/' component={Homepage}></Route>
           <Route path='/shop' component={Shop}></Route>
           <Route path='/sign' component={SignPage}></Route>
      </Switch>
     
    </div>
  )
}
}

export default App;

import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import Homepage from './components/Page/Homepage/Homepage';
import Shop from './components/Page/Shop/Shop';
import NavigationBar from './components/NavigationBar/NavigationBar';
import SignPage from './components/Page/SignPage/SignPage';
import {auth,createUserProfileDocument} from './components/firebase/firebase.util';
import { setCurrentUser } from './redux/user/user.action';
import {connect} from 'react-redux';
class App extends React.Component{
unsubscribeFromAuth =null;
componentDidMount()
{ const{setCurrentUser}=this.props
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
   if(userAuth){
     const userRef=await createUserProfileDocument(userAuth);
     userRef.onSnapshot(snapShot=>{
      setCurrentUser({
          id :snapShot.id,
          ...snapShot.data()
        }
      )
    })
 
   }
    setCurrentUser(userAuth);
  });
}
componentWillUnmount(){
  this.unsubscribeFromAuth();
}
render(){
  return (
    <div >
      <NavigationBar />
      <Switch>
           <Route exact path='/' component={Homepage}></Route>
           <Route path='/shop' component={Shop}></Route>
           <Route path='/sign' component={SignPage}></Route>
      </Switch>
     
    </div>
  )
}
}
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(App);

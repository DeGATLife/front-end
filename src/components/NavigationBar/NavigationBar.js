import React from 'react';
import {Link} from 'react-router-dom';
import './NavigationBar.scss';
import {connect} from 'react-redux';
import {auth} from './../firebase/firebase.util';
import {ReactComponent as Logo} from './../../assets/crown.svg';
const NavigationBar = ({currentUser}) => (

	<div className='header'>
		<Link className='logo-container' to='/'>
            <Logo className='logo'></Logo>
		</Link>
		<div className='options'>
			<Link className='option' to='/shop'>Shop</Link>
			<Link className='option' to='/shop'>Contact</Link>
			{
			   currentUser ?
			   <div className='option' onClick={()=>auth.signOut()}>SignOut</div>
			   :
			   <Link className='option' to='/sign'>SignIn</Link>
			}
		</div>
	</div>
);
const mapStateToProps = state =>({
currentUser: state.user.currentUser
})
export default connect(mapStateToProps)(NavigationBar) ;

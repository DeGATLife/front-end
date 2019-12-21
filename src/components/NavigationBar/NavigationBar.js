import React from 'react';
import {Link} from 'react-router-dom';
import './NavigationBar.scss';
import {connect} from 'react-redux';
import {auth} from './../firebase/firebase.util';
import CardIcon from './../CardIcon/CardIcon';
import CartDropdown from './../CartDropdown/CartDropdown';
import {ReactComponent as Logo} from './../../assets/crown.svg';
const NavigationBar = ({currentUser,hidden}) => (

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
			<CardIcon/>
		</div>
		{hidden?null:<CartDropdown/>}
	</div>
);
const mapStateToProps = ({user: {currentUser},cart: {hidden}}) =>({
currentUser,
hidden
})
export default connect(mapStateToProps)(NavigationBar) ;

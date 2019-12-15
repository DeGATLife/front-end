import React from 'react';
import {Link} from 'react-router-dom';
import './NavigationBar.scss';
import {ReactComponent as Logo} from './../../assets/crown.svg';
const NavigationBar = () => (
	<div className='header'>
		<Link className='logo-container' to='/'>
            <Logo className='logo'></Logo>
		</Link>
		<div className='options'>
		    <Link className='option' to='/sign'>SignIn</Link>
			<Link className='option' to='/shop'>Shop</Link>
		</div>
	</div>
);

export default NavigationBar;

import React from 'react';
import './SignPage.scss';
import SignIn from './../../SignIn/SignIn';
import SignUp from './../../SignUp/SignUp';
const SignPage = props => (
	<div className='sign-in-and-sign-up'>
		<SignIn/>
		<SignUp/>
	</div>
);

export default SignPage;

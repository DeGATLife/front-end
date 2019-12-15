import React from 'react';
import PropTypes from 'prop-types';
import styles from './SignUp.scss';

const SignUp = props => (
	<div>This is a component called SignUp.</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class SignUp extends React.Component {
//   render() {
//     return <div>This is a component called SignUp.</div>;
//   }
// }

const SignUpPropTypes = {
	// always use prop types!
};

SignUp.propTypes = SignUpPropTypes;

export default SignUp;

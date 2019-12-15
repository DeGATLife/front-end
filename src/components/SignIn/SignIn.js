import React from 'react';
import './SignIn.scss';
import FormInput from './../FormInput/FormInput';
import CustomButton from './../CustomButton/CustomButton';
class SignIn extends React.Component {
	constructor(props)
	{
		super(props);
		this.state={
			email:' ',
			password:' '
		};
	} 
	handleSubmit = event =>{
		event.perventDefault();
		this.setState({email:'',password:''});
	} 
	handleChange = event =>{
		const {value,name}=event.target;
		this.setState({ [name] : value});
	}
	render() {
	return (
		<div className='sign-in'>
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={this.handleSubmit}> 
				<FormInput
				  name='email'
				  type='email'
				  value={this.state.email}
				  label="Email"
				  handleChange={this.handleChange}
				  required/>
				<FormInput name='password' 
						type='password'
						 label="Password"
						  handleChange={this.handleChange}
						   value={this.state.password}
						     required/>
				<CustomButton type="submit">SignIn</CustomButton>
			</form>
		</div>
	);
  }
}

export default SignIn;

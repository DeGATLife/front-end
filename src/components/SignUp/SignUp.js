import React from 'react';
import FormInput from './../FormInput/FormInput';
import CustomButton from './../CustomButton/CustomButton';
import {createUserProfileDocument, auth} from './../firebase/firebase.util';
import './SignUp.scss'; 
class SignUp extends React.Component {
	constructor(){
		super();
		this.state={
			email:'',
			displayName:'',
			password: '',
			confirmPassword: ''
		};
	}
	handleChange=event=>{
		const {name,value}=event.target;
		this.setState({[name]:value});
	}
	handleSubmit= async event=>{
	 event.preventDefault();
	  const {email,displayName,password,confirmPassword}=this.state;
	  if(password!=confirmPassword){
		  alert("password don't match");
		  return;
	  }
	  try{
		  
		   const {user}=await auth.createUserWithEmailAndPassword(email,password);
		 await createUserProfileDocument(user,{displayName});
		  this.setState({
			email:'',
			displayName:'',
			password: '',
			confirmPassword: ''
		  })
	  }catch(error){
          console.error(error);
	  }
	}
	render() {
		const {email,displayName,password,confirmPassword}=this.state;
    return (<div className='sign-up'>
		<h2 className='title'>I do not have accoount</h2>
		<span>Sign up with your email and password</span>
		<form className='sign-up-form' onSubmit={this.handleSubmit}>
			<FormInput type='text' 
			name='displayName'
			onChange={this.handleChange}
			  value={displayName}
			   label="Username" 
			   required/>
			<FormInput
				  name='email'
				  type='email'
				  value={email}
				  label="Email"
				  onChange={this.handleChange}
				  required/>

            <FormInput type='password' name='password' onChange={this.handleChange} value={password} label='Password' required/>
			<FormInput type='password' name='confirmPassword' onChange={this.handleChange} value={confirmPassword} label='Confirm Password' required/>
			<CustomButton type='submit'>Sign Up</CustomButton>
		</form>
	</div>);
  }
}

export default SignUp;

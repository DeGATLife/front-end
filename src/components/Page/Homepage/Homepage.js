import React from 'react';
import Directory from './../../Directory/Directory' 
import './Homepage.scss';
const Homepage = () => (
	<div className='homepage'>
 
        <Directory></Directory>
	  
	</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class Homepage extends React.Component {
//   render() {
//     return <div>This is a component called Homepage.</div>;
//   }
// }


export default Homepage;

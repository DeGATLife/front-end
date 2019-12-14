import React from 'react';
import './Menu_item.scss';

const Menu_item = ({title,imageUrl}) => (
	<div className='menu-item' style={
		{backgroundImage: `url(${imageUrl})`}}>
         <div className='content'>
             <h1 className='title'>{title}</h1>
			 <span className='subtitle'>Shop Now</span>
		 </div>
	   </div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class Menu_item extends React.Component {
//   render() {
//     return <div>This is a component called Menu_item.</div>;
//   }
// }

export default Menu_item;

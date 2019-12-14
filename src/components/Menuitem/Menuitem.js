import React from 'react';
import {withRouter} from 'react-router-dom';
import './Menuitem.scss';

const Menuitem = ({title,imageUrl,size,history,linkUrl,match}) => (
	<div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
		<div className='background-image'
		style={
			{backgroundImage: `url(${imageUrl})`}
		}
		/>
         <div className='content'>
             <h1 className='title'>{title.toUpperCase()}</h1>
			 <span className='subtitle'>Shop Now</span>
		 </div>
	   </div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class Menuitem extends React.Component {
//   render() {
//     return <div>This is a component called Menuitem.</div>;
//   }
// }


export default withRouter(Menuitem);

import React from 'react';
import ItemCollection from  './../ItemCollection/ItemCollection'
import './PreviewCollection.scss';

const PreviewCollection = ({title,items}) => (
	<div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
	  <div className='preview'>
		 {items.filter((item,idx)=>idx < 4)
		 .map(({id,...otherItemProps})=>(<ItemCollection key={id} {...otherItemProps}/>))}
	  </div>
	</div>
);

export default PreviewCollection;

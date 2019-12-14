import React from 'react';
import SHOP_DATA from './Shop.Data.js'
import './Shop.scss';
import PreviewCollection from './../../PreviewCollection/PreviewCollection'

class Shop extends React.Component {
	constructor(){
		super();
		this.state={
			collections: SHOP_DATA ,
		}
	}
  render() {
	  const {collections}=this.state;
	return (<div className='shop-page'>
		{collections.map(({id,...otherCollectionProps})=>( <PreviewCollection key={id} {...otherCollectionProps}></PreviewCollection>))
	}</div>);
  }
}

export default Shop;

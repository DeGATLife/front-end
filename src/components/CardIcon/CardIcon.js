import React from 'react';
import {ReactComponent as ShoppingIcon} from './../../assets/shopping-bag.svg';
import './CardIcon.scss';
import {connect} from 'react-redux';
import  { toggleCartHidden } from './../../redux/cart/cart.action';
const CardIcon = ({toggleCartHidden,itemCount}) => (
	<div className="cart-icon">
       <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden}/>
	   <span className='item-count'>{itemCount}</span>
	</div>
);
const mapDispatchToProps = dispatch=>({
	toggleCartHidden: ()=>dispatch(toggleCartHidden())
})
const mapSteteToProps=({cart:{cartItems}})=>({
	itemCount: cartItems.reduce(
		(accumalatedQuantity,cartItem)=>accumalatedQuantity+cartItem.quantity,0
	)
})
export default  connect(mapSteteToProps,mapDispatchToProps)(CardIcon);

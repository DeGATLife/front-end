import React from 'react';
import { shallow, render, mount } from 'enzyme';
import CartItem from './CartItem';

describe('CartItem', () => {
  let props;
  let shallowCartItem;
  let renderedCartItem;
  let mountedCartItem;

  const shallowTestComponent = () => {
    if (!shallowCartItem) {
      shallowCartItem = shallow(<CartItem {...props} />);
    }
    return shallowCartItem;
  };

  const renderTestComponent = () => {
    if (!renderedCartItem) {
      renderedCartItem = render(<CartItem {...props} />);
    }
    return renderedCartItem;
  };

  const mountTestComponent = () => {
    if (!mountedCartItem) {
      mountedCartItem = mount(<CartItem {...props} />);
    }
    return mountedCartItem;
  };  

  beforeEach(() => {
    props = {};
    shallowCartItem = undefined;
    renderedCartItem = undefined;
    mountedCartItem = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});

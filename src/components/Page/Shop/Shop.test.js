import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Shop from './Shop';

describe('Shop', () => {
  let props;
  let shallowShop;
  let renderedShop;
  let mountedShop;

  const shallowTestComponent = () => {
    if (!shallowShop) {
      shallowShop = shallow(<Shop {...props} />);
    }
    return shallowShop;
  };

  const renderTestComponent = () => {
    if (!renderedShop) {
      renderedShop = render(<Shop {...props} />);
    }
    return renderedShop;
  };

  const mountTestComponent = () => {
    if (!mountedShop) {
      mountedShop = mount(<Shop {...props} />);
    }
    return mountedShop;
  };  

  beforeEach(() => {
    props = {};
    shallowShop = undefined;
    renderedShop = undefined;
    mountedShop = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});

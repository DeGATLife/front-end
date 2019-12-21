import React from 'react';
import { shallow, render, mount } from 'enzyme';
import CartDropdown from './CartDropdown';

describe('CartDropdown', () => {
  let props;
  let shallowCartDropdown;
  let renderedCartDropdown;
  let mountedCartDropdown;

  const shallowTestComponent = () => {
    if (!shallowCartDropdown) {
      shallowCartDropdown = shallow(<CartDropdown {...props} />);
    }
    return shallowCartDropdown;
  };

  const renderTestComponent = () => {
    if (!renderedCartDropdown) {
      renderedCartDropdown = render(<CartDropdown {...props} />);
    }
    return renderedCartDropdown;
  };

  const mountTestComponent = () => {
    if (!mountedCartDropdown) {
      mountedCartDropdown = mount(<CartDropdown {...props} />);
    }
    return mountedCartDropdown;
  };  

  beforeEach(() => {
    props = {};
    shallowCartDropdown = undefined;
    renderedCartDropdown = undefined;
    mountedCartDropdown = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});

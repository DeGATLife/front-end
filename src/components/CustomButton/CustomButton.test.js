import React from 'react';
import { shallow, render, mount } from 'enzyme';
import CustomButton from './CustomButton';

describe('CustomButton', () => {
  let props;
  let shallowCustomButton;
  let renderedCustomButton;
  let mountedCustomButton;

  const shallowTestComponent = () => {
    if (!shallowCustomButton) {
      shallowCustomButton = shallow(<CustomButton {...props} />);
    }
    return shallowCustomButton;
  };

  const renderTestComponent = () => {
    if (!renderedCustomButton) {
      renderedCustomButton = render(<CustomButton {...props} />);
    }
    return renderedCustomButton;
  };

  const mountTestComponent = () => {
    if (!mountedCustomButton) {
      mountedCustomButton = mount(<CustomButton {...props} />);
    }
    return mountedCustomButton;
  };  

  beforeEach(() => {
    props = {};
    shallowCustomButton = undefined;
    renderedCustomButton = undefined;
    mountedCustomButton = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});

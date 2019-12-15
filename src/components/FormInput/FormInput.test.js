import React from 'react';
import { shallow, render, mount } from 'enzyme';
import FormInput from './FormInput';

describe('FormInput', () => {
  let props;
  let shallowFormInput;
  let renderedFormInput;
  let mountedFormInput;

  const shallowTestComponent = () => {
    if (!shallowFormInput) {
      shallowFormInput = shallow(<FormInput {...props} />);
    }
    return shallowFormInput;
  };

  const renderTestComponent = () => {
    if (!renderedFormInput) {
      renderedFormInput = render(<FormInput {...props} />);
    }
    return renderedFormInput;
  };

  const mountTestComponent = () => {
    if (!mountedFormInput) {
      mountedFormInput = mount(<FormInput {...props} />);
    }
    return mountedFormInput;
  };  

  beforeEach(() => {
    props = {};
    shallowFormInput = undefined;
    renderedFormInput = undefined;
    mountedFormInput = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});

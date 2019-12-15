import React from 'react';
import { shallow, render, mount } from 'enzyme';
import SignUp from './SignUp';

describe('SignUp', () => {
  let props;
  let shallowSignUp;
  let renderedSignUp;
  let mountedSignUp;

  const shallowTestComponent = () => {
    if (!shallowSignUp) {
      shallowSignUp = shallow(<SignUp {...props} />);
    }
    return shallowSignUp;
  };

  const renderTestComponent = () => {
    if (!renderedSignUp) {
      renderedSignUp = render(<SignUp {...props} />);
    }
    return renderedSignUp;
  };

  const mountTestComponent = () => {
    if (!mountedSignUp) {
      mountedSignUp = mount(<SignUp {...props} />);
    }
    return mountedSignUp;
  };  

  beforeEach(() => {
    props = {};
    shallowSignUp = undefined;
    renderedSignUp = undefined;
    mountedSignUp = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});

import React from 'react';
import { shallow, render, mount } from 'enzyme';
import SignIn from './SignIn';

describe('SignIn', () => {
  let props;
  let shallowSignIn;
  let renderedSignIn;
  let mountedSignIn;

  const shallowTestComponent = () => {
    if (!shallowSignIn) {
      shallowSignIn = shallow(<SignIn {...props} />);
    }
    return shallowSignIn;
  };

  const renderTestComponent = () => {
    if (!renderedSignIn) {
      renderedSignIn = render(<SignIn {...props} />);
    }
    return renderedSignIn;
  };

  const mountTestComponent = () => {
    if (!mountedSignIn) {
      mountedSignIn = mount(<SignIn {...props} />);
    }
    return mountedSignIn;
  };  

  beforeEach(() => {
    props = {};
    shallowSignIn = undefined;
    renderedSignIn = undefined;
    mountedSignIn = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});

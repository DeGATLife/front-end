import React from 'react';
import { shallow, render, mount } from 'enzyme';
import SignPage from './SignPage';

describe('SignPage', () => {
  let props;
  let shallowSignPage;
  let renderedSignPage;
  let mountedSignPage;

  const shallowTestComponent = () => {
    if (!shallowSignPage) {
      shallowSignPage = shallow(<SignPage {...props} />);
    }
    return shallowSignPage;
  };

  const renderTestComponent = () => {
    if (!renderedSignPage) {
      renderedSignPage = render(<SignPage {...props} />);
    }
    return renderedSignPage;
  };

  const mountTestComponent = () => {
    if (!mountedSignPage) {
      mountedSignPage = mount(<SignPage {...props} />);
    }
    return mountedSignPage;
  };  

  beforeEach(() => {
    props = {};
    shallowSignPage = undefined;
    renderedSignPage = undefined;
    mountedSignPage = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});

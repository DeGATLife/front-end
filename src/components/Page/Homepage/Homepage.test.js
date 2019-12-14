import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Homepage from './Homepage';

describe('Homepage', () => {
  let props;
  let shallowHomepage;
  let renderedHomepage;
  let mountedHomepage;

  const shallowTestComponent = () => {
    if (!shallowHomepage) {
      shallowHomepage = shallow(<Homepage {...props} />);
    }
    return shallowHomepage;
  };

  const renderTestComponent = () => {
    if (!renderedHomepage) {
      renderedHomepage = render(<Homepage {...props} />);
    }
    return renderedHomepage;
  };

  const mountTestComponent = () => {
    if (!mountedHomepage) {
      mountedHomepage = mount(<Homepage {...props} />);
    }
    return mountedHomepage;
  };  

  beforeEach(() => {
    props = {};
    shallowHomepage = undefined;
    renderedHomepage = undefined;
    mountedHomepage = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});

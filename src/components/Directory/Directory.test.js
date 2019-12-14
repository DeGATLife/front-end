import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Directory from './Directory';

describe('Directory', () => {
  let props;
  let shallowDirectory;
  let renderedDirectory;
  let mountedDirectory;

  const shallowTestComponent = () => {
    if (!shallowDirectory) {
      shallowDirectory = shallow(<Directory {...props} />);
    }
    return shallowDirectory;
  };

  const renderTestComponent = () => {
    if (!renderedDirectory) {
      renderedDirectory = render(<Directory {...props} />);
    }
    return renderedDirectory;
  };

  const mountTestComponent = () => {
    if (!mountedDirectory) {
      mountedDirectory = mount(<Directory {...props} />);
    }
    return mountedDirectory;
  };  

  beforeEach(() => {
    props = {};
    shallowDirectory = undefined;
    renderedDirectory = undefined;
    mountedDirectory = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});

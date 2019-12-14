import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ItemCollection from './ItemCollection';

describe('ItemCollection', () => {
  let props;
  let shallowItemCollection;
  let renderedItemCollection;
  let mountedItemCollection;

  const shallowTestComponent = () => {
    if (!shallowItemCollection) {
      shallowItemCollection = shallow(<ItemCollection {...props} />);
    }
    return shallowItemCollection;
  };

  const renderTestComponent = () => {
    if (!renderedItemCollection) {
      renderedItemCollection = render(<ItemCollection {...props} />);
    }
    return renderedItemCollection;
  };

  const mountTestComponent = () => {
    if (!mountedItemCollection) {
      mountedItemCollection = mount(<ItemCollection {...props} />);
    }
    return mountedItemCollection;
  };  

  beforeEach(() => {
    props = {};
    shallowItemCollection = undefined;
    renderedItemCollection = undefined;
    mountedItemCollection = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});

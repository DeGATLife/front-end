import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Menu_item from './Menu_item';

describe('Menu_item', () => {
  let props;
  let shallowMenu_item;
  let renderedMenu_item;
  let mountedMenu_item;

  const shallowTestComponent = () => {
    if (!shallowMenu_item) {
      shallowMenu_item = shallow(<Menu_item {...props} />);
    }
    return shallowMenu_item;
  };

  const renderTestComponent = () => {
    if (!renderedMenu_item) {
      renderedMenu_item = render(<Menu_item {...props} />);
    }
    return renderedMenu_item;
  };

  const mountTestComponent = () => {
    if (!mountedMenu_item) {
      mountedMenu_item = mount(<Menu_item {...props} />);
    }
    return mountedMenu_item;
  };  

  beforeEach(() => {
    props = {};
    shallowMenu_item = undefined;
    renderedMenu_item = undefined;
    mountedMenu_item = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});

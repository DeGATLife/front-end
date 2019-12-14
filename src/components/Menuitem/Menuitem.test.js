import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Menuitem from './Menuitem';

describe('Menuitem', () => {
  let props;
  let shallowMenuitem;
  let renderedMenuitem;
  let mountedMenuitem;

  const shallowTestComponent = () => {
    if (!shallowMenuitem) {
      shallowMenuitem = shallow(<Menuitem {...props} />);
    }
    return shallowMenuitem;
  };

  const renderTestComponent = () => {
    if (!renderedMenuitem) {
      renderedMenuitem = render(<Menuitem {...props} />);
    }
    return renderedMenuitem;
  };

  const mountTestComponent = () => {
    if (!mountedMenuitem) {
      mountedMenuitem = mount(<Menuitem {...props} />);
    }
    return mountedMenuitem;
  };  

  beforeEach(() => {
    props = {};
    shallowMenuitem = undefined;
    renderedMenuitem = undefined;
    mountedMenuitem = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});

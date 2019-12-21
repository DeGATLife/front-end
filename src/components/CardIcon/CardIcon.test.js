import React from 'react';
import { shallow, render, mount } from 'enzyme';
import CardIcon from './CardIcon';

describe('CardIcon', () => {
  let props;
  let shallowCardIcon;
  let renderedCardIcon;
  let mountedCardIcon;

  const shallowTestComponent = () => {
    if (!shallowCardIcon) {
      shallowCardIcon = shallow(<CardIcon {...props} />);
    }
    return shallowCardIcon;
  };

  const renderTestComponent = () => {
    if (!renderedCardIcon) {
      renderedCardIcon = render(<CardIcon {...props} />);
    }
    return renderedCardIcon;
  };

  const mountTestComponent = () => {
    if (!mountedCardIcon) {
      mountedCardIcon = mount(<CardIcon {...props} />);
    }
    return mountedCardIcon;
  };  

  beforeEach(() => {
    props = {};
    shallowCardIcon = undefined;
    renderedCardIcon = undefined;
    mountedCardIcon = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});

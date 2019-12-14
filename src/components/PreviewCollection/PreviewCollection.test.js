import React from 'react';
import { shallow, render, mount } from 'enzyme';
import PreviewCollection from './PreviewCollection';

describe('PreviewCollection', () => {
  let props;
  let shallowPreviewCollection;
  let renderedPreviewCollection;
  let mountedPreviewCollection;

  const shallowTestComponent = () => {
    if (!shallowPreviewCollection) {
      shallowPreviewCollection = shallow(<PreviewCollection {...props} />);
    }
    return shallowPreviewCollection;
  };

  const renderTestComponent = () => {
    if (!renderedPreviewCollection) {
      renderedPreviewCollection = render(<PreviewCollection {...props} />);
    }
    return renderedPreviewCollection;
  };

  const mountTestComponent = () => {
    if (!mountedPreviewCollection) {
      mountedPreviewCollection = mount(<PreviewCollection {...props} />);
    }
    return mountedPreviewCollection;
  };  

  beforeEach(() => {
    props = {};
    shallowPreviewCollection = undefined;
    renderedPreviewCollection = undefined;
    mountedPreviewCollection = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});

/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ExtDetails from '../client/components/ExtDetails';

const extDetails = {
  sales: 400,
  availability: true,
  description: 'A description',
};

describe('extDetails render', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ExtDetails extDetails={extDetails} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('onClick', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ExtDetails extDetails={extDetails} />);
  });
  test('should change state when details collap is clicked', () => {
    const event = {
      target: {
        className: 'detailsCollapsible',
      },
    };
    const instance = wrapper.instance();
    jest.spyOn(instance, 'collapseOnClick');
    instance.collapseOnClick(event);
    expect(wrapper.state('detailsClicked')).toEqual(false);
  });
  test('should change state when description collap is clicked', () => {
    const event = {
      target: {
        className: 'descriptionCollapsible',
      },
    };
    const instance = wrapper.instance();
    jest.spyOn(instance, 'collapseOnClick');
    instance.collapseOnClick(event);
    expect(wrapper.state('descriptionClicked')).toEqual(false);
  });
  test('should change state when shipping collap is clicked', () => {
    const event = {
      target: {
        className: 'shippingCollapsible',
      },
    };
    const instance = wrapper.instance();
    jest.spyOn(instance, 'collapseOnClick');
    instance.collapseOnClick(event);
    expect(wrapper.state('shippingClicked')).toEqual(false);
  });
  test('should change state when description button is clicked for content hide', () => {
    const event = {
      target: {
        className: 'descriptionButton',
      },
    };
    const instance = wrapper.instance();
    jest.spyOn(instance, 'collapseOnClick');
    instance.collapseOnClick(event);
    expect(wrapper.state('descriptionExpand')).toEqual('contentExpand');
  });
  test('should change state when description button is clicked for content expand', () => {
    const event = {
      target: {
        className: 'descriptionButton',
      },
    };
    const instance = wrapper.instance();
    jest.spyOn(instance, 'collapseOnClick');
    instance.collapseOnClick(event);
    instance.collapseOnClick(event);
    expect(wrapper.state('shader')).toEqual('shaderOn');
  });
  test('should change state on random classname', () => {
    const event = {
      target: {
        className: 'aButton',
      },
    };
    const instance = wrapper.instance();
    instance.collapseOnClick(event);
    expect(wrapper.state('detailsClicked')).toBe(true);
    expect(wrapper.state('descriptionClicked')).toBe(true);
    expect(wrapper.state('shippingClicked')).toBe(true);
    expect(wrapper.state('descriptionExpand')).toEqual('contentHide');
    expect(wrapper.state('shader')).toEqual('shaderOn');
    expect(wrapper.state('expandButtonContent')).toEqual('Learn more about this item');
  });
});

const extDetails2 = {
  sales: 100,
  availability: true,
  description: 'A description',
};

const wrapper2 = mount(<ExtDetails extDetails={extDetails2} />);

describe('Low sales', () => {
  test('should not render an icon on low sales', () => {
    expect(wrapper2.find('.inline-svg-1').exists()).toBeFalsy();
    expect(wrapper2.find('.inline-svg-2').exists()).toBeFalsy();
  });
});

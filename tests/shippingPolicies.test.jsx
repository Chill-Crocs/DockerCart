/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ShippingPolicies from '../client/components/ShippingPolicies';

const shopPolicy = {
  lastUpdated: '2013-02-08',
  returns: false,
  noReturnTypes: ['broken', 'chicken'],
  showModal: () => {},
};

const wrapper = shallow(
  <ShippingPolicies shopPolicy={shopPolicy} />,
);

describe('Shipping Policies Render', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(<ShippingPolicies shopPolicy={shopPolicy} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Map Return Types', () => {
  test('should correctly map return types', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'getReturnTypes');
    instance.getReturnTypes();
    expect(instance.getReturnTypes).toHaveBeenCalledTimes(1);
  });
});

describe('Collapse Click', () => {
  test('should have a collapse button that works', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'collapseOnClick');
    instance.collapseOnClick();
    expect(instance.collapseOnClick).toHaveBeenCalledTimes(1);
  });
});

describe('Get Exchanges', () => {
  test('should have a function getExchanges', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'getExchanges');
    instance.getExchanges();
    expect(instance.getExchanges).toHaveBeenCalledTimes(1);
  });
});

const shopPolicy2 = {
  lastUpdated: '2013-02-08',
  returns: true,
  noReturnTypes: [],
};

const wrapper2 = mount(
  <ShippingPolicies shopPolicy={shopPolicy2} />,
);

describe('Map Return Types', () => {
  test('should correctly map return types', () => {
    const instance = wrapper2.instance();
    jest.spyOn(instance, 'getReturnTypes');
    instance.getReturnTypes();
    expect(instance.getReturnTypes).toHaveBeenCalledTimes(1);
  });
});

describe('Collapse Click', () => {
  test('should have a collapse button that works', () => {
    const instance = wrapper2.instance();
    wrapper2.setState({ descriptionExpand: 'policyContentExpand' });
    jest.spyOn(instance, 'collapseOnClick');
    instance.collapseOnClick();
    expect(wrapper2.state('descriptionExpand')).toEqual('policyContentHide');
  });
  test('should change state when collapse button is clicked', () => {
    const instance = wrapper2.instance();
    wrapper2.find('.descriptionButton').simulate('click');
    expect(wrapper2.state('expandButtonContent')).toEqual('Less');
  });
});

describe('Get Exchanges', () => {
  test('should have a function that returns back the return conditions or returns nothing if returns are not allowed', () => {
    const instance = wrapper.instance();
    const instance2 = wrapper2.instance();
    instance.getExchanges();
    instance2.getExchanges();
    expect(wrapper.find('.policyContainer').exists()).toBeFalsy();
    expect(wrapper2.find('.policyContainer').exists()).toBeTruthy();
  });
});

describe('Default Props', () => {
  test('should have default prop showModal', () => {
    expect(ShippingPolicies.defaultProps.showModal).toBeDefined();
  });
});

/* eslint-disable func-names */
/* eslint-disable object-shorthand */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from 'react';
import { shallow } from 'enzyme';
import ShippingCost from '../client/components/ShippingCost';

const wrapper = mount(
  <ShippingCost />,
);

describe('ShippingCostCost render', () => {
  test('should have correct state', () => {
    expect(wrapper).toHaveState('expand');
  });
});

describe('Expand collapsible', () => {
  test('should expand collapsible on click', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'onExpand');
    instance.onExpand();
    expect(instance.onExpand).toHaveBeenCalledTimes(1);
  });
});

describe('Form Submit', () => {
  const e = {
    preventDefault: function () {},
  };
  test('should have a form submission', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'onFormSubmit');
    instance.onFormSubmit(e);
    expect(instance.onFormSubmit).toHaveBeenCalledTimes(1);
  });
});

describe('Get Cost', () => {
  test('should be able to change cost', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'onGetCost');
    instance.onGetCost();
    expect(instance.onGetCost).toHaveBeenCalledTimes(1);
  });
});

describe('Zip Change', () => {
  const e = {
    target: {
      value: '',
    },
  };
  test('should have a zipcode change listener', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'onZipChange');
    instance.onZipChange(e);
    expect(instance.onZipChange).toHaveBeenCalledTimes(1);
  });
});

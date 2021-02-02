/* eslint-disable object-shorthand */
/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from 'react';
import { shallow } from 'enzyme';
import Seller from '../client/components/Seller';

window.HTMLElement.prototype.scrollIntoView = function () {};
const messageBox = [];

const wrapper = mount(
  <Seller />,
);

describe('Seller Functions', () => {
  const e = {
    preventDefault: function () {},
    keyCode: 13,
    shiftKey: false,
    target: {
      value: '',
    },
  };
  const e2 = {
    preventDefault: function () {},
    keyCode: 10,
    shiftKey: true,
    target: {
      value: '',
    },
  };
  test('should have a submit form function', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'onFormSubmit');
    instance.onFormSubmit(e);
    expect(instance.onFormSubmit).toHaveBeenCalledTimes(1);
  });
  test('should have a enter button listener', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'onEnterPress');
    instance.onEnterPress(e);
    expect(instance.onEnterPress).toHaveBeenCalledTimes(1);
  });
  test('should have a enter button listener that returns nothing on non-enter', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'onEnterPress');
    instance.onEnterPress(e2);
    expect(instance.onEnterPress).toHaveBeenCalledTimes(2);
  });
  test('should have a on change listener', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'onChange');
    instance.onChange(e);
    expect(instance.onChange).toHaveBeenCalledTimes(1);
  });
  test('should have a collapse click function', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'collapseOnClick');
    instance.collapseOnClick();
    expect(instance.collapseOnClick).toHaveBeenCalledTimes(1);
  });
  test('should have a modal click function', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'modalOnClick');
    instance.modalOnClick();
    expect(instance.modalOnClick).toHaveBeenCalledTimes(1);
  });
});

describe('Seller Buttons', () => {
  test('should pop modal on click', () => {
    const instance = wrapper.instance();
    wrapper.find('.extDetailBuyButton').simulate('click');
    expect(wrapper.state('messageModal')).toEqual('hide');
  });
  test('should collapse the policy on click', () => {
    const instance = wrapper.instance();
    wrapper.find('.sellerCollapsible').simulate('click');
    expect(wrapper.state('policyCollap')).toEqual('sellerBox');
  });
});

/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from 'react';
import { shallow } from 'enzyme';
import Info from '../client/components/Info';

const info = {
  tags: ['Practical', 'Rustic', 'Refined', 'Intelligent'],
  price: 400,
  availability: true,
};

describe('Info render', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Info info={info} />);
  });
  test('should have the correct tags in the tags list', () => {
    expect(wrapper.find('.tagList')).toIncludeText('Practical');
    expect(wrapper.find('.tagList')).toIncludeText('Rustic');
    expect(wrapper.find('.tagList')).toIncludeText('Refined');
    expect(wrapper.find('.tagList')).not.toIncludeText('HelloWorld');
  });
  test('should render the price correctly', () => {
    expect(wrapper.find('.price')).toHaveText('$4.00');
    expect(wrapper.find('.price')).not.toHaveText('$5.00');
  });
  test('should render the availability correctly', () => {
    expect(wrapper.find('.check')).toHaveText(' In Stock');
    expect(wrapper.find('.check')).not.toHaveText('Only 1 Left!');
  });
});

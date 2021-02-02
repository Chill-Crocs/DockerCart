/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from 'react';
import { shallow } from 'enzyme';
import Selector from '../client/components/Selector';

const selectors = [
  {
    name: 'Color',
    options: ['Blue', 'Red', 'Green'],
  },
  {
    name: 'Size',
    options: ['Small', 'Medium', 'Large'],
  },
];

const wrapper = mount(<Selector selectors={selectors} />);

describe('Selector render', () => {
  test('should have all the options in the options list', () => {
    expect(wrapper.find('.optionsBox00')).toIncludeText('Blue');
    expect(wrapper.find('.optionsBox02')).toIncludeText('Green');
    expect(wrapper.find('.optionsBox11')).toIncludeText('Medium');
    expect(wrapper.find('.optionsBox10')).not.toIncludeText('Large');
  });
  test('should have all the types of selectors', () => {
    expect(wrapper.find('.optionsName0')).toIncludeText('Color');
    expect(wrapper.find('.optionsName1')).toIncludeText('Size');
    expect(wrapper.find('.optionsName0')).not.toIncludeText('Quantity');
  });
});

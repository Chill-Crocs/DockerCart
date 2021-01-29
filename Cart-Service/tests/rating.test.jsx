/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from 'react';
import { mount, shallow } from 'enzyme';
import Rating from '../client/components/Rating';

const rating = {
  name: 'hello',
  sales: -1,
  stars: -1,
};

const rating2 = {
  name: 'hello',
  sales: -1,
  stars: 1.6,
};

const rating3 = {
  name: 'hello',
  sales: -1,
  stars: 1.2,
};

const wrapper = mount(<Rating rating={rating} />);

describe('Rating render', () => {
  test('should have the correct tags', () => {
    expect(wrapper.find('span')).toExist();
    expect(wrapper.find('ul')).not.toExist();
  });
});

const wrapper2 = mount(<Rating rating={rating2} />);
const wrapper3 = mount(<Rating rating={rating3} />);
describe('Rating stars', () => {
  test('should render different stars for different ratings', () => {
    expect(wrapper2.find('span')).toExist();
    expect(wrapper3.find('span')).toExist();
  });
});

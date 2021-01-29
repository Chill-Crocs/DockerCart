/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import Messages from '../client/components/Messages';

const timeNow = moment();
const timeLater = moment().add(7, 'd');

const messages = [{ message: 'hey', time: timeNow }, { message: 'hey', time: timeNow }];

window.HTMLElement.prototype.scrollIntoView = function () { };

const wrapper = mount(<Messages messageBox={messages} />);

describe('Messages render', () => {
  test('should have all the messages in the options list', () => {
    expect(wrapper.find('.messagesContainer')).toExist();
  });
});

const messages2 = [{ message: 'hey', time: timeNow }, { message: 'hey', time: timeLater }];

const wrapper2 = mount(<Messages messageBox={messages2} />);

describe('Messages render', () => {
  test('should have all the messages in the options list and renders two different times', () => {
    expect(wrapper2.find('.messagesContainer')).toExist();
  });
});

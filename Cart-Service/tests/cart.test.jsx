/* eslint-disable arrow-body-style */
/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from 'react';
import { mount, shallow } from 'enzyme';
import axios from 'axios';
import 'regenerator-runtime/runtime';
import Cart from '../client/components/Cart';
import Rating from '../client/components/Rating';
import Info from '../client/components/Info';
import Selector from '../client/components/Selector';
import ExtDetails from '../client/components/ExtDetails';

window.HTMLElement.prototype.scrollIntoView = function () { };

const wrapper = mount(<Cart />);

describe('App render', () => {
  test('should have correct state', () => {
    expect(wrapper).toHaveState('rating');
    expect(wrapper).toHaveState('info');
    expect(wrapper).toHaveState('selectors');
    expect(wrapper).toHaveState('shipping');
    expect(wrapper).toHaveState('shopPolicy');
    expect(wrapper).toHaveState('seller');
    expect(wrapper).toHaveState('userZip');
    expect(wrapper).toHaveState('distance');
  });
});

describe('Render props', () => {
  test('should have required props', () => {
    expect(wrapper.find(Rating)).toHaveProp('rating');
    expect(wrapper.find(Info)).toHaveProp('info');
    expect(wrapper.find(Selector)).toHaveProp('selectors');
    expect(wrapper.find(ExtDetails)).toHaveProp('extDetails');
  });
});

describe('Component Did Mount', () => {
  test('should send multiple get requests', async () => {
    const resp = {
      data: {
        rating: {
          name: 'Roob and Sons',
          sales: 980,
          stars: 4,
        },
        info: {
          tags: [
            'Generic',
            'Intelligent',
            'Gorgeous',
          ],
          price: 284,
          availability: true,
        },
        extDetails: {
          description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design\nErgonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support\nNew ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
        },
        shipping: {
          origin: {
            latitude: '47.839958190918',
            longitude: '-122.206146240234',
          },
          exchanges: false,
        },
        shopPolicy: {
          noReturnTypes: [
            'Custom or personalized orders',
            'Items on sale',
          ],
          lastUpdated: 'Tue Sep 29 2020 20:00:23 GMT-0700 (Pacific Daylight Time)',
          returns: false,
        },
        seller: {
          name: 'Sadie Halvorson',
          role: 'Regional Metrics Officer',
        },
        _id: 50,
        selectors: [
          {
            options: [
              'blue',
            ],
            _id: '6008e1f3c980890c74dafdbe',
            name: 'Cotton',
          },
          {
            options: [
              'salmon',
              'cyan',
              'blue',
              'violet',
            ],
            _id: '6008e1f3c980890c74dafdbf',
            name: 'Plastic',
          },
        ],
        __v: 0,
      },
    };
    const resp2 = {
      data: {
        resourceSets: [{
          resources: [{
            geocodePoints: [{
              coordinates: ['47.839958190918', '-122.206146240234'],
            }],
          }],
        }],
      },
    };
    const resp3 = {
      data: {
        resourceSets: [{
          resources: [{
            results: [{
              travelDuration: 200,
            }],
          }],
        }],
      },
    };
    const resp4 = {
      data: {
        resourceSets: [{
          resources: [{
            results: [{
              travelDuration: 2000,
            }],
          }],
        }],
      },
    };

    const getSpySuccess = jest.spyOn(axios, 'get')
      .mockResolvedValueOnce(resp)
      .mockResolvedValueOnce(resp2)
      .mockResolvedValueOnce(resp3);
    await wrapper.instance().componentDidMount();
    expect(getSpySuccess).toHaveBeenCalledTimes(2);

    const getSpySuccess2 = jest.spyOn(axios, 'get')
      .mockResolvedValueOnce(resp)
      .mockResolvedValueOnce(resp2)
      .mockResolvedValueOnce(resp4);
    await wrapper.update();
    expect(getSpySuccess2).toHaveBeenCalledTimes(3);
  });
});

describe('Change Zip', () => {
  test('change zipcode', () => {
    const instance = wrapper.instance();
    instance.changeZip('33158');
    expect(wrapper.state('userZip')).toEqual('33158');
  });
});

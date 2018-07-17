import React from 'react';
import CurrencyHeaderComponent from './currencyHeaderComponent';
import { shallow } from 'enzyme';

describe('CurrencyCardComponenent Component', () => {
    it('Should be rendered without throwing an error', () => {
        expect(shallow(<CurrencyHeaderComponent />).find('div').exists()).toBe(true);
    });
  });
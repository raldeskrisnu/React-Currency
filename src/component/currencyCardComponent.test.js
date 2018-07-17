import React from 'react';
import CurrencyCardComponenent from './currencyCardComponent';
import { shallow } from 'enzyme';

describe('CurrencyCardComponenent Component', () => {
    it('Should be rendered without throwing an error', () => {
        expect(shallow(<CurrencyCardComponenent />).find('div').exists()).toBe(true);
    });
  });
import React from 'react';
import Content from './header';
import { shallow } from 'enzyme';

describe('Header Container', () => {
    it('Should be rendered without throwing an error', () => {
        expect(shallow(<Content />).find('div').exists()).toBe(true)
    });
  });
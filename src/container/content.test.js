import React from 'react';
import Content from './content';
import { shallow } from 'enzyme';

describe('Content Container', () => {
    it('Should be rendered without throwing an error', () => {
        expect(shallow(<Content />).find('div').exists()).toBe(true)
    });
  });
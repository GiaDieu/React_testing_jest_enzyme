import React from 'react';
import { shallow } from 'enzyme';

import Congrats from './Congrats';
import { checkProps, findByTestAttr } from '../../test/testUtils';

const defaultProps = { success: false };

/**
 * Factory function to create a shallowWrapper for the Congrats Component
 * @function setup
 * @param {object} props
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
  const expectedProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...expectedProps} />);
};

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});

test('renders no text when `success` when prop is false', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});

test('renders non-empty congrats message when `success` when prop is true', () => {
  const wrapper = setup({ success: true });
  const component = findByTestAttr(wrapper, 'congrats-message');
  expect(component.text().length).not.toBe(0);
});

test('does not throw a warning with expected props', () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});

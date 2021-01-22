import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';
import rootReducer from '../reducers';

/**
 * Create a testing store with imported reducers, middleware,and initial state
 * Global: rootReducer
 * @param {object} initialState
 * @function storeFactory
 * @returns {store} redux-store
 */
export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
};

/**
 * Return node(s) with given data-test attribute
 * @param {shalloWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} val - Value of data-test attribute for search
 * @returns {shallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

export const checkProps = (component, conformingProps) => {
  const errorProp = checkPropTypes(
    // eslint-disable-next-line react/forbid-foreign-prop-types
    component.propTypses,
    conformingProps,
    'prop',
    component.name,
  );
  expect(errorProp).toBeUndefined();
};

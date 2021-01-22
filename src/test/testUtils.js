import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { middlewares } from '../configureStore';

/**
 * Create a testing store with imported reducers, middleware,and initial state
 * Global: rootReducer
 * @param {object} initialState
 * @function storeFactory
 * @returns {store} redux-store
 */
export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore,
  );
  return createStoreWithMiddleware(rootReducer, initialState);
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

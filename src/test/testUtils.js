import checkPropTypes from 'check-prop-types';

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

export const checkProps = (component, conformingProps) => {
  const errorProp = checkPropTypes(
    // eslint-disable-next-line react/forbid-foreign-prop-types
    component.propTypes,
    conformingProps,
    'prop',
    component.name,
  );
  expect(errorProp).toBeUndefined();
};

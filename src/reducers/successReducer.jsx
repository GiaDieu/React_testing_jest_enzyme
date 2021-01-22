import { actionTypes } from '../actions/types';

const successReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return (state = true);

    default:
      return state;
  }
};

export default successReducer;

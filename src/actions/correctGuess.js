import { actionTypes } from './types';

export const correctGuess = () => {
  return {
    type: actionTypes.CORRECT_GUESS,
  };
};

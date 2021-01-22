import { actionTypes } from './types';

/**
 * Returns Redux Thunk function that dispatch GUESS_WORD action and (conditionally CORRECT_GUESS) action
 * @function guessWord
 * @param {string} guessedWord - guessedWord
 * @returns {function} - Redux Thunk function
 */
export const guessWord = (guessedWord) => {
  return (dispatch, getState) => {};
};

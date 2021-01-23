import { actionTypes } from './types';
import { getLetterMatchCount } from '../helpers';
/**
 * Returns Redux Thunk function that dispatch GUESS_WORD action and (conditionally CORRECT_GUESS) action
 * @function guessWord
 * @param {string} guessedWord - guessedWord
 * @returns {function} - Redux Thunk function
 */
export const guessWord = (guessedWord) => {
  return (dispatch, getState) => {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);
    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessedWord, letterMatchCount },
    });

    if (guessedWord === secretWord) {
      dispatch({ type: actionTypes.CORRECT_GUESS });
    }
  };
};

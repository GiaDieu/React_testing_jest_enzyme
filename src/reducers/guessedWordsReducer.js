import { actionTypes } from '../actions/types';

/**
 * @function guessedWordReducer
 * @param {array} state - Array of Guessed Words
 * @param {object} action - Action to be reduced
 * @returns {array} - new guessedWords state
 */
const guessedWordReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GUESS_WORD:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default guessedWordReducer;

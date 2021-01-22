import { combineReducers } from 'redux';
import successReducer from './successReducer';
import guessedWordReducer from './guessedWordsReducer';

const rootReducer = combineReducers({
  success: successReducer,
  guessedWords: guessedWordReducer,
});

export default rootReducer;

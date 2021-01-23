import { combineReducers } from 'redux';
import successReducer from './successReducer';
import guessedWordReducer from './guessedWordsReducer';
import secretWordReducer from './secretWordReducer';

const rootReducer = combineReducers({
  success: successReducer,
  guessedWords: guessedWordReducer,
  secretWord: secretWordReducer,
});

export default rootReducer;

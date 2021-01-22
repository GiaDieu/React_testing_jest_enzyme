import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

export const middlewares = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewareEnhancers = composeEnhancers(applyMiddleware(...middlewares));
const createStoreWithMiddleware = middlewareEnhancers(createStore);
export default createStoreWithMiddleware(rootReducer);

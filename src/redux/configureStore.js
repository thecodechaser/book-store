import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import bookReducer from './books/books';

const reducer = combineReducers({
  bookReducer,
});

const store = createStore(
  reducer, applyMiddleware(logger, thunk),
);

export default store;

import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import bookReducers from './books/books';

const reducer = combineReducers({
  bookReducers,
});

const store = createStore(
  reducer, applyMiddleware(logger),
);

export default store;

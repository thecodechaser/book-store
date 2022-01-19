/* eslint-disable consistent-return */
import Axios from 'axios';

// actions
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const FETCH_BOOK = 'bookStore/books/FETCH_BOOK';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const fetchBook = (payload) => ({
  type: FETCH_BOOK,
  payload,
});

export const addBookApi = (formData) => async (dispatch) => {
  try {
    await Axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/aJ1C6sv1BEj2T5q0Iuzn/books', formData);
    dispatch(addBook(formData));
  } catch (error) {
    return error;
  }
};

export const fetchBookApi = () => async (dispatch) => {
  try {
    const { data } = await Axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/aJ1C6sv1BEj2T5q0Iuzn/books');

    const Books = Object.keys(data).map((key) => ({
      ...data[key][0],
      item_id: key,
    }));

    const payload = Object.values(Books);
    dispatch(fetchBook(payload));
  } catch (error) {
    return error;
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    case FETCH_BOOK:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;

import Axios from 'axios';

// actions
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const FETCH_BOOK = 'bookStore/books/FETCH_BOOK';

// initial-state
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

export const addBookApi = (payload) => async (dispatch) => {
  const { id, title, category } = payload;
  const newBook = { item_id: id, title, category };
  await Axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ihHFtrkDGalHB4Kt6Ws8/books', newBook);
  dispatch(addBook(payload));
};

export const fetchBookApi = () => async (dispatch) => {
  const books = await Axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ihHFtrkDGalHB4Kt6Ws8/books');
  const mapBooks = Object.entries(books.data).map(([id, book]) => {
    const { category, title } = book[0];
    return { id, category, title };
  });
  dispatch(fetchBook(mapBooks));
};

export const removeBookApi = (id) => async (dispatch) => {
  await Axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ihHFtrkDGalHB4Kt6Ws8/books/${id}`);
  dispatch(removeBook(id));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    case FETCH_BOOK:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;

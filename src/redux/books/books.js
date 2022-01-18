const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [];

export const addBook = payload => ({
    type: ADD_BOOK,
    payload
});

export const removeBook = payload => ({
    type: REMOVE_BOOK,
    payload
})
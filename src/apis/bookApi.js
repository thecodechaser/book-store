const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/aJ1C6sv1BEj2T5q0Iuzn/books';

const getBookData = async () => {
  const response = await fetch(url);
  const json = await response.json();
  return json;
};


export default getBookData;

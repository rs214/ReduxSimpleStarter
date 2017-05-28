export function selectBook(book) {
  //selectbook is an action creator, an obj with a type property
  //action ALWAYS contains a type, sometimes a payload
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
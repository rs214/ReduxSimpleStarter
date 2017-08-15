export function selectBook(book) {
  //selectbook is an action creator, an obj with a type property
  //action ALWAYS contains a type, sometimes a payload
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}


const API_KEY = 'baeedc82b797ecca66ad5c158d4ec09d';
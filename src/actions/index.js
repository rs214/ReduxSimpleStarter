import axios from 'axios';

export function selectBook(book) {
  //selectbook is an action creator, an obj with a type property
  //action ALWAYS contains a type, sometimes a payload
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}


const API_KEY = 'baeedc82b797ecca66ad5c158d4ec09d';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request',request)

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
import React, { Component } from 'react';
import Booklist from '../containers/book_list';
import BookDetail from '../containers/book-detail';
import SearchBar from '../containers/searchBar';
import WeatherList from '../containers/weatherList';

export default class App extends Component {
  render() {
    return (
      <div>
          <Booklist />
          <BookDetail />
          <SearchBar />
          <WeatherList />
      </div>
    );
  }
}

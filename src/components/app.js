import React, { Component } from 'react';
import Booklist from '../containers/book_list';
import BookDetail from '../containers/book-detail';
import SearchBar from '../containers/searchBar';

export default class App extends Component {
  render() {
    return (
      <div>
          <Booklist />
          <BookDetail />
          <SearchBar />
      </div>
    );
  }
}

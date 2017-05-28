import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';  //flows through all reducers

class Booklist extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      ) ;
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps (state) {
  //Whatever is return will show up as props inside Booklist
  //Whenever our app state changes, this container will instantly rerender
  //Whenver app state changes, object in the state function will be assigned as props to component
  return {
    books: state.books
  };
}

//Anything returned from this function will end up as props
// on the Booklist container (we can call selectBook)
function mapDispatchToProps (dispatch) {
  //when selectbook is called, the result should
  //be passed to all of our reducers
  return bindActionCreators({selectBook: selectBook}, dispatch)
}

//Promote Booklist from a component to a container - it needs to know
//about this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(Booklist);
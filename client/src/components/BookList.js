import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {getBooksQuery} from '../queries/queries';

class BookList extends Component {
  render() {
    const { loading, books } = this.props.data;
    
    return (
      loading ? (
        <p>Loading Books...</p>
      ) : (
        <div>
          <ul id="book-list">
            {books.map(book => (
              <li key={book.id}>{book.name}</li>
            ))}
          </ul>
        </div>
      )
    )
  }
}

export default graphql(getBooksQuery)(BookList);
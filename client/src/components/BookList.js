import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getBooksQuery = gql`
  {
    books {
      id,
      name,
      genre
    }
  }
`

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
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {getBooksQuery} from '../queries/queries';
import BookDetails from './BookDetails';

class BookList extends Component {
  state = {
    selected: null
  }

  render() {
    const { loading, books } = this.props.data;
    
    return (
      loading ? (
        <p>Loading Books...</p>
      ) : (
        <div>
          <ul id="book-list">
            {books.map(book => (
              <li key={book.id} onClick={e => this.setState({selected: book.id})}>{book.name}</li>
            ))}
          </ul>
          <BookDetails bookId={this.state.selected}/>
        </div>
      )
    )
  }
}

export default graphql(getBooksQuery)(BookList);
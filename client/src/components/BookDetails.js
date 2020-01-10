import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBookQuery } from '../queries/queries';

class BookDetails extends Component {
  render(){
    const { book } = this.props.data;
    
    return(
      <div id="book-details">
        <h3 className="clr-pink">Output book details here</h3>
        {!book ? (
          <p>No book selected</p>
        ) : (
          <div className="details">
            <p>Name: {book.name}</p>
            <p>Genre: {book.genre}</p>
            <p>Author: {book.author.name}</p>
            <p>Author Books:</p>
            <ul>
              {book.author.books.map(authorBook => (
                <li key={authorBook.id}>{authorBook.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default graphql(getBookQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.bookId
      }
    }
  }
})(BookDetails);
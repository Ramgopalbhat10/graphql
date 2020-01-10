import React, { Component } from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

const getAuthorsQuery = gql`
  {
    authors {
      id,
      name
    }
  }
`

class AddBook extends Component {
  render() {
    const { loading, authors } = this.props.data;

    return (
      <form id="add-book">
        <div className="field">
          <label>Book Name:</label>
          <input type="text"></input>
        </div>
        <div className="field">
          <label>Genre:</label>
          <input type="text"></input>
        </div>
        <div className="field">
          <label>Author:</label>
          <select>
            <option>Select Author</option>
            {loading ? (
              <option disabled>Loading Authors...</option>
            ) : (
              authors.map(author => (
                <option key={author.id} value={author.id}>{author.name}</option>
              ))
            )}
          </select>
        </div>
        <button>Add</button>
      </form>
    )
  }
}

export default graphql(getAuthorsQuery)(AddBook);
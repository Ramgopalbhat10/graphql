import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import {flowRight as compose} from 'lodash'
import {getAuthorsQuery, addBookMutation, getBooksQuery} from '../queries/queries';

class AddBook extends Component {
  state = {
    name: "",
    genre: "",
    authorId: ""
  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.addBookMutation({
      variables: {
        name: this.state.name,
        genre: this.state.genre,
        authorId: this.state.authorId
      },
      refetchQueries: [{query: getBooksQuery}]
    });
  }

  render() {
    const { loading, authors } = this.props.getAuthorsQuery;

    return (
      <form id="add-book" onSubmit={this.submitForm}>
        <div className="field">
          <label>Book Name:</label>
          <input type="text" onChange={e => this.setState({ name: e.target.value })}/>
        </div>
        <div className="field">
          <label>Genre:</label>
          <input type="text" onChange={e => this.setState({ genre: e.target.value })}/>
        </div>
        <div className="field">
          <label>Author:</label>
          <select onChange={e => this.setState({ authorId: e.target.value })}>
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

export default compose(
  graphql(getAuthorsQuery, {name: "getAuthorsQuery"}),
  graphql(addBookMutation, {name: "addBookMutation"})
)(AddBook);
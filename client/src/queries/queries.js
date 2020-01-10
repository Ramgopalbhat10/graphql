import { gql } from 'apollo-boost';

const getBooksQuery = gql`
  {
    books {
      id,
      name,
      genre
    }
  }
`
const getAuthorsQuery = gql`
  {
    authors {
      id,
      name
    }
  }
`
const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBooks(name: $name, genre: $genre, authorId: $authorId) {
      id,
      name
    }
  }
`

export {getBooksQuery, getAuthorsQuery, addBookMutation};
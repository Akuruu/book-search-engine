import { gql } from '@apollo/client';
//'ADD_USER'
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

//'LOGIN_USER'
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

//SAVE_BOOK
export const SAVE_BOOK = gql`
  mutation saveBook($input: SavedBookInput) {
    saveBook(input: $input) {
      _id
      username
      bookCount
      savedBooks {
          bookId
          authors
          image
          link
          title
          description
      }
    }
  }
`;

//'REMOVE_BOOK'
export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      _id
      username
      bookCount
      savedBooks {
          authors
          description
          bookId
          image
          title
          link
      }
    }
  }
`;
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks: [Book]

  }

  input inputBook {
    bookId: String
    description: String
    title: String
    image: String
    link: String
    authors: [String]
  }

  type Book {
    bookId: ID!
    authors: [String]
    description: String
    image: String
    link: String
    title: String
  }

  type Auth {
    token: String
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!):Auth
    saveBook(input: inputBook): User
    removeBook(bookId: Int): User
  }
`;

module.exports = typeDefs;
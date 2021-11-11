const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]!
  }

  type Book {
    authors: [String]
    bookId: String
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, Password: String!): Auth
    addBook(authors: [String], description: String, title: String, bookID: String, image: String, link: String): user
    removeBook(bookID: String): user
  }
`;

module.exports = typeDefs;
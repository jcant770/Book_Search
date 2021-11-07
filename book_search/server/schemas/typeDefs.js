const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Book {
    _id: ID!
    bookId: String
    authors: [String]
    # authors: String
    description: String
    title: String
    image: String
    link: String
  }
type User {
    _id: ID!
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  input BookInput {
    bookId: ID
    authors: [String]
    description: String
    image: String
    link: String
    title: String
}
type Query {
  me: User
  users: [User]
  user(username: String!): User
}
type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  saveBook(bookData: BookInput!): User
  deleteBook(bookId: ID!): User
}
type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
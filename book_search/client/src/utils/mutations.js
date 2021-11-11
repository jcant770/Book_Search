import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!){
        addUser(username: $username, email: $email, password: $password){
            token
            user{
                _id
                username
            }
        }
    }
`;

export const ADD_BOOK = gql`
    mutation addBook($authors: [String], $description: String!, $title: String!, $bookID: String, $image: String, $link: String){
        addBook(authors: $authors, description: $description, title: $title, bookID: $bookID, image: $image, link: $link){
            _id
            username
            savedBooks{
                authors
                description
                title
                bookId
                image
                link
            }
        }
    }
`;

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!, $password: String!){
        login(email: $email, password: $password){
            token
            user{
                _id
                username
            }
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookID: String!){
        removeBook(bookId: $bookId){
            username
            savedBooks{
                authors
                description
                title
                bookId
                image
                link
            }
        }
    }
`;
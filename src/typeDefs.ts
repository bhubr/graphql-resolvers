import { gql } from 'apollo-server';

const typeDefs = gql`
type Book {
  title: String
  author: Author
}

type Author {
  name: String
  books: [Book]
}

type Location {
  city: String
  latitude: Float
  longitude: Float
}

type Library {
  name: String
  location: Location
  books: [Book]
}

type Query {
  libraries: [Library]
}

`;

export default typeDefs;

import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server';
import LibraryModel from './models/library';
import AuthorModel from './models/author';
import BookModel from './models/book';
import populate from './populate';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

async function bootstrap() {
  await mongoose.connect('mongodb://localhost:27017/libraries_app');

  // await populate()
  // const libraries = await LibraryModel.find();
  // const books = await BookModel.find();
  // const authors = await AuthorModel.find();
  // console.log(authors, libraries, books);

  const server = new ApolloServer({
    typeDefs, resolvers,
  });
  const { url } = await server.listen();
  console.log(`Apollo Server listening: ${url}`);
}

bootstrap();

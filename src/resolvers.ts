import LibraryModel from './models/library';
import AuthorModel from './models/author';
import BookModel from './models/book';

const resolvers = {
  Query: {
    libraries: async (parent: any) => {
      console.log('libraries resolver', parent);
      const libraries = await LibraryModel.find();
      return libraries
    },
  },
  Library: {
    async books(parent: any) {
      console.log('Library/books resolver (parent)', parent);
      console.log('Library/books resolver (parent.books)', parent.books);
      const books = await BookModel.find({
        '_id': {
          $in: parent.books
        }
      })
      return books;
    }
  },
  Book: {
    async author(parent: any) {
      console.log('Book/author resolver', parent);
      const author = await AuthorModel.findById(parent.author);
      console.log(author);
      return {
        name: author?.name
      };
    }
  }

};

export default resolvers;

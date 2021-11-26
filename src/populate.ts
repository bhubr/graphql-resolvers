import LibraryModel from './models/library';
import AuthorModel from './models/author';
import BookModel from './models/book';

export default async function populate() {

  // Create a library
  const lib = await LibraryModel.create({
    name: 'Médiathèque Marengo',
    location: {
      city: 'Toulouse',
      latitude: 43.6102228,
      longitude: 1.4532612,
    },
  });

  const authors = await AuthorModel.insertMany([
    { name: 'Jane Austen' },
    { name: 'Amélie Nothomb' },
    { name: 'Jonathan Swift' },
  ]);

  const books = await BookModel.insertMany([
    { title: 'Raison et Sentiments', author: authors[0] },
    { title: "Hygiène de l'assassin", author: authors[1] },
    { title: 'Les Voyages de Gulliver', author: authors[2] },
  ]);

  authors[0].books.push(books[0]._id);
  await authors[0].save();
  authors[1].books.push(books[1]._id);
  await authors[1].save();
  authors[2].books.push(books[2]._id);
  await authors[2].save();

  books[0].libraries.push(lib._id);
  await books[0].save();
  books[1].libraries.push(lib._id);
  await books[1].save();
  books[2].libraries.push(lib._id);
  await books[2].save();

  lib.books.push(books[0]._id);
  lib.books.push(books[1]._id);
  lib.books.push(books[2]._id);
  await lib.save();
}

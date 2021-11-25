import mongoose, { ObjectId, Schema } from 'mongoose';
import { LibraryData } from './library';
import { AuthorData } from './author';

export interface BookData {
  _id: string;
  title: string;
  author: ObjectId;
  libraries: LibraryData[];
}

const BookSchema = new Schema<BookData>({
  title: { type: String, required: true },
  author: mongoose.Types.ObjectId,
  libraries: [{ type: mongoose.Types.ObjectId, ref: 'Book' }],
});

export default mongoose.model('Book', BookSchema);

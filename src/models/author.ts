import mongoose, { Schema } from 'mongoose';
import { BookData } from './book';

export interface AuthorData {
  _id: string;
  name: string;
  books: BookData[];
}

const AuthorSchema = new Schema<AuthorData>({
  name: { type: String, required: true },
  books: [{ type: mongoose.Types.ObjectId, ref: 'Book' }],
});

export default mongoose.model('Author', AuthorSchema);

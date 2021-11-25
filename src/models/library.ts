import mongoose, { Schema } from 'mongoose';
import { BookData } from './book';

export interface LibraryData {
  _id: string;
  name: string;
  location: {
    city: string;
    latitude: number;
    longitude: number;
  };
  books: BookData[];
}

const LibrarySchema = new Schema<LibraryData>({
  name: { type: String, unique: true, required: true },
  location: {
    city: String,
    latitude: Number,
    longitude: Number,
  },
  books: [{ type: mongoose.Types.ObjectId, ref: 'Book' }],
});

export default mongoose.model('Library', LibrarySchema);

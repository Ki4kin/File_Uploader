import mongoose from 'mongoose';

const LoadedFile = mongoose.model('LoadedFile', {
  originalname: String,
  filename: String,
  size: Number,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

export default LoadedFile;

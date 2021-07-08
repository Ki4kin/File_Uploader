import mongoose from 'mongoose';

const User = mongoose.model('user', {
  name: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: Number },
  email: { type: String },
  isAuth: { type: Boolean, default: false },
});

export default User;

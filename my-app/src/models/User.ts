import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  skillsToTeach: [String],
  skillsToLearn: [String],
  availability: [String], // Days/times user is available for sessions
});

const User = mongoose.model('User', userSchema);
export default User;

import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  matchId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  skill: { type: String, required: true },
  time: { type: Date, required: true },
  status: { type: String, default: 'pending' }, // 'pending', 'confirmed', 'cancelled'
});

const Session = mongoose.model('Session', sessionSchema);

export default Session;

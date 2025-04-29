import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';
import sessionRoutes from './routes/sessions'; 

dotenv.config(); // Load environment variables


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // To parse incoming JSON requests
app.use('/api/auth', authRoutes);
app.use('/api/sessions', sessionRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Register Routes
app.use('/api/auth', authRoutes);
app.use('/api/sessions', sessionRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

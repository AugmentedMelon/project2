/// <reference types="vite/client" />
import authRoutes from './routes/auth';
import sessionRoutes from './routes/sessions';

app.use('/api/auth', authRoutes);
app.use('/api/sessions', sessionRoutes);

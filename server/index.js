require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const appointmentRoutes = require('./routes/appointments');
const adminRoutes = require('./routes/admin');
const { errorHandler } = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB (reads MONGO_URI from server/.env)
connectDB();

// Allow CORS from configured client origins; fallback to allow all for local/dev
const allowedOrigins = (process.env.CLIENT_URL || '').split(',').map((origin) => origin.trim()).filter(Boolean);
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.length === 0) return callback(null, true);
      return allowedOrigins.includes(origin)
        ? callback(null, true)
        : callback(new Error('CORS: Origin not allowed'));
    }
  })
);
app.use(express.json());

// API routes
app.use('/api/appointments', appointmentRoutes);
app.use('/api/admin', adminRoutes);

app.use(errorHandler);

// Health check for uptime monitoring
app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

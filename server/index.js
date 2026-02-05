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

// Allow CORS from the client URL in production; fallback to allow all for local/dev
app.use(cors({ origin: process.env.CLIENT_URL || '*' }));
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

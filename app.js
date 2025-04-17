// Main file

// Main file
console.log('Starting the app...');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const companyRoutes = require('./routes/companyRoutes').default;
const { connectDB } = require('./config/db');
const { protect } = require('./middleware/authMiddleware'); // <-- ✅ NEW LINE

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// 🛡️ Protect all /api/companies routes
app.use('/api/companies', protect, companyRoutes); // <-- ✅ Protected route

// Connect to Database
connectDB();

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});



// Next Steps:
// Set up your MongoDB database by connecting to your cluster or local instance.

// Adjust the email service configuration in the .env file.

// Implement 2FA using Google Authenticator or another 2FA method.

// Test the routes locally before deploying to a platform like Heroku, Render, or AWS.
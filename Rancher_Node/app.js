require('dotenv').config();
const express = require('express');
const cors = require('cors');  // Import the CORS package
const connectDB = require('./config/db');
const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth');

const app = express();

// Connect to the database
connectDB();

// CORS configuration
const corsOptions = {
    origin: 'http://localhost:5173',  // Allow requests from the frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'],  // Allowed headers
};

// Apply CORS middleware globally
app.use(cors(corsOptions));
app.use(cors());
// Middleware to parse JSON requests
app.use(express.json());

// Routes for user and auth
app.use('/api/users', userRoutes); // Prefix routes with /api/users
app.use('/api/auth', authRoutes);   // Prefix routes with /api/auth

// Start the server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

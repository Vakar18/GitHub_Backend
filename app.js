const express = require('express');
const cors = require('cors');
const app = express();
const userRoutes = require('./routes/user.routes');

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/users', userRoutes);

module.exports = app;

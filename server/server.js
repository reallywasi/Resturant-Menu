const express = require('express');
const mongoose = require('mongoose');
const menuRoutes = require('./routes/menuRoutes');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/kathi-express-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(express.json());

// Routes
app.use('/menu', menuRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const app = require('./app');
const mongoose = require('mongoose');
const PORT = 8082;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/github_data', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

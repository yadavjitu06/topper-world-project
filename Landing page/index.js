//Creating Custom Middleware
const express = require('express');
const app = express();

// Custom middleware function
const logger = (req, res, next) => {
  console.log(`Received ${req.method} request for ${req.url}`);
  next(); // Call next() to move to the next middleware in the chain
};

// Apply logger middleware to all routes
app.use(logger);

// Route for the root URL ('/')
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

  




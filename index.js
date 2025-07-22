const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// GET API endpoint
app.get('/api/data', (req, res) => {
  res.json({ message: 'This is a GET request response.' });
});

// POST API endpoint
app.post('/api/data', (req, res) => {
  const requestData = req.body;
  res.json({
    message: 'This is a POST request response.',
    receivedData: requestData
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

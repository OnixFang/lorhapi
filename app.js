// Modules
const express = require('express');

// App config
const app = express();
const { HOST, PORT } = process.env;

// Routes
app.get('/', (req, res) => {
  res.send('OK');
});

// Server launch
app.listen(PORT, HOST, () => {
  console.log(`App listening on http://${HOST}:${PORT}/`);
});

// Modules
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

// App config
const { HOST, PORT, MONGODB_URL } = process.env;
const app = express();
app.use(express.json());

// DB Connection
mongoose.connect(
  MONGODB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  (err) => {
    if (err) {
      throw err;
    }
    console.log('Successfully connected to dabatase.');
  }
);

// Routes
app.use(routes);

// Server launch
app.listen(PORT, HOST, () => {
  console.log(`App listening on http://${HOST}:${PORT}/`);
});

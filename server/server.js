require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const cookieParser = require('cookie-parser');

require('./config/mongoose.config');

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../dist')));

// require creatorRoutes router
require('./routes/creatorRoutes')(app);

// require videoRoutes router
// require('./routes/videoRoutes')(app);

// Local error handler
app.use((req, res) =>
  res.status(404).send('This is not the page you\'re looking for...')
);

// GLOBAL ERROR HANDLER
app.use((err, req, res) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;

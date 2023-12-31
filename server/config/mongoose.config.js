const mongoose = require('mongoose');

// creating variable for mongoDB url


// connecting mongoose database to app
mongoose
  .connect(process.env.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'axolotl_flix',
  })
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.log(err));

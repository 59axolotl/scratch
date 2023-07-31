const mongoose = require('mongoose');
const mongoURI = process.env.mongoURI;

// connecting mongoose database to app
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'axolotl_flix',
  })
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.log(err));

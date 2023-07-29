/* eslint-disable no-undef */
const mongoose = require('mongoose');

const MONGO_URI = 'PUT URI HERE';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'list'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

// sets a schema for the 'species' collection
const listSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  complete: {
    type: Boolean,
    required: true
  }
});

// creates a model for the 'species' collection that will be part of the export
const List = mongoose.model('list', listSchema);

// exports all the models in an object to be used in the controller
module.exports = List;


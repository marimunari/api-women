/* Required external modules */
const mongoose = require('mongoose');

/* Schema for MongoDB */
const WomanSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  quote: {
    type: String,
    required: true,
  },
  minibio: {
    type: String,
    required: true,
  }
});

/* Export created module */
module.exports = mongoose.model('woman', WomanSchema);
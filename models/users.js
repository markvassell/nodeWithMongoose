const mongoose = require('mongoose');

// User Schema
const ScholarSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  class: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
});

const Scholar = mongoose.model('User', ScholarSchema);

module.exports = Scholar;

module.exports.addScholar = function(newScholar, callback) {
  newScholar.save(callback);
}

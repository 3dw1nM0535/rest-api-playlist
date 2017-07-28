var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Create schema for model or collection
var UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  rank: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  }
});
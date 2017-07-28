var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Create GeoLocation Schema
var GeoSchema = new Schema({
  type: {
    type: String,
    default: "Point"
  },
  coordinates: {
    type: [Number],
    index: "2dsphere"
  }
});

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

var User = mongoose.model('user', UserSchema);

module.exports = User;
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Set up express
var app = express();

//Connect to mongodb
mongoose.connect('mongodb://localhost/user');

//Set mongoose Promise
mongoose.Promise = global.Promise;

//Static file Middleware
app.use(express.static('public'));

//Body-parser Middleware
app.use(bodyParser.json());

//Set route Middleware
app.use('/api', require('./Routes/api'));

//Error handling Middleware
app.use(function (err, req, res, next) {
  res.status(422).send({
    error: err.message,
  });
});

//Listen for connection on server port number 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Server listening for connection');
});

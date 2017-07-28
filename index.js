var express = require("express");
var bodyParser = require('body-parser');

//Set up express
var app = express();

//Body-parser Middleware
app.use(bodyParser.json());

//Set route Middleware
app.use('/api', require('./Routes/api'));

//Listen for connection on port
app.listen(process.env.PORT || 4000, function() {
  console.log('Server listening for connection');
});

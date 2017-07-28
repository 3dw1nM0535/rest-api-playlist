//Routes handler module
var express = require('express');

var router = express.Router();

//Get list from db
router.get('/ninjas', function (req, res) {
  res.send({type: 'GET'});
});

//Add ninja to db
router.post('/ninjas', function (req, res) {
  console.log(req.body);
  res.send({type: 'POST'});
});

//Update data in db
router.put('/ninjas/:id', function (req, res) {
  res.send({type: 'PUT'});
});

//Delete data in db
router.delete('/ninjas/:id', function (req, res) {
  res.send({type: 'DELETE'});
});

module.exports = router;
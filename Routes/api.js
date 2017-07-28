//Routes handler module
var express = require('express');
var User = require('../models/model');

var router = express.Router();

//Get list from db
router.get('/users', function (req, res) {
  res.send({type: 'GET'});
});

//Add ninja to db
router.post('/users', function (req, res) {
  User.create(req.body).then(function (data) {
    res.send(data);
  });
});

//Update data in db
router.put('/users/:id', function (req, res) {
  res.send({type: 'PUT'});
});

//Delete data in db
router.delete('/users/:id', function (req, res) {
  res.send({type: 'DELETE'});
});

module.exports = router;
//Routes handler module
var express = require('express');
var User = require('../models/model');

var router = express.Router();

//Get user from the db
router.get('/users', function (req, res, next) {
  User.geoNear(
    { type: "Point", coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
    { maxDistance: 100000, spherical: true}
  ).then(function (user) {
    res.send(user);
  });
});

//Add user to the db
router.post('/users', function (req, res, next) {
  User.create(req.body).then(function (data) {
    res.send(data);
  }).catch(next);
});

//Update user-data in the db
router.put('/users/:id', function (req, res, next) {
  User.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
    User.findOne({ _id: req.params.id }).then(function (user) {
      res.send(user);
    });
    res.send(user);
  });
});

//Delete user-data in the db
router.delete('/users/:id', function (req, res, next) {
  User.findByIdAndRemove({_id: req.params.id }).then(function (user) {
    res.send(user);
  });
});

//Export module to access it in other modules
module.exports = router;
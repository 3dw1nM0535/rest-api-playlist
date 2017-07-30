//Routes handler module
var express = require('express');
var User = require('../models/model');

var router = express.Router();

//Get list from db
router.get('/users', function (req, res, next) {
  User.geoNear(
    { type: "Point", coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
    { maxDistance: 100000, spherical: true}
  ).then(function (user) {
    res.send(user);
  });
});

//Add user to db
router.post('/users', function (req, res, next) {
  User.create(req.body).then(function (data) {
    res.send(data);
  }).catch(next);
});

//Update data in the db
router.put('/users/:id', function (req, res, next) {
  User.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
    User.findOne({ _id: req.params.id }).then(function (user) {
      res.send(user);
    });
    res.send(user);
  });
});

//Delete data in the db
router.delete('/users/:id', function (req, res, next) {
  User.findByIdAndRemove({_id: req.params.id }).then(function (user) {
    res.send(user);
  });
});

//Export module to access it in other module
module.exports = router;
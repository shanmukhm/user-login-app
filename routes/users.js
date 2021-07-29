var express = require('express');
var router = express.Router();

const {sequelize} = require('../db/sql_db');
const user = require('../models/user.model');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('routed')
  console.log(sequelize.models.User.findAll());
  res.send('get all users');
});

router.get('/:userId', function(req, res, next) {
  console.log(req.params);
  res.send('get all users');
});

router.post('/', function(req, res, next) {
  res.send('user create req');
});

router.delete('/:userId', function(req, res, next) {
  res.send('user delete req');
});

module.exports = router;

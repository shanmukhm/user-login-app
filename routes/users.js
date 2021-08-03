var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET users listing. */
router.get('/all', function (req, res, next) {
  console.log('routed')
  console.log(db.user.findAll());
  res.send('get all users');
});

router.get('/', async function (req, res, next) {
  console.log(req.body);
  try {
    const user = await db.user.findOne({
      where: { email: req.body.userId },
      include: db.task
    });
    res.status(200).json(user);
  } catch (e) {
    console.log(`Error`, e);
    res.send("Error", 404);
  }
});

router.post('/', async function (req, res, next) {
  console.log(req.body);
  try {
    const user = await db.user.create(req.body);
    res.status(201).json(user);
  } catch (e) {
    res.send("Error occured", 400);
  }
});

router.delete('/', async function (req, res, next) {
  try {
    const user = await db.user.destroy({
      where: { email: req.body.userId }
    });
    res.send('deleted user successfully');
  } catch (e) {
    console.log(e);
    res.send("User not found", 404);
  }
});

module.exports = router;

var express = require('express');
var router = express.Router();
const userService = require('../services/user');

router.get('/', async (req, res, next) => {
  console.log(req.body);
  try {
    const user = await userService.get(req.body.userId)
    delete user.password;
    res.status(200).json(user);
  } catch (e) {
    console.log(`Error`, e);
    res.send("Error", 404);
  }
});

/* GET users listing. */
router.get('/all', async (req, res, next) => {
  console.log('routed')
  const users = await userService.findAll();
  res.status(200).json(users);
});

router.post('/', async (req, res, next) => {
  console.log(req.body);
  try {
    const user = await userService.create(req.body);
    res.status(201).json(user);
  } catch (e) {
    res.send("Error occured", 400);
  }
});

router.delete('/', async (req, res, next) => {
  try {
    const user = await userService.delete(req.body.userId);
    res.send('deleted user successfully');
  } catch (e) {
    console.log(e);
    res.send("User not found", 404);
  }
});

module.exports = router;

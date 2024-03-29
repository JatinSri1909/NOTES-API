const express = require('express');
const { signup, signin } = require('../controllers/userController');
const user = require('../models/user');
const userRouter = express.Router();

userRouter.post('/signup', signup);
userRouter.post('/signin', signin);

module.exports = userRouter;
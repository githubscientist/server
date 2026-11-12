// import express
const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');

// create a router
const authRouter = express.Router();

// match the routes
authRouter.post('/register', registerUser);
authRouter.post('/login', loginUser);

// export the router
module.exports = authRouter;
// import express
const express = require('express');
const { registerUser, loginUser, me, logoutUser } = require('../controllers/authController');

// create a router
const authRouter = express.Router();

// match the routes
authRouter.post('/register', registerUser);
authRouter.post('/login', loginUser);
authRouter.get('/me', me);
authRouter.post('/logout', logoutUser);

// export the router
module.exports = authRouter;
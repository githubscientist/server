// import express
const express = require('express');
const { registerUser, loginUser, me, logoutUser } = require('../controllers/authController');
const { isAuthenticated } = require('../middlewares/auth');

// create a router
const authRouter = express.Router();

// match the routes
// public routes
authRouter.post('/register', registerUser);
authRouter.post('/login', loginUser);

// protected routes
authRouter.get('/me', isAuthenticated, me);
authRouter.post('/logout', isAuthenticated, logoutUser);

// export the router
module.exports = authRouter;
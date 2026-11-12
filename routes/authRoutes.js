// import express
const express = require('express');
const { registerUser } = require('../controllers/authController');

// create a router
const authRouter = express.Router();

// match the routes
authRouter.post('/register', registerUser);

// export the router
module.exports = authRouter;
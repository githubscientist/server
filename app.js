// import express
const express = require('express');
const todoRouter = require('./routes/todoRoutes');

// create an express application
const app = express();

// parse the request body
app.use(express.json());

// then send the request to the matching routes
app.use('/todos', todoRouter);

module.exports = app;
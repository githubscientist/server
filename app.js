// import express
const express = require('express');
const todoRouter = require('./routes/todoRoutes');
const bodyParser = require('body-parser');

// create an express application
const app = express();

// onSuccess -> matching routes
// onFailure -> return an error response
// parse the request body
// app.use(express.json());

// parse using body-parser library
app.use(bodyParser.json());

// then send the request to the matching routes
app.use('/todos', todoRouter);

module.exports = app;
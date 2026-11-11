// import express
const express = require('express');
const todoRouter = require('./routes/todoRoutes');
const bodyParser = require('body-parser');
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');

// create an express application
const app = express();

// onSuccess -> matching routes
// onFailure -> return an error response
// parse the request body
// app.use(express.json());

// parse using body-parser library
app.use(bodyParser.json());

// request process begins or recieved request
// log the incoming requests
app.use(logger);

// then send the request to the matching routes
app.use('/todos', todoRouter);

// error handling middleware
app.use(errorHandler);

module.exports = app;
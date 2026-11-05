// import express
const express = require('express');

// create an express application
const app = express();

app.get('/', (request, response) => {
  response.send({ message: 'hello' });
});

module.exports = app;
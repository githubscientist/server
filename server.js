// import express
const express = require('express');

// create an express application
const app = express();

app.get('/', (request, response) => {
  response.send({ message: 'hello' });
});

// start the server
app.listen(3001, 'localhost', () => {
  console.log('Server is running at http://localhost:3001');
});
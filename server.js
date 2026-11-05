const app = require("./app");
const mongoose = require('mongoose');

// connect to the database
mongoose
  .connect('')
  .then(() => {
    console.log('connected to database');
  })
  .catch(error => {
    console.log('error in connecting to database');
  }) 

// start the server
app.listen(3001, 'localhost', () => {
  console.log('Server is running at http://localhost:3001');
});
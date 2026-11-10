const app = require("./app");
const mongoose = require('mongoose');
require('dotenv').config();

// connect to the database
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to database');

    // start the server
    app.listen(process.env.PORT, process.env.HOST, () => {
      console.log(`Server is running at http://localhost:${process.env.PORT}`);
    });
  })
  .catch(error => {
    console.log('Error in connecting to database');
  }) 
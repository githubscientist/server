const app = require("./app");
const mongoose = require('mongoose');
const { MONGODB_URI, PORT, HOST } = require("./utils/config");

// connect to the database
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to database');

    // start the server
    app.listen(PORT, HOST, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  })
  .catch(error => {
    console.log('Error in connecting to database');
  }) 
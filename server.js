const app = require("./app");

// start the server
app.listen(3001, 'localhost', () => {
  console.log('Server is running at http://localhost:3001');
});
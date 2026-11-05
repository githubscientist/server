const http = require('node:http');

// create server
const server = http.createServer((request, response) => {
  console.log('request received...');
  console.log(request.method, request.url);
  
  response.writeHead(200, {
    'Content-Type': 'application/json'
  });
  // prepare a response
  response.end(JSON.stringify({ message: 'hello world!' }));
});

// server start
server.listen(3001, 'localhost', () => {
  console.log('Server is running at localhost:3001');
});
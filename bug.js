const http = require('http');

const server = http.createServer((req, res) => {
  // Uncommon error: Missing res.end() call
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Forgot to end response.  This will hang the request.
  // res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
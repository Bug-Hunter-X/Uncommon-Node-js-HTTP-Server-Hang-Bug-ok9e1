# Uncommon Node.js HTTP Server Hang Bug

This repository demonstrates an uncommon bug in Node.js HTTP servers where forgetting to call `res.end()` in the response handler causes the server to hang. The bug is subtle and can be difficult to debug without careful examination of the server's response handling.

## Bug Description

The `bug.js` file contains a simple HTTP server.  However, it omits the crucial `res.end()` call, leading to requests hanging indefinitely. The server will successfully start, but the client will not receive a response.

## Solution

The `bugSolution.js` file fixes this issue by including `res.end()`, ensuring proper response termination. This allows clients to receive a valid response and complete the request.
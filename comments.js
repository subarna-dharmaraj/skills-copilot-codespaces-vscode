// Create web server
// Create a web server that listens on port 3000 and serves the comments.js file.
// The comments.js file should contain the following JavaScript code:
// var comments = [
//     { username: "Tim", comment: "I am so happy" },
//     { username: "Sally", comment: "Just got married" },
//     { username: "Tom", comment: "I am so happy" }
// ];
// The web server should respond to requests to /comments with the contents of the comments.js file.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/comments') {
        fs.readFile('./comments.js', 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Internal Server Error');
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/javascript');
                res.end(data);
            }
        });
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
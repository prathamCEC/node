const http = require('http');
const { readFileSync } = require('fs');

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        const read = readFileSync('./index.html', 'utf-8');
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(read);
    } else if (request.url === '/about') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end("<h1>Welcome to the about page</h1>");
    } else {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end('<h2>No such page</h2><a href="http://localhost:5000/">Go to home</a>');
    }
});

server.listen(5000, () => {
    console.log("Server is running at port 5000");
});

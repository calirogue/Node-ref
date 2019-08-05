// https://nodejs.org/dist/latest-v10.x/docs/api/http.html
// Used to create network applications
// Create a backend service


const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Good Day World');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000...');

// kill a server:
// 1. sudo lsof -i :3000
// 2. kill -9 PID# 
// 3. example: kill -9 10340
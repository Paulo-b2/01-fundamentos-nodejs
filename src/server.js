import http from "node:http";

const server = http.createServer((req, res) => {
    return res.end('Hello aasdaa')
});

server.listen(3333)

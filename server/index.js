// console.log("Implement servermu disini yak 😝!");

const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 8000;
const hostname = '127.0.0.1';

const PUBLIC_DIRECTORY = path.join(__dirname, 'public');

function onRequest(req, res) {
    switch (req.url) {
      case '/':
        res.writeHead(200)
        req.url = "index.html";
        break;
      case '/cars':
        res.writeHead(200)
        req.url = "cars.html";
        break;
    }
    
    let path = "public/" + req.url;
    fs.readFile(path, (err, data) => {
      res.writeHead(200);
      res.end(data);
    })
  }
    const server = http.createServer(onRequest);

server.listen(port, hostname, () => {
    console.log(`Server sudah berjalan, silahkan buka http://${hostname}:${port}/`);
})
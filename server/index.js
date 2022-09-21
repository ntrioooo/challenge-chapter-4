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

// const server = http.createServer((req, res) => {
//     console.log(pathView);
//     let objStrParams;
//     if(Object.keys(url.parse(req.url, true).query).length != 0){
//         objStrParams = url.parse(req.url, true).query;
//     }
//     console.log(objStrParams);
//     if(objStrParams != undefined) {
//         let url = req.url.split('?')[0];
//         console.log(url);
//         if(url == `/images`) {
//             res.statusCode = 200;
//             res.setHeader('Content-Type', 'image');
//             console.log(path.join(pathPublic,`img/${objStrParams.src}`));
//             res.end(fs.readFileSync(path.join(pathPublic, `img/${objStrParams.src}`)));
//         } else if (url == `/scripts`) {
//             res.statusCode = 200;
//             res.setHeader('Content-Type', 'text/javascript');
//             res.end(fs.readFileSync(path.join(pathPublic, `scripts/${objStrParams.src}`)));
//         } 
//     }else {
//         switch (req.url) {
//             case '/':
//                 res.statusCode = 200;
//                 res.setHeader('Content-Type', 'text/html');
//                 res.end(fs.readFileSync(path.join(pathView,'index.html')));
//                 break;
//             case '/cars':
//                 res.statusCode = 200;
//                 res.setHeader('Content-Type', 'text/html');
//                 res.end(fs.readFileSync(path.join(pathView,'cars.html')));
//                 break;
//             default:
//                 res.statusCode = 200;
//                 res.setHeader('Content-Type', 'text/html');
//                 res.end('404')
//                 break;
//         }
//     }
// });

server.listen(port, hostname, () => {
    console.log(`Server sudah berjalan, silahkan buka http://${hostname}:${port}/`);
})
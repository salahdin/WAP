const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res)=>{
  fs.readFile('./instagram-image-size.jpg', (err, data)=>{
    if(err) throw err;
    res.writeHead(200, {'Content-Type': 'image/jpeg'}).write(data);
    res.end();
  });
});

server.listen(3000);
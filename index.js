const http = require('http');
const fs = require('fs');

const PORT = 8080

http.createServer(async function (req, res) {
    await new Promise((resolve, reject) => {
        fs.readFile('index.html', function(err, data) {
            if(err) reject(err);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
        resolve();
    });
    })
}).listen(PORT); 
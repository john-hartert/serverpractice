const fs = require('fs');
const http = require('http');
const server = http.createServer( (req, res) => {
    console.log(req.url);
    let urlPath = 'index.html';
    if (req.url != '/') {
        urlPath = req.url.slice(1);
    }
    fs.readFile('blah.html', (err, buffer) => {
    fs.readFile(urlPath, (err, buffer) => {
        if (err){
            res.end();
            return;
        }
        res.end(buffer.toString());
    });
});

server.listen(8887, () => {
    console.log('Here I am I am running....');
});
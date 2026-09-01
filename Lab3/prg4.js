import http from 'http';
import fs from 'fs';
import { createReadStream } from 'fs';

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        const stream = createReadStream('./pages/airtag.html');
        stream.pipe(res);
    }
    else if(req.url === '/mobile') {
        res.setHeader('Content-Type', 'application/json');
        const stream = createReadStream('./data/product.json');
        stream.pipe(res);
    }
    else if(req.url === '/manual') {
        res.setHeader('Content-Type', 'text/plain');
        const stream = createReadStream('./data/gpt.txt');
        stream.pipe(res);
    }
    
});
const PORT = 4444;
server.listen(PORT, () => {
    console.log("Prg 4 is running on port 4444");
});
import http from "http"
const server = http.createServer((req, res) => {
    if(req.url == '/' && req.method == 'GET') {
        res.end('<h1> Product Details</h1>');
        
    }
    else if(req.url == '/products' && req.method == 'GET') {
        res.setHeader('Content-Type', 'application/json');
        const stream = createReadStream('./data/product.json');
        stream.pipe(res);   
    }

    else {
        res.statusCode = 404;
        res.end("Not Found");   
    }
});
server.listen(5000, () => {
    console.log("prg5  is running on port 5000");
});

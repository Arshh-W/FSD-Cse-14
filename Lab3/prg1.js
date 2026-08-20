import http from 'http';

const server = http.createServer();
server.on('request', (req, res) => {

    res.writeHead(200, {'Content-Type': 'text/html'});  
    res.write(" <h1>Welcome to the server</h1>");
    res.end(    );  
});
const PORT = 4444;
server.listen(PORT, ()=>{
    console.log("Server is running on port 4444");  
})

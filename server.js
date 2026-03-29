const http = require('http');
const host = 'localhost';
const port = 3000;

const requestListener= function(req,res){
    
    if (req.url === '/favicon.ico') {
    res.writeHead(204);
    res.end();
    return;
}
//hello 
    if(req.url === '/hello'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain'); 
        res.end('Hello World'); 
    }
    // user
    else if(req.url === '/user'){
        const user={
            name : "AADHITH SHESHU P S",
            role : "INTERN"
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json'); 
        res.end(JSON.stringify(user)); 
    }
    // time
    else if(req.url === '/time'){
        const currentTime = new Date().toString();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain'); 
        res.end(currentTime); 
    }
    // default
    else{
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain'); 
        res.end('Server is running'); 
    }
};
const server = http.createServer(requestListener);


server.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}/`);
  console.log(`Server is running at http://${host}:${port}/hello`);
  console.log(`Server is running at http://${host}:${port}/user`);
  console.log(`Server is running at http://${host}:${port}/time`);
});
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) =>{
    console.log(req.url, req.method);
    res.setHeader('Content-Type', 'text/html');
    
    let path = "";
    switch(req.url){
        case '/' : path += './index.html'; 
        res.statusCode = 200; break;
        case '/about' : path += './about.html';
        res.statusCode = 200; break;
        default: path += './404.html';
    }

    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
        }else{
            //res.write(data)
            res.end(data);
        }
    });

});

server.listen(3003, 'localhost', ()=> {
    console.log('using port 3003')
});
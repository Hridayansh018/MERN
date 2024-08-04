const url = require('url');
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    //requests
    //inddex
    //about
    //services

    // console.log(req.url);

    const path = req.url;
    if (path === '/about') {
        console.log("about page");
    } else if (path === '/'){
        console.log("home page"); 
        
        res.writeHead(200, {'Content-Type': 'text/html'})

        const content = fs.readFileSync('Node.js/project1.html')

        res.write(content)
        res.end();
        
    }
}).listen(3032)
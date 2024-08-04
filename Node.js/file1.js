// importing module using require keyword

const findAvg = require('./mymod');
const fun= require('./mymod')


const avgs = Math.round(findAvg(12,43,7))
console.log("avg is"+" "+avgs);

// importing http module for creating http server
const http = require('http');


// Crating server
const server = http.createServer((req, res) =>{
    //req: request process
    //res: for waiting response


    // writing response html
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write("<h1>Hello</h1>")
    res.write("<h1>huehuehue</h1>")
    res.write("<h1>omk</h1>")
    res.write("<button>click</button>")
    res.write("avg is"+" "+avgs)

})
// listening server
server.listen(3000)
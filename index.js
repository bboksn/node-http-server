const http = require('http');
const url = require('url');
const fs = require('fs');
http.createServer((req, resp) => {
    let q = url.parse(req.url, true)
    page = q.pathname==="/" ? "./index.html":"." + q.pathname+".html";
    fs.readFile(page,(err,data)=>{
        if(err){
            console.log(err)
            resp.writeHead(404,{'Content-Type':'text/html'});
            return resp.end("404 error")
        }
        resp.writeHead(200,{'Content-Type':'text/html'})
        resp.write(data)
        return resp.end();
    })
}).listen(8080);
console.log('server started running port 8080')
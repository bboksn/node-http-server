const http = require('http');
const url = require('url');
const fs = require('fs');
http.createServer((req, resp) => {
let q = url.parse(req.url,true)
page= "." + q.pathname;

})
console.log('server started running port 8080')
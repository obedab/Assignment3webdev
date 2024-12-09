var  http = require('http');
var fs = requide('fs');
http.createServer(function(req,res){
  fs.readFile('read_demo.html', function(err, data){
    // res.writeHead(200, {'Content-Type': "text/html"}); 
    // res.write('req.url');
    return res.end(); 
  });
 }).listen(8080);
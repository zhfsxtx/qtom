var sys = require("sys"),
    http = require("http");
    var hostName = "0.0.0.0"; 
http.createServer(function(req,response) {
    response.write("Hello World!");
    response.end();
}).listen(process.env.C9_PORT,hostName);

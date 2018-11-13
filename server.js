var http = require("http");

//building web server
var server = http.createServer(function(req,res) {

    //response
    //200 means successful response status
    //content type is of html
    res.writeHead(200, {"Content-Type": "text/html"});

    //ending response + sending some html data
    res.end(`
    <!DOCTYPE html>
    <html>
        <head>
            <title>HTML Response</title>
        </head>
        <body>
            <h1>Serving HTML Text.</h1>
            <p>${req.url}</p>
            <p>${req.method}</p>
        </body>
    </html>
    `);
});

//web request for this server
server.listen(8080);

console.log("Server listening on port 8080");


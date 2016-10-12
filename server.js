var http = require("http");

http.createServer(funtion(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	responce.write("Hello World");
	response.end();
}).listen(8888);


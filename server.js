var http = require("http");
var url = require("url");

function start(route) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		response.writeHead(200, {"Content-Type": "text/plain"});

		route(pathname);
		
		response.write("Hello World");
		response.end();
	}

	http.createServer(onRequest).listen(8080);
	console.log("Server has started.");
}

exports.start = start;


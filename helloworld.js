const http = require('http'); //include http package
const hostname = '127.0.0.1'; //mention your local web server
const port = 3000; //mention some dummy port
const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World\n');
}); //create web server object
server.listen(port, hostname, () => {
	console.log('Server running at http://'+hostname+':'+port);
}); //run web server
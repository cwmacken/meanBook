var http = require('http');
var options = {
	hostname: 'localhost',
	port: '8080',
	path: '/hello.html'
};
function handleResponse (response) {
	var severData = '';
	response.on('data', function(chunk){
		sercerData += chunk;
	});
	response.on('end', function(){
		console.log(serverData);
	});
}
http.request(options,function (response) {
	handleResponse(response);
}).end();
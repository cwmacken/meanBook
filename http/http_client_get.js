var http = require('http');
var options = {
	hostname: 'localhost',
	port: '8080'
};
function handleResponse(response){
	var serverData = '';
	response.on('data', function (chunk){
		serverData += chunk;
	});
	response.on('end', function(){
		console.log("Response Status:", responseCode);
		console.log("Response HeaderS:", response.headers);
		console.log(serverData);
	});
}
http.request(options, function(response){
	handleResponse(response);
}).end();
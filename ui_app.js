var http    =	require('http');
var fs 		=	require('fs');
//var socketio = require('socket.io');
//웹서버를 만듭니다.
var server  = http.createServer(function(request, response) {
	//htmlPage.html 파일을 읽습니다.
	fs.readFile("jqueryMobile.html", function(err, data) {
		response.writeHead(200, {"Content-Type":"text/html"});
		response.end(data);
	})
}).listen(80,function(){
	console.log("Server running at http://127.0.0.1:80");
});
//var io = socketio.listen(server);
//
//io.sockets.on("connection", function (socket) {
//	console.log("연결.......................")
//	socket.on("touchmove", function (data) {
//		io.sockets.emit("touchmove", data);
//	});
//	socket.on("touchstart", function (data) {
//		io.sockets.emit("touchstart", data);
//	});
//	socket.on("touchend", function (data) {
//		io.sockets.emit("touchstart", data);
//	});
//	socket.on("resetCanvas", function (data) {
//		io.sockets.emit("resetCanvas", data);
//	});
//});
var SERVER_HOST = "http://localhost:3000";
var socket;

log("init");
socket = io.connect(SERVER_HOST);
socket.on("music", function (data) {
	log("Received: " + data);
	switch (data) {
		case "prev":
			window.location = 'javascript:document.getElementsByClassName("flat-button")[1].click()';
			break;
		case "play":
			window.location = 'javascript:document.getElementsByClassName("flat-button")[2].click()';
			break;
		case "next":
			window.location = 'javascript:document.getElementsByClassName("flat-button")[3].click()';
			break;
	}
});

function log(message) {
	console.log("Google Play Music Global Control Extension -- " + message);
}
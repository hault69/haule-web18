const express = require("express");
const app = express();

//chọn thư mục load
app.use(express.static("css"));

// Router
app.get("/", function(request, response) {
	console.log(request);
	response.send("Le Trung Hau!");
});

app.get("/about", function(req, res) {
	// res.send("<h1>asjdoiasjd</h1>");
	// console.log(__dirname)
	res.sendFile(__dirname + "/css/index.html");
});

app.listen("6969", function(err) {
	if(err) console.log(err)
	else console.log("Server start success!!!");
});
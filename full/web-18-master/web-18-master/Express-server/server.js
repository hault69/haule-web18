const express = require("express");
const app = express();

//Sử dụng như một thư mục công cộng cho phép người dùng truy cập
//nếu không chỉ rõ link trong "/" thì nó sẽ coi root là thư mục public 


// Router
app.get("/", function(request, response) {
	console.log(request);
	response.send("Le Trung Hau!");
});

app.use("/",express.static("css"));

app.get("/about", function(req, res) {
	// res.send("<h1>asjdoiasjd</h1>");
	// console.log(__dirname)
	res.sendFile(__dirname + "/css/index.html");
});

app.listen("6969", function(err) {
	if(err) console.log(err)
	else console.log("Server start success!!!");
});
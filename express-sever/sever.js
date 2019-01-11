const express = require("express");
const app = express();

app.get("/",function(request,response){
    console.log(request);
    response.send("hello");
})

app.get("/about",function(request,response){
    console.log(request);
    // response.send("<h3>asasasas</h3>");
    response.sendFile(__dirname + "/index.html");
    //làm cho file css quay trở lại
})

app.listen("6969",function(err){
    if(err) console.log(err)
    else console.log("success!!");
});
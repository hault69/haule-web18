console.log("hello");

const fs =  require("fs"); //gọi thư viện

const obj = {
    a: 10,
    b: 25
}
console.log(obj.a);

const objToJSON = JSON.stringify(obj); //cover 1 file obj thành json

// console.log("begin");
// fs.writeFile("test.txt",objToJSON,function(err){
//     if(err) console.log("Error!!",err)
//     else console.log("success!");
// });

//JSON.parse : cover json về dạng ban đầu

// fs.readFile("test.txt","utf8",function(err,data){
//     if(err) console.log("Error!!",err)
//     else console.log("File data: " ,JSON.parse(data).a); 
// });
// console.log("end.");

// console.log("Begin sync.");
// fs.writeFileSync("testSync.txt",objToJSON);

// const data = fs.readFileSync("testSync.txt");
// console.log(data);
// console.log("End Sync.");

const fileCtrl = require("./fileController");

const readFileCustom = fileCtrl.readFileCustom;

console.log(fileCtrl.readFileCustom("test.txt"))
// window.onload = function(){
//     var textarea = document.querySelector("textarea");
//     var span = document.querySelector("span");
//     span.innerHTML = "Có thể nhập 200 kí tự!"
// textarea.addEventListener("input", function(){
//     var maxlength = 200;
//     var currentLength = this.value.length;
//     if( currentLength >= maxlength ){
//         span.innerHTML ="Đã nhập 200/200 kí tự";
//     }else{
//         span.innerHTML ="Còn " + (maxlength - currentLength) + " kí tự.";
//     }
// });
// }
const totalChar = 200;
document.querySelector("textarea")
    .addEventListener("input", function(){
        const length = document.querySelector("textarea").value.length;
        const remainChar = totalChar - length;
        // console.log(remainChar);
        document.getElementById("remainChar").innerText = remainChar;
    });
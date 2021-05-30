var pass = document.getElementById("password");
var conf= document.getElementById("confirmation");
var button_1 = document.querySelector("button");

button_1.addEventListener("click", () =>
 {
    if (pass.value !== conf.value){
       pass.style.border = "2px solid red";
       conf.style.border = "2px solid red"; 
}
});

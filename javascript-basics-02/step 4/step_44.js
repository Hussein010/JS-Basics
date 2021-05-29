var name_1 = document.getElementById("name");
var surname_1 = document.getElementById("surname");
var city_1 = document.getElementById("city");
var clear = document.querySelector("button");


clear.addEventListener("click", () => {
    if(confirm("so you want to clear ?")){
        name_1.value="";
        surname_1.value="";
        city_1.value="";
    }
});
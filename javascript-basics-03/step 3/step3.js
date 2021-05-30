var greenJ = document.querySelector(".green")
var redJ = document.querySelector(".red")
var blueJ = document.querySelector  (".blue")
var textJ = document.getElementById("text");
greenJ.addEventListener("click", () => {
    textJ.style.color = "green";
})
redJ.addEventListener("click", () => {
    textJ.style.color = "red";
})
blueJ.addEventListener("click", () => {
    textJ.style.color = "blue";
})


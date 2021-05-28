var onclick = document.getElementById("validate") 
           
onclick.addEventListener("click",() => { 
var x =  document.getElementById("first_number").value;
var y = document.getElementById("second_number").value;
var remain = x % y;
    alert(remain); 
 });      

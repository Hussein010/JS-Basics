var onclick = document.getElementById("validate") 
           
onclick.addEventListener("click", function() { 
var x =  document.getElementById("shoe_size").value;
var y = document.getElementById("year").value;
var result =((((x * 2) + 5) * 50) - y) + 1766;
     alert(result); 
 });      

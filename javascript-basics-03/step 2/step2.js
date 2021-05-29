var show = document.getElementById("show");
var hide = document.getElementById("hide");
var texte = document.getElementById("texte");

var choose = [show,hide];
    choose.addEventListener("click", () => {
        if( item === choose[0]){
            texte.style.color = "black";
        }else{
            texte.style.display = "none";
        }
    });

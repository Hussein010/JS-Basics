var show = document.getElementById("show");
var hide = document.getElementById("hide");
var texte = document.getElementById("texte");

    hide.addEventListener("click", () => {
       
            texte.style.display = "none";
        
    });
    show.addEventListener("click", () => {
       
        texte.style.display = "block";
    
});

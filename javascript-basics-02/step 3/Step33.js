var name_1 = document.getElementById("name");

name_1.addEventListener("change", () => {
    document.getElementById("new").innerHTML = name_1.value;
    }); 
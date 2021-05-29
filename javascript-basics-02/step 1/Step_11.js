var image = document.querySelector("#image1");
image.addEventListener("mouseover", () => {
    image.src = image.src.replace ("image1.jpg","image1_2.jpg");
});
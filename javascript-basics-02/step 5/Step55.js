
var image_1 = document.querySelector("#image1");
var image_2 = document.querySelector("#image2");
var image_3 = document.querySelector("#image3");
var image_4  = document.querySelector("#image4");
var image_5 = document.querySelector("#image5");

image_1.addEventListener("mouseover", () => {
    image_1.src = image_1.src.replace ("image1.jpg","image1_23.jpg");
});
image_2.addEventListener("mouseover", () => {
    image_2.src = image_2.src.replace ("image2.jpg","image1_23.jpg");
});
image_3.addEventListener("mouseover", () => {
    image_3.src = image_3.src.replace ("image3.jpg","image1_23.jpg");
});
image_4.addEventListener("mouseover", () => {
    image_4.src = image_4.src.replace ("image4.jpg","image_23.jpg");
});
image_5.addEventListener("mouseover", () => {
    image_5.src = image_5.src.replace ("image5.jpg","image_23.jpg");
});
// didn't manage how to do the function so i did it one at a time

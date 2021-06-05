let image = document.querySelector('.ship img');
let downloadingImage = new Image();

downloadingImage.onload = function(){
    image.src = this.src;
    image.classList.add("loaded");
};
downloadingImage.src = "./images/header/bubbles.png";


var image2 = document.querySelector('.rest img');
var downloadingImage2 = new Image();

downloadingImage2.onload = function(){
    image2.src = this.src;
    image2.classList.add("loaded");
};
downloadingImage2.src = "./images/header/bubbles_rest.png";
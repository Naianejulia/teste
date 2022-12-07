var imagens = ["image1.png", "image2.png", "image3.png"];
var imagematual = 0;

function trocaimagem() {
 imagematual = (imagematual + 1) % 4;
document.querySelector('.gif img'). src = imagens[imagematual];
}
setInterval(trocaimagem, 1500);
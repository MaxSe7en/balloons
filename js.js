const images = document.querySelector(".image-container");
const image = document.querySelectorAll("img");
console.log(image);

let ind = 0;

function run() {
  ind++;

  if (ind > image.length - 1) {
    ind = 0;
  }
  images.style.transform = `translateX(${-ind * 320}px)`;
}

setInterval(run, 2000);

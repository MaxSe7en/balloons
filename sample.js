function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomStyles() {
  let r = random(255);
  let g = random(255);
  let b = random(255);
  let mt = random(200);
  let ml = random(50);
  let dur = random(5) + 5;
  return `
    background-color: rgba(${r},${g},${b},0.7);
    color: rgba(${r},${g},${b},0.7); 
    box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
    margin: ${mt}px 0 0 ${ml}px;
    animation: float ${dur}s ease-in infinite
    `;
}

function createBalloons(num) {
  let balloonContainer = document.getElementById("balloon-container");
  for (let i = num; i > 0; i--) {
    let balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.cssText = getRandomStyles();
    balloonContainer.append(balloon);
  }
}

window.onload = function () {
  createBalloons(100);
};
function redirect() {
  window.location = "pictures.html";
}
setTimeout(redirect, 10000);

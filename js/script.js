var css = document.querySelector("h3");
var colors = document.querySelectorAll(".colorPicker");
var body = document.querySelector("body");
var span = document.querySelector(".colorValue");
var random = document.querySelector(".random");

function generateRandom(){
  colors[0].value= '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  colors[1].value= '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  updateBackground();
}

random.addEventListener("click",generateRandom);

colors.forEach((item, i) => {
  item.addEventListener("input", updateBackground);
});

function setCss(){
    span.textContent=body.style.background + ";";
}

function updateBackground() {
  body.style.background = "linear-gradient(to right," + colors[0].value + "," + colors[1].value + ")";
  setCss();
}

updateBackground();

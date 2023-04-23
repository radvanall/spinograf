let button = document.getElementById("start");
var begin = false;
var canvas = document.getElementById("c1");
var ctx = canvas.getContext("2d");
var clear = document.getElementById("clear");
var hR = document.getElementById("hR");
var hr = document.getElementById("hr");
var hd = document.getElementById("hd");

var RSlider = document.getElementById("R");
var rSlider = document.getElementById("r");
var dSlider = document.getElementById("d");

var teta = 0;
var R = 0;
var d = 40;
var r = 10;

button.onclick = function () {
  if (begin) {
    begin = false;
  } else {
    begin = true;
    setTimeout(spiro, 50);
  }
};

function spiro() {
  x = (R - r) * Math.cos(teta) + d * Math.cos(((R - r) / r) * teta);
  y = (R - r) * Math.sin(teta) - d * Math.sin(((R - r) / r) * teta);
  teta = teta + 0.01;
  ctx.fillRect(x + 300, y + 300, 3, 3);
  if (begin) {
    setTimeout(spiro, 1);
  }
}

clear.onclick = () => {
  ctx.clearRect(0, 0, 600, 600);
  teta = 0;
};

var modify = (event) => {
  hR.innerText = "R=" + event.target.value;
  R = RSlider.value;
};

RSlider.oninput = modify;

rSlider.oninput = (event) => {
  hr.innerText = "r=" + event.target.value;
  r = rSlider.value;
};

dSlider.oninput = (event) => {
  hd.innerText = "d=" + event.target.value;
  d = dSlider.value;
  console.log(event);
};

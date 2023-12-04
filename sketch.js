var hydra = new Hydra({
  canvas: document.getElementById("myCanvas")
})
osc(5, 0.05, 0.003)
.kaleid([3,4,5,7,8,9,10].fast(0.1))
.color(0.55, 0.29)
.colorama(0.9)
.modulateRotate(o0,()=>Math.sin(time) * 0.003)
.modulate(o0, 0.8)
.scale(0.7)
.out(o0)

let hc, pg;

function preload() {
  font = loadFont('assets/AppleGaramond.ttf')
}

function setup() {
  createCanvas(1200, 675);
  hc = select("#myCanvas")
  hc.hide()
  background(220);
  textInput = createInput()
  textSize(30)
  fill('#ffedcf')
  textFont(font)
}

function draw() {
  image(hc, 0, 0);
  text(textInput.value(), 20, 10, 1175, 660)
}
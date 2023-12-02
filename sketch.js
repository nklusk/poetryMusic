var hydra = new Hydra({
  canvas: document.getElementById("myCanvas")
})
osc(5, 0.05, 0.001)
.kaleid([3,4,5,7,8,9,10].fast(0.1))
.color(0.55, 0.29)
.colorama(0.9)
.modulateRotate(o0,()=>Math.sin(time) * 0.003)
.modulate(o0, 0.8)
.scale(0.7)
.out(o0)

let hc, pg;

function setup() {
  createCanvas(400, 400);
  hc = select("#myCanvas")
  // hc.hide()
  background(220);
  pg = createGraphics(width, height)
}

function draw() {
  // if(frameCount%30==0)print(frameRate())
  pg.image(hc, 0, 0);
  pg.loadPixels()
  d = pg.pixelDensity()
  noStroke()
  for (let i = 0; i < 2000; i++) {
    let x = int(random(width));
    let y = int(random(height));
    let id = 4 * d * (x + y * width * d)
    fill(pg.pixels[id+0],pg.pixels[id+1],pg.pixels[id+2])
    fill(pg.get(x, y))
    ellipse(x, y, 1);
  }
  text("HI", 100, 100)
  textSize(50)
  
}
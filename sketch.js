let c, r;
let s = 25;
let w = 600;
let h = 600;

function setup() {
  createCanvas(600, 600, WEBGL);
  c = w / s;
  r = h / s;
}

function draw() {
  translate(-width / 2, -height / 2);
  background(0);
  stroke(200);
  noFill();
  for (let y = 0; y < r; ++y) {
    beginShape(TRIANGLE_STRIP);
    for (let x = 0; x <= c; ++x) {
      vertex(x * s, y * s);
      vertex(x * s, (y + 1) * s);
    }
    endShape();
  }

}
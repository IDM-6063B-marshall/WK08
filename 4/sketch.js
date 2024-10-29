// TODO: saving images; freehanding a shape and masking to that 

let mImg;
let mPg;

function preload() {
  mImg = loadImage("../assets/arara.jpg");
}

function mPgStar(x, y, w, c, ctx) {
  c = c | (w / 10);
  mPg.push();
  mPg.translate(x, y);
  mPg.beginShape();
  let r = w / 2;
  mPg.vertex(0, -r);
  mPg.vertex(c, -c);
  mPg.vertex(r, 0);
  mPg.vertex(c, c);
  mPg.vertex(0, r);
  mPg.vertex(-c, c);
  mPg.vertex(-r, 0);
  mPg.vertex(-c, -c);
  mPg.endShape(CLOSE);
  mPg.pop();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0); // transparent background
  mPg = createGraphics(mImg.width, mImg.height);
  mPg.background = (0, 0);
  mPg.fill(255)
  mPgStar(300, 300, 400)
  // stroke(0);
  // fill(255);
  // star(width / 2, height / 2, 400);

  image(mPg, 100, 100);

}

function draw() {}

// function mousePressed(){
//   save("star_mask.png");
// }

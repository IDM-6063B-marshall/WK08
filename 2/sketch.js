// TODO: x,y to canvas

let mImg;

function preload() {
  mImg = loadImage("../assets/arara.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);

  mImg.resize(width, 0);
  mImg.loadPixels();

  let rectDim = 16;
  for (let y = 0; y < height; y += rectDim) {
    for (let x = 0; x < width; x += rectDim) {
      fill(255, 255, 255);
      rect(x, y, rectDim);
    }
  }
  mImg.updatePixels();

  image(mImg, 0, 0);
}

function draw() {}

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
      //maybe instead of this rectangle being white we want to get info from our image
      let pixIdx = y * mImg.width + x;
      //account for split up up rbg values
      let p5Idx = 4 * pixIdx
      let redVal = mImg.pixels[p5Idx + 0];
      let greenVal = mImg.pixels[p5Idx + 1];
      let blueVal = mImg.pixels[p5Idx + 2];
      fill(redVal, greenVal, blueVal);
      let diam = map(blueVal, 0, 255, 16, 8)
      //rect(x, y, rectDim);
      rect(x, y, diam)
    }
  }
  mImg.updatePixels();

  //image(mImg, 0, 0);
}

function draw() {}

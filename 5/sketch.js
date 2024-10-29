// TODO: cp 02, but use video
//videos are lists of images
//https://p5js.org/examples/imported-media-video-capture/

let mCamera;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mCamera = createCapture(VIDEO); //could also do sound
  mCamera.size(windowWidth, windowHeight*4/3);
  mCamera.hide();
}

function draw() {
  background(0);
  image(mCamera, 0, 0);

  mCamera.loadPixels();

  let rectDim = 10;
  noStroke();
  for (let y = 0; y < height; y += rectDim) {
    for (let x = 0; x < width; x += rectDim) {
      let pixIdx = y * mCamera.width + x;
      let p5Idx = 4 * pixIdx;
      let redVal = mCamera.pixels[p5Idx + 0];
      let greenVal = mCamera.pixels[p5Idx + 1];
      let blueVal = mCamera.pixels[p5Idx + 2];
      fill(redVal, greenVal, blueVal);
      //let diam = map((greenVal+redVal+blueVal)/3, 255, 32, 8)
      ellipse(x, y, rectDim);
    }
  }
  mCamera.updatePixels();
}

function mousePressed() {
  print(mCamera.width, mCamera.height);
}

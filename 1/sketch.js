// TODO: effect based on x,y

let mImg;

function preload() {
  mImg = loadImage("../assets/arara.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  mImg.resize(600, 0);
  mImg.loadPixels();

  for (let idx = 0; idx < mImg.pixels.length; idx += 4) {
    // as index increments by 4 we hit all the red pixels, divide by 4 to get the pixel number of the red value
    //we get x and y of pixel we are looking at
    //useful if for ex we wanted to apply a different effect to different parts of the image
    let pixIdx = idx / 4;
    let y = int(pixIdx / mImg.width);
    let x = pixIdx % mImg.width;

    let redVal = mImg.pixels[idx + 0];
    let greenVal = mImg.pixels[idx + 1];
    let blueVal = mImg.pixels[idx + 2];
    //let alphaVal = mImg.pixels[idx + 3];

    //calc a new alpha val to map onto the Y value; fully opaque on top and fully transparent on bottom
    //let = alphaVal = map(y, 0, mImg.height, 255, 0)
    //another one with x and y
    let = alphaVal = map(y * x, 0, mImg.height * mImg.width, 255, 0);
    stroke(redVal, greenVal, blueVal, alphaVal);

    //only drawing center half of the image
    if (x > mImg.width / 4 && x < 0.75 * mImg.width) {
      point(x, y);
    }

    // point(x, y)
  }
  mImg.updatePixels();

  // image(mImg, 0, 0);
}

function draw() {}

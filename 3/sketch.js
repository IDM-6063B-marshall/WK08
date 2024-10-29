// TODO: mask > lets you cover an image with a different PNG with transparent and nontransparent pixels 

//loading both in processing lets you overlay one and another and crop

//this is very helpful/common in 3d shapes, VR, etc > texturing

let mImg;
let mMask;

function preload() {
  mImg = loadImage("../assets/arara.jpg");
  mMask = loadImage("../assets/mask.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);

  mImg.resize(600, 0);
  //resizing this smaller gives a blur effect
  mMask.resize(100, 0);

  mImg.mask(mMask);

  image(mImg, 0, 0);
}

function draw() {}

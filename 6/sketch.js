// TODO: ml5

let video;
let faceMesh;
let faces = [];

function preload() {
  faceMesh = ml5.faceMesh();
}

function gotFaces(results) {
  faces = results;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  faceMesh.detectStart(video, gotFaces);
}

function draw() {
  image(video, 0, 0);

  print(faces);
}

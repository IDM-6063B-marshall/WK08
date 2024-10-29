// TODO: ml5

let video;
let faceMesh;
let faces = [];

function preload() {
  faceMesh = ml5.faceMesh(); //ml5 is a library we imported
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

  //map the keypoints onto the face!!
  if (faces.length > 0) {
  let keypoints = faces[0].lips.keypoints;
  noStroke()
  fill (200, 0, 0)
  for (let idx = 0; idx < keypoints.length; idx++){
ellipse(keypoints[idx].x, keypoints[idx].y, 3)
  
  }
  }
}

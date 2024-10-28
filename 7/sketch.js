// TODO: The DOM

let sliderRed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(24);

  sliderRed = createSlider(0, 255, 0);
  sliderRed.position(10, 10);
  sliderRed.style("width", width - 20 + "px");
}

function draw() {
  let valR = sliderRed.value();

  background(valR, 0, 0);

  fill(255 - valR, 255, 255);
  text(valR + ", " + 0 + ", " + 0, width / 2, height / 2);
}

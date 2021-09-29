let t = 0;
let rSlider, gSlider, bSlider;
//time variable
let x = 0;
let y = 0;

function setup() {
  createCanvas(800, 600);
  textSize(20);
  noStroke();

  rSlider = createSlider(0, 255, 0);
  rSlider.position(185, 550);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(325, 550);
  bSlider = createSlider(0, 255, 0);
  bSlider.position(475, 550);
}

function draw() {
  const r = rSlider.value();
  const g = gSlider.value();
  const b = bSlider.value();
  background(20, 20);
  fill(255);
  text("R", 245, 550);
  text("G", 385, 550);
  text("B", 535, 550);
  fill(r, g, b);

  for (let x = 0; x <= width; x = x + 20) {
    for (let y = 0; y <= height; y = y + 20) {
      const xAngle = map(mouseX, 0, width, -5 * PI, 5 * PI, true);
      const yAngle = map(0, 0, height, -5 * PI, 5 * PI, true);

      const angle = xAngle * (x / width) + yAngle * (y / height);

      const myX = x + 15 * cos(5 * PI * t + angle);
      const myY = y + 15 * sin(5 * PI * t + angle);

      rect(myX, myY, 10, 10);
    }
  }

  t = t + 0.005;

  x = lerp(x, mouseX, 0.065);
  y = lerp(y, mouseY, 0.065);

  fill(255 - r, 255 - g, 255 - b);
  rect(x, y, 30, 30);
}

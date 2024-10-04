function setup() {
  createCanvas(400, 400);
  background(200, 50, 50); 

  let centerX = width / 2;
  let centerY = height / 2;

  drawHalfCircle(centerX, centerY, 280, color(220, 220, 220), color(50, 120, 250)); 


  drawHalfCircle(centerX, centerY, 220, color(0, 0, 0), color(250, 220, 50)); 


  drawHalfCircle(centerX, centerY, 160, color(240, 100, 60), color(240, 100, 60)); 


  drawTriangle(centerX, centerY, 60, color(50, 50, 50));
}

function drawHalfCircle(x, y, diameter, leftColor, rightColor) {
  noStroke();
  

  fill(leftColor);
  arc(x, y, diameter, diameter, PI / 2, 3 * PI / 2, PIE);


  fill(rightColor);
  arc(x, y, diameter, diameter, -PI / 2, PI / 2, PIE);
}

function drawTriangle(x, y, size, triColor) {
  fill(triColor);
  noStroke();
  let h = size * sqrt(3) / 2;
  triangle(x, y - h / 2, x - size / 2, y + h / 2, x + size / 2, y + h / 2);
}

let img1;
let img2;
let y = 0;
let x = 150;
let angle = 0;

function setup() {
  createCanvas(600, 400);
  img1 = loadImage('sun.png');
  img2 = loadImage('earth.png');
  img3 = loadImage('star.png');
  angleMode(DEGREES);
}

function draw () {
  background(0);

  //Bagian Kanan
  image(img1, 400, 150, 100, 100);
  image(img2, 400, 90, 50, 50);

  image(img3, 370, 70, 20, 20);
  image(img3, 480, 280, 20, 20);
  image(img3, 550, 90, 20, 20);
  

  //Bagian Kiri
  image(img3, 50, 70, 20, 20);
  image(img3, 120, 175, 20, 20);
  image(img3, 220, 325, 20, 20);
  image(img3, 90, 290, 20, 20);
  image(img3, 250, 90, 20, 20);

  stroke(255);
  line(300, 0, 300, 400);

  y = y + 2;
  if (y > 400+100)y = -100

  push();
  translate(x, y);
  rotate(angle);
  image(img1, -50, -50, 100, 100);
  pop();

  translate(x, y);
  rotate(-angle + 3);
  image(img2, -50, -110, 50, 50);

  angle = angle + 2;
}
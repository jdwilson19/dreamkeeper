let images = [];
let currentImageIndex = 0;
let link;

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function preload(){
  images[0] = loadImage("music.png");
  images[1] = loadImage("music2.png");
  images[2] = loadImage("music3.png");
  images[3] = loadImage("music4.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#90C6EC');
  imageMode(CENTER);


  link = createA("page4.html", "melodies ");
  link.style('font-family', 'Junge');
  link.style('font-size', '50px');
  link.style('color', '#FFD039');
  link.style('text-decoration', 'none');
  link.position(windowWidth / 2 - link.width / 2., windowHeight * 0.85);
}

function draw() { 
  fill('black');
  textFont("Junge");
  textSize(50);
  textAlign(CENTER);
  text('Bring me all of your', width / 2, height / 4);  

  drawHeart(width / 2, height / 2,);

  textAlign(LEFT);
  fill('black');

  let heartX = width / 2.6; 
  let heartY = height * 0.85;

  text('Heart', heartX, heartY);

  let heartWidth = textWidth('Heart');

  if (link) {
    link.position(heartX + heartWidth + 10, heartY - 46); 
  }

  textAlign(CENTER);
  textSize(20);
  fill('black');
  text('(Click Around)', width/2, height/1.10);
}

//modified from internet
function drawHeart() {
  fill('#FFD039'); 
  noStroke();
  push();
  translate(width / 2, height / 2)

  scale(8)

  beginShape();
  vertex(0, 0);
  bezierVertex(0, -20, 40, -10, 0, 25);
  vertex(0, 0);
  bezierVertex(0, -20, -40, -10, 0, 25);
  endShape();
  
  pop();
}

function mousePressed() {
  image(images[currentImageIndex], mouseX, mouseY);

  currentImageIndex = (currentImageIndex + 1) % images.length;  
}
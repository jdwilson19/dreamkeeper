let images = [];
let currentImageIndex = 0;

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

  let link = createA("http://127.0.0.1:5500/page4.html", "melodies ");
  link.style('font-family', 'Junge');
  link.style('font-size', '50px');
  link.style('color', '#FFD039');
  link.style('text-decoration', 'none');
  link.position(735, 595)
}

function draw() { 
  fill('black');
  textFont("Junge");
  textSize(50);
  textAlign(CENTER);
  text('Bring me all of your', width / 2, height / 4);  // Dynamically center text vertically

  // Draw heart in the center
  drawHeart(width / 2, height / 2);

  text('Heart ', width / 2.34, height - 100);  // Dynamically position bottom text
}

function drawHeart(x, y) {
  fill('#FFD039'); // Color of the heart
  noStroke();
  
  let r = 40; // Increased size of the heart
  
  // Draw heart using parametric equations
  beginShape();
  for (let a = 0; a < TWO_PI; a += 0.1) {
    const xPos = r * pow(sin(a), 3);
    const yPos = -r * (13 * cos(a) - 5 * cos(2 * a) - 2 * cos(3 * a) - cos(4 * a));
    
    // Center and scale the heart shape
    vertex(x + xPos, y + yPos);
  }
  endShape(CLOSE);
}

function mousePressed() {
  imageMode(CENTER);
  image(images[currentImageIndex], mouseX, mouseY);

  // Cycle to the next image
  currentImageIndex = (currentImageIndex + 1) % images.length;  // Loop back to 0 after the last image
}

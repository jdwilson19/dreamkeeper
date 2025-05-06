let img;
let link;

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}

function preload() {
  img = loadImage("cloud-cloth.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('white');

  link = createA("page5.html", "cloud"); 
  link.style('font-family', 'Italianno');
  link.style('font-size', '75px');
  link.style('color', '#FFD039');
  link.style('text-decoration', 'none');
}

function draw() { 
  fill('black');
  textFont("Junge");
  textSize(50);
  textAlign(CENTER);

  text('That I may wrap them', width / 2, height / 6.5); 

  let imgHeight = img.height * 1; 
  let imgWidth = img.width * 1;  
  image(img, width / 2 - imgWidth / 2, height / 2 - imgHeight / 2, imgWidth, imgHeight); 

  let sentenceY = height / 1.1;
  textAlign(LEFT);

  let sentenceStartX = width / 2 - textWidth("In a blue cloud -cloth") / 2;
  text("In a blue", sentenceStartX, sentenceY);

  let cloudX = sentenceStartX + textWidth("In a blue ");
  if (link) {
    link.position(cloudX, sentenceY - 60);
  }

  text("-cloth", cloudX + textWidth("cloud"), sentenceY);
}
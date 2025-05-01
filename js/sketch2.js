function windowResized(){
    resizeCanvas(windowWidth, windowHeight)
}

function preload() {
    // Load image before setup
    img = loadImage("blue_cloth.png");  // Replace with your image path
  }

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('white');
    let link = createA("page5.html", "cloud"); 
    link.position(745, 630);
    link.style('font-family', 'Junge');
  link.style('font-size', '50px');
  link.style('color', '#FFD039');
  link.style('text-decoration', 'none');
}

function draw() { 
    fill('black');
    textFont("Junge");
    textSize(50);
    textAlign(CENTER); // Align text to the center

    text('That I may wrap them', width / 2, height / 6.5); // Top text

    let imgHeight = img.height * 1; // Scale image height
  let imgWidth = img.width * 1;   // Scale image width
  image(img, width / 2 - imgWidth / 2, height / 2 - imgHeight / 2, imgWidth, imgHeight); 

    text('In a blue            -cloth', width / 2, height / 1.1); 
}


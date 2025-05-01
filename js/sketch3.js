let imgCloth, imgHand1, imgHand2;

function windowResized(){
    resizeCanvas(windowWidth, windowHeight)
  }

  function preload() {
    // Load image before setup
    imgCloth = loadImage("blue_cloth.png");  // Image 1
  imgHand1 = loadImage("hand1.png");       // Image 2
  imgHand2 = loadImage("hand2.png");   
  }

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('white');
    let link = createA("http://127.0.0.1:5500/page6.html", "world"); 
    link.position(772, 608);
    link.style('font-family', 'Junge');
  link.style('font-size', '50px');
  link.style('color', '#FFD039');
  link.style('text-decoration', 'none');
}

function draw() { 
    fill('black');
    textFont("Junge");
    textSize(50);
    textAlign(CENTER);  // Center the text

    let clothScale = 0.6;
    let clothW = imgCloth.width * clothScale;
    let clothH = imgCloth.height * clothScale;
    image(imgCloth, width / 2 - clothW / 2, height / 2 - clothH / 2, clothW, clothH); 
  
    // Draw hand images *after* the cloth so they appear on top
    let handScale = 0.4;
    let handW = imgHand1.width * handScale;
    let handH = imgHand1.height * handScale;
  
    // You can adjust Y to position them slightly above the cloth
    let handY = height / 2 - clothH / 2 - handH / 1.5;
  
    image(imgHand1, width / 2 - handW * 1.2, handY, handW, handH); // Left hand
    image(imgHand2, width / 2 + handW * 0.2, handY, handW, handH); // Right hand
  

  text('Away from the too rough fingers', width / 2, 600);  // Top text
  text('Of the            .', width / 2, height - 90);  // Bottom text
}
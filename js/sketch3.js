let imgCloth, imgHand1, imgHand2;
let handYStart;
let handYTarget;
let handSpeed = 0.1;
let link;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function preload() {
  imgCloth = loadImage("cloud-cloth.png");
  imgHand1 = loadImage("hand1.png");
  imgHand2 = loadImage("hand2.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('white');

  handYStart = 0;
  handYTarget = 0;

  link = createA("page6.html", "world");
  link.style('font-family', 'Junge');
  link.style('font-size', '50px');
  link.style('color', '#FFD039');
  link.style('text-decoration', 'none');
}

//hand animation assisted by chatgbt
function draw() {
  background('white');
  fill('black');
  textFont("Junge");
  textSize(50);
  textAlign(CENTER);

  let clothScale = 0.6;
  let clothW = imgCloth.width * clothScale;
  let clothH = imgCloth.height * clothScale;

  let clothX = width / 2 - clothW / 2;
  let clothY = height / 2 - clothH / 2;

  image(imgCloth, clothX, clothY, clothW, clothH);

  let handScale = 0.4;
  let handW = imgHand1.width * handScale;
  let handH = imgHand1.height * handScale;

  let hoverY = clothY - handH / 1.5;
  let restY = height;

  if (
    mouseX > clothX &&
    mouseX < clothX + clothW &&
    mouseY > clothY &&
    mouseY < clothY + clothH
  ) {
    handYTarget = hoverY;
  } else {
    handYTarget = restY;
  }

  handYStart = lerp(handYStart, handYTarget, handSpeed);

  image(imgHand1, width / 2 - handW * 1.2, handYStart, handW, handH);
  image(imgHand2, width / 2 + handW * 0.2, handYStart, handW, handH);

  textAlign(CENTER);
  text('Away from the too rough fingers', width / 2, 600);

  textAlign(LEFT);
  let sentenceY = height - 90;
  let sentenceStartX = width / 2 - textWidth("Of the world.") / 2;

  text("Of the", sentenceStartX, sentenceY);

  let linkX = sentenceStartX + textWidth("Of the ");
  let linkY = sentenceY - 47;
  link.position(linkX, linkY);

  text(".", linkX + textWidth("world "), sentenceY);
}
let img;
let myFont;
function preload() {
  img = loadImage('assets/Miedito.png');
  myFont = loadFont('assets/Letters for Learners Lined.ttf');
}

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  textFont(myFont);
}

function draw() {
  background(220);
  image(img, 0, 0, windowWidth, windowHeight);
  for (let i = 0; 15 > i; i++){
  noStroke();
  textSize(90);
  fill(255, 250, 236)
  text('Eres un adulto', 340, 258);
  textSize(105);
  fill(191*i, 20*i, 0*i);
  text('No deberias tener miedo', 100, 450+i*45);
  }
}